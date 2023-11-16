import path from "path";
import express from "express";
import { engine } from "express-handlebars";
import { getDirname } from "./helpers/utils.js";
import { indexRouter, courseRouter, taskRouter } from "./routes/index.js";

// Create app instance
const app = express();

// Decode JSON data
app.use(express.json());

// Decode Form URL Encoded data
app.use(express.urlencoded({ extended: true }));

// Views
app.set("views", path.join(getDirname(import.meta.url), "views"));
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// Routes
app.use("/", indexRouter);
app.use("/courses", courseRouter);
app.use("/tasks", taskRouter);

export default app;
