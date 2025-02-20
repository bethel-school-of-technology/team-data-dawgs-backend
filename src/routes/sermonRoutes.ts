import express from "express";
import {getSermons, createSermon, deleteSermon, updateSermon} from "../controllers/sermonController";

const router = express.Router();

router.get("/", getSermons);
router.post("/", createSermon);
router.put("/:id", updateSermon);
router.delete("/:id", deleteSermon);

export default router;