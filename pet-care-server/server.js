require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db"); // ✅ IMPORT

const adoptionRoutes = require("./routes/adoptionRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/adoptions", adoptionRoutes);
app.use("/api/payments",paymentRoutes);

// test route
app.get("/", (req, res) => {
  res.send("🚀 Pet Care Server Running");
});

// ✅ DATABASE CONNECT CALL
connectDB()
  .then(() => {
    console.log("🔥 Database Ready");
  })
  .catch((err) => {
    console.error("❌ DB Error:", err);
  });

// server start
app.listen(port, () => {
  console.log(`🚀 Server running at port: ${port}`);
});