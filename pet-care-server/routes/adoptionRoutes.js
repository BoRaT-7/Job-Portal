const express = require("express");
const router = express.Router();

const {
  createAdoption,
  getAllAdoptions,
} = require("../controllers/adoptionController");

// POST
router.post("/create", createAdoption);

// GET
router.get("/", getAllAdoptions);

module.exports = router;