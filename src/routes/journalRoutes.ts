import express from "express";
import {getJournals, createJournal, deleteJournal, updateJournal} from "../controllers/journalController";

const router = express.Router();

router.get("/", getJournals);
router.post("/", createJournal);
router.put("/:id", updateJournal);
router.delete("/:id", deleteJournal);

export default router;
