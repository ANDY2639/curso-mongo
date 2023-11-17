import { Schema, model } from "mongoose";

export const Task = model(
  "Task",
  new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      completed: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  )
);
