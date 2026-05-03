const express = require("express");
const multer = require("multer");

const router = express.Router();

const {
  getAllPets,
  createPet,
} = require("../controllers/petController");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.get("/", getAllPets);
router.post("/", upload.single("image"), createPet);

module.exports = router;