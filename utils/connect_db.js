import mongoose from "mongoose";

const db = async function () {
  return mongoose.connect(process.env.MONGO_URI);
};

export default db;
