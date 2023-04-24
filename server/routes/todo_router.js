const express = require("express");
const taskRouter = express.Router();
const {
  addTask,
  deleteTask,
  getTasks,
  editTask,
} = require("../controllers/todo-controller");

taskRouter.post("/task", addTask);
taskRouter.get("/task", getTasks);
taskRouter.delete("/task/:id", deleteTask);
taskRouter.patch("/task/:id", editTask);

module.exports = taskRouter;
