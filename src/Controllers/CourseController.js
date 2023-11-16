import { Course } from "../Models/Course.js";

const getAll = async (req, res) => {
  const courses = await Course.find({});
  res.json({ courses });
};

const getOne = async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.json({ course });
};

const create = async (req, res) => {
  const course = Course({ title: req.body.title, category: req.body.category });
  const courseSaved = await course.save();
  res.json({ message: "Course created successfully" });
};

const update = async (req, res) => {
  const course = await Course.findById(req.params.id);

  course.title = req.body.title;
  course.category = req.body.category;
  course.save();

  res.json({ message: "Course updated successfully" });
};

const destroy = async (req, res) => {
  const courseDeleted = await Course.deleteOne({ _id: req.params.id });
  res.json({ message: "Course deleted successfully", courseDeleted });
};

export default { getAll, getOne, create, update, destroy };
