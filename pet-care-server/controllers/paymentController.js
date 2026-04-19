// controllers/paymentController.js
const getPaymentCollection = require("../models/paymentModel");

// ✅ Create Payment / Order
const createPayment = async (req, res) => {
  try {
    const {
      name,
      phone,
      address,
      paymentMethod,
      transactionId,
      productName,
      productCategory,
      productImage,
      unitPrice,
      quantity,
    } = req.body;

    // Validation
    if (
      !name ||
      !phone ||
      !address ||
      !paymentMethod ||
      !transactionId ||
      !productName ||
      !unitPrice ||
      !quantity
    ) {
      return res.status(400).send({ error: "All required fields must be provided" });
    }

    const totalCost = Number(unitPrice) * Number(quantity);

    const paymentData = {
      customerName: name,
      phone,
      address,
      paymentMethod,
      transactionId,
      productName,
      productCategory,
      productImage,
      unitPrice: Number(unitPrice),
      quantity: Number(quantity),
      totalCost,
      status: "pending", // pending | confirmed | delivered
      createdAt: new Date(),
    };

    const collection = await getPaymentCollection();
    const result = await collection.insertOne(paymentData);

    res.status(201).send({
      success: true,
      message: "Payment/Order created successfully",
      insertedId: result.insertedId,
      data: paymentData,
    });
  } catch (error) {
    console.error("Create Payment Error:", error);
    res.status(500).send({ error: "Failed to create payment" });
  }
};

// ✅ Get All Payments (Admin)
const getAllPayments = async (req, res) => {
  try {
    const collection = await getPaymentCollection();
    const result = await collection
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    res.send({
      success: true,
      count: result.length,
      data: result,
    });
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch payments" });
  }
};

// ✅ Get Single Payment by ID
const getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const { ObjectId } = require("mongodb");

    const collection = await getPaymentCollection();
    const payment = await collection.findOne({ _id: new ObjectId(id) });

    if (!payment) {
      return res.status(404).send({ error: "Payment not found" });
    }

    res.send({ success: true, data: payment });
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch payment" });
  }
};

// ✅ Update Payment Status (Admin)
const updatePaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const { ObjectId } = require("mongodb");

    const allowedStatus = ["pending", "confirmed", "delivered"];
    if (!allowedStatus.includes(status)) {
      return res.status(400).send({ error: "Invalid status value" });
    }

    const collection = await getPaymentCollection();
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status } }
    );

    res.send({
      success: true,
      message: "Payment status updated",
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    res.status(500).send({ error: "Failed to update payment status" });
  }
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePaymentStatus,
};