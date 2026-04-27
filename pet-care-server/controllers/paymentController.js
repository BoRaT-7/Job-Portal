const getPaymentCollection = require("../models/paymentModel");
const { ObjectId } = require("mongodb");

// ✅ Create Payment
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

    const collection = await getPaymentCollection();

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
      totalCost: Number(unitPrice) * Number(quantity),
      status: "pending",
      createdAt: new Date(),
    };

    const result = await collection.insertOne(paymentData);

    res.status(201).send({
      success: true,
      insertedId: result.insertedId,
      data: paymentData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to create payment" });
  }
};

// ✅ Get All Payments
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

// ✅ Get Single Payment
const getPaymentById = async (req, res) => {
  try {
    const collection = await getPaymentCollection();

    const payment = await collection.findOne({
      _id: new ObjectId(req.params.id),
    });

    if (!payment) {
      return res.status(404).send({ error: "Payment not found" });
    }

    res.send({ success: true, data: payment });
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch payment" });
  }
};

// ✅ Update Status
const updatePaymentStatus = async (req, res) => {
  try {
    const collection = await getPaymentCollection();

    const { status } = req.body;

    const allowed = ["pending", "confirmed", "delivered"];
    if (!allowed.includes(status)) {
      return res.status(400).send({ error: "Invalid status" });
    }

    const result = await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { status } }
    );

    res.send({
      success: true,
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    res.status(500).send({ error: "Failed to update status" });
  }
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePaymentStatus,
};