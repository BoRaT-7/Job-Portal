// models/paymentModel.js
const connectDB = require("../config/db");

async function getPaymentCollection() {
  const db = await connectDB();
  return db.collection("Payments");
  
}
module.exports = getPaymentCollection;