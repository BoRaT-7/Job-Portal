const getAdoptionCollection = require("../models/adoptionModel");

// ✅ Create Adoption
const createAdoption = async (req, res) => {
  try {
    const adoptionData = req.body;

    adoptionData.status = "pending";
    adoptionData.createdAt = new Date();

    const collection = await getAdoptionCollection();
    const result = await collection.insertOne(adoptionData);

    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Failed to create adoption" });
  }
};

// ✅ Get All
const getAllAdoptions = async (req, res) => {
  try {
    const collection = await getAdoptionCollection();
    const result = await collection.find().toArray();

    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch data" });
  }
};

module.exports = {
  createAdoption,
  getAllAdoptions,
};