import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const router = express.Router();


router.get("/", getUsers); 
router.post("/", createUser); 
router.put("/:id", updateUser);
router.delete("/:id", deleteUser); //has something to do w :id --->maybe the incorrect dependencies?

export default router;
