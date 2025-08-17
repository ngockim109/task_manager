import { Router } from "express";
import taskController from "../controllers/task.controller.ts";

const router = Router();

router.get("/", taskController.getTasks);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

export default router;