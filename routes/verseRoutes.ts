import express from "express";
import {getVerses, createVerse, deleteVerse, updateVerse} from "../controllers/verseController";

const router = express.Router();

router.get("/", getVerses);
router.post("/", createVerse);
router.put("/:id", updateVerse);
// router.delete("/:id", deleteVerse);

export default router;
