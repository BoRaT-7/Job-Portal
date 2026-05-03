const Pet = require("../models/Pet");
const cloudinary = require("../config/cloudinary");

const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find().sort({ createdAt: -1 });
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch pets",
    });
  }
};

const createPet = async (req, res) => {
  try {
    const { name, type, location, description } = req.body;

    if (!name || !type || !location || !description) {
      return res.status(400).json({
        message: "Required fields missing",
      });
    }

    let image = "";
    let imagePublicId = "";

    if (req.file) {
      const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

      const upload = await cloudinary.uploader.upload(base64, {
        folder: "pet-adoption",
      });

      image = upload.secure_url;
      imagePublicId = upload.public_id;
    }

    const pet = await Pet.create({
      name,
      type,
      location,
      description,
      image,
      imagePublicId,
    });

    res.status(201).json({
      success: true,
      pet,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create pet",
      error: error.message,
    });
  }
};

module.exports = {
  getAllPets,
  createPet,
};