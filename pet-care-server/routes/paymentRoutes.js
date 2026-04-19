// routes/paymentRoutes.js
// routes/paymentRoutes.js
const express = require("express");
const router = express.Router();

const {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePaymentStatus,
} = require("../controllers/paymentController");

// Create Payment
router.post("/", createPayment);

// Get All Payments
router.get("/", getAllPayments);

// Get Single Payment
router.get("/:id", getPaymentById);

// Update Payment Status
router.patch("/:id/status", updatePaymentStatus);

module.exports = router;