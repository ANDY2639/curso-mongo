import { Task } from "../Models/Task.js";

const getAll = async (req, res) => {
  const tasks = await Task.find({});
  res.render("tasks", { tasks });
};

const getOne = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json({ task });
};

const create = async (req, res) => {
  const { title, description } = req.body;
  await Task({ title, description }).save();
  res.redirect("/tasks");
};

const update = async (req, res) => {
  const { title, description } = req.body;
  await Task.findOneAndUpdate({ _id: req.params.id }, { title, description });
  res.json({ message: "Task updated successfully" });
};

const destroy = async (req, res) => {
  await Task.deleteOne({ _id: req.params.id });
  res.json({ message: "Task deleted successfully" });
};

export default { getAll, getOne, create, update, destroy };
