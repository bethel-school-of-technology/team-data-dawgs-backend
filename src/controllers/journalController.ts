import { Request, Response } from "express";
import { Journal } from "../models/journal";

export const getJournals = async (req: Request, res: Response) => {
    try {
        const journals = await Journal.findAll();
        res.status(200).json(journals);
    } catch (error) {
        console.error("Error fetching journals:", error);
        res.status(500).json({ error: "Error fetching journals" });
    }
};

export const createJournal = async (req: Request, res: Response) => {
    try {
        const { content } = req.body;
        const newJournal = new Journal();
        newJournal.content = content;
        await newJournal.save();
        res.status(201).json(newJournal);
    } catch (error) {
        console.error("Error creating journal:", error);
        res.status(500).json({ error });
    }
};

export const updateJournal = async (req: Request, res: Response) => {
    let id = req.params.id;
    let newJournal = req.body;

    let journalFound = await Journal.findByPk(id);

    if (journalFound) {
        await Journal.update(newJournal, {
            where: { id: id }
        });
        res.status(200).json();
    }
    else {
        res.status(400).json();
    }
}

export const deleteJournal = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const journal = await Journal.findByPk(id);
        if (!journal) {
            return res.status(404).json({ error: "Journal not found" });
        }

        await journal.destroy();
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting journal:", error);
        res.status(500).json({ error: "Error deleting journal" });
    }
};

