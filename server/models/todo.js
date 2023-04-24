const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  task: String,
});

const Task = mongoose.model("Task", UserSchema);

module.exports = Task;
