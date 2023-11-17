import { Schema, model } from "mongoose";

export const Course = model(
  "Course",
  new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )
);
