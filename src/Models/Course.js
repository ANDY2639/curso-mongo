import { Schema, model } from "mongoose";

export const Course = model(
  "Course",
  new Schema({
    title: String,
    category: String,
  })
);
