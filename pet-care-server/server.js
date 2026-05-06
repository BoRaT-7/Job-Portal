require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const petRoutes = require("./routes/petRoutes");
const adoptionRouters = require("./routes/adoptionRoutes");
const paymentRouters = require("./routes/paymentRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const serviceRouters = require("./routes/serviceRoutes");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json({ limit: "2mb" }));

// routes
app.use("/adoptions", adoptionRouters);
app.use("/api/payments", paymentRouters);
app.use("/reviews", reviewRoutes);
app.use("/services", serviceRouters);
app.use("/pets", petRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Pet Care Server Running");
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`🚀 Server running on ${port}`);
    });
  } catch (err) {
    console.log("DB connection failed:", err);
  }
};

startServer();