import path from "path";
import express from "express";
import Handlebars from 'handlebars';
import { engine } from "express-handlebars";
import { getDirname } from "./helpers/utils.js";
import { indexRouter, courseRouter, taskRouter } from "./routes/index.js";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";

// Create app instance
const app = express();

// Decode JSON data
app.use(express.json());

// Decode Form URL Encoded data
app.use(express.urlencoded({ extended: true }));

// Public static files
app.use(express.static("public"));

// Views
app.set("views", path.join(getDirname(import.meta.url), "views"));
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);
app.set("view engine", ".hbs");

// Routes
app.use("/", indexRouter);
app.use("/courses", courseRouter);
app.use("/tasks", taskRouter);

export default app;
