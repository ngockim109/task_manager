import { Router } from "express";
import userController from "../controllers/user.controller.ts";

const router = Router();

router.get("/", userController.getUsers);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.get("/:id", userController.getUser);
router.delete("/:id", userController.deleteUser);

export default router;