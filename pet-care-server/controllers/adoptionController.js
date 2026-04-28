const getAdoptionCollection = require("../models/adoptionModel");

// ✅ Create Adoption
const createAdoption = async (req, res) => {
  try {
    const adoptionData = req.body;

    if (!adoptionData.name || !adoptionData.email) {
      return res.status(400).send({ error: "Missing required fields" });
    }

    adoptionData.status = "pending";
    adoptionData.createdAt = new Date();

    const collection = await getAdoptionCollection();
    const result = await collection.insertOne(adoptionData);

    res.status(201).send({
      success: true,
      message: "Adoption request created",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: "Failed to create adoption",
    });
  }
};

// ✅ Get All
const getAllAdoptions = async (req, res) => {
  try {
    const collection = await getAdoptionCollection();
    const result = await collection.find().toArray();

    res.send({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: "Failed to fetch data",
    });
  }
};

module.exports = {
  createAdoption,
  getAllAdoptions,
};