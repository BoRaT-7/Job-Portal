const getServiceCollection = require("../models/serviceModel");

const createServiceRequest = async (req, res) => {
  try {
    const collection = await getServiceCollection();

    const result = await collection.insertOne({
      ...req.body,
      status: "pending",
      createdAt: new Date(),
    });

    res.status(201).send({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: "Failed to submit request",
    });
  }
};

const getAllServiceRequests = async (req, res) => {
  try {
    const collection = await getServiceCollection();
    const data = await collection.find().toArray();

    res.send({ success: true, data });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: "Failed to fetch",
    });
  }
};

module.exports = {
  createServiceRequest,
  getAllServiceRequests,
};