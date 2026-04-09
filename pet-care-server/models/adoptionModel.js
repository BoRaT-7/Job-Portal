const connectDB = require("../config/db");

async function getAdoptionCollection() {
  const db = await connectDB();
  return db.collection("Adoption");
}

module.exports = getAdoptionCollection;