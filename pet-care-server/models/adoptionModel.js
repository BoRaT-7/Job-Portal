const connectDB = require("../config/db");

async function getAdoptionCollection() {
  const db = await connectDB();
return db.collection("adoptions");
}

module.exports = getAdoptionCollection;