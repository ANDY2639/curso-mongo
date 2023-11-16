import { Router } from "express";
import taskController from "../Controllers/TaskController.js";

const router = new Router();

router.get("/", taskController.getAll);
router.get("/:id", taskController.getOne);
router.post("/", taskController.create);
router.put("/:id", taskController.update);
router.delete("/:id", taskController.destroy);

export default router;
