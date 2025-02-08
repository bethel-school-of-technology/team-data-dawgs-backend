import express from "express";
import { getVerses, createVerse, deleteVerse } from "../controllers/verseController";

const router = express.Router();

router.get("/", getVerses);
router.post("/", createVerse);
router.delete("/:id", deleteVerse);

export default router;
