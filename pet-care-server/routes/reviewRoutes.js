const express = require("express");
const router = express.Router();
const connectDB = require("../config/db");
const { ObjectId } = require("mongodb");

// CREATE
router.post("/", async (req, res) => {
  const db = await connectDB();

  const review = {
    ...req.body,
    createdAt: new Date(),
  };

  const result = await db.collection("reviews").insertOne(review);
  res.send(result);
});

// GET ALL
router.get("/", async (req, res) => {
  const db = await connectDB();

  const data = await db
    .collection("reviews")
    .find()
    .sort({ createdAt: -1 })
    .toArray();

  res.send(data);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const db = await connectDB();

  const result = await db.collection("reviews").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );

  res.send(result);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const db = await connectDB();

  const result = await db.collection("reviews").deleteOne({
    _id: new ObjectId(req.params.id),
  });

  res.send(result);
});

module.exports = router;