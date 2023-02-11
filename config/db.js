const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log(`MongoDB connected`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

module.exports = connectDB;
