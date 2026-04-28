const express = require("express");
const router = express.Router();

const {
  createServiceRequest,
  getAllServiceRequests,
} = require("../controllers/serviceController");

router.post("/request", createServiceRequest);
router.get("/", getAllServiceRequests);

module.exports = router;