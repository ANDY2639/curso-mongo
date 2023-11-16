import { Task } from "../Models/Task.js";

const getAll = async (req, res) => {
  const tasks = await Task.find({});
  res.json({ tasks });
};

const getOne = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json({ task });
};

const create = async (req, res) => {
  const task = Task({ title: req.body.title, category: req.body.category });
  const taskSaved = await task.save();
  res.json({ message: "Task created successfully" });
};

const update = async (req, res) => {
  const task = await Task.findById(req.params.id);

  task.title = req.body.title;
  task.category = req.body.category;
  task.save();

  res.json({ message: "Task updated successfully" });
};

const destroy = async (req, res) => {
  const taskDeleted = await Task.deleteOne({ _id: req.params.id });
  res.json({ message: "Task deleted successfully", taskDeleted });
};

export default { getAll, getOne, create, update, destroy };
