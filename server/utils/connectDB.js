const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const config = require("../configurations/config");

const connectDB = () => {
  const result = mongoose.connect(config.CONNECTION_URL);
  return result;
};

module.exports = connectDB;
