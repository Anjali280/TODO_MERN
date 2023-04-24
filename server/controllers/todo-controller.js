const Task = require("../models/todo");

//1.Add task
const addTask = async (req, res) => {
  try {
    const task = req.body;
    let todo = await Task.create(task);
    res.status(201).send({
      type: "Success",
      payload: todo,
    });
  } catch (err) {
    console.error(err);

    res.status(500).send({
      error: "Something Went Wrong",
    });
  }
};

//2.Get all Task
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).send({
      type: "success",
      message: "Task fetched Successfully",
      payload: tasks,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      error: "Something Went Wrong",
    });
  }
};

//3.Delete Task
const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedtask = await Task.findByIdAndDelete(id);

    res.status(200).send({
      type: "success",
      message: "delete task successfull",
      payload: deletedtask,
    });
  } catch (err) {
    console.error(err);

    res.status(500).send({
      error: "Something Went Wrong",
    });
  }
};

//4.Edit task
const editTask = async (req, res) => {
  try {
    const editTask = req.body;
    const id = req.params.id;

    let { task } = editTask;
    await Task.findByIdAndUpdate(id, {
      $set: {
        task,
      },
    });

    const updatedTask = await Task.findById(id);
    res.status(200).send({
      type: "success",
      message: "edit task successfull",
      payload: updatedTask,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      error: "Something Went Wrong",
    });
  }
};

module.exports = { addTask, deleteTask, getTasks, editTask };
