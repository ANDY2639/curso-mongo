import { Schema, model } from "mongoose";

export const Task = model(
  "Task",
  new Schema({
    title: String,
    category: String,
  })
);
