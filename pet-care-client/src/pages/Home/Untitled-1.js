require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const petRoutes = require("./routes/petRoutes");
const adoptionRoutes = require("./routes/adoptionRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const serviceRoutes = require("./routes/serviceRoutes");

const app = express();
const port = process.env.PORT || 5000;

/* ---------------- MIDDLEWARE ---------------- */
app.use(cors());
app.use(express.json({ limit: "10mb" })); // only once

/* ---------------- ROUTES ---------------- */
app.use("/pets", petRoutes);
app.use("/adoptions", adoptionRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/reviews", reviewRoutes);
app.use("/services", serviceRoutes);

/* ---------------- HEALTH CHECK ---------------- */
app.get("/", (req, res) => {
  res.send("🚀 Pet Care Server Running");
});

/* ---------------- START SERVER ---------------- */
const startServer = async () => {
  try {
    await connectDB();
    console.log("🔥 DB Connected");

    app.listen(port, () => {
      console.log("🚀 Server running on", port);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();