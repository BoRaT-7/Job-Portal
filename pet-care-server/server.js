require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const adoptionRouters = require("./routes/adoptionRoutes");
const paymentRouters = require("./routes/paymentRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/adoptions", adoptionRouters);
app.use("/api/payments",paymentRouters);
app.use("/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Pet Care Server Running");
});

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