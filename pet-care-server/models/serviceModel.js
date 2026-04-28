
const connectDB = require("../config/db");

const getServiceCollection = async() => {
  const db = await connectDB();
  return db.collection("services_requests");
};

module.exports= getServiceCollection;