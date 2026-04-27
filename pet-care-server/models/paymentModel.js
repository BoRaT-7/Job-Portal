const connectDB = require("../config/db");

const getPaymentCollection = async () => {
  const db = await connectDB();
  return db.collection("payments"); // 🔥 collection name
};

module.exports = getPaymentCollection;