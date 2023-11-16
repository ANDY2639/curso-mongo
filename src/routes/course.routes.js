import { Router } from "express";
import courseController from "../Controllers/CourseController.js";

const router = new Router();

router.get("/", courseController.getAll);
router.get("/:id", courseController.getOne);
router.post("/", courseController.create);
router.put("/:id", courseController.update);
router.delete("/:id", courseController.destroy);

export default router;
