import { Request, Response } from "express";
import Verse from "../models/verses";

export const getVerses = async (req: Request, res: Response) => {
  try {
    const verses = await Verse.findAll();
    res.status(200).json(verses);
  } catch (error) {
    console.error("Error fetching verses:", error);
    res.status(500).json({ error: "Error fetching verses" });
  }
};

export const createVerse = async (req: Request, res: Response) => {
  try {
    const { category, location } = req.body;
    const newVerse = await Verse.create({ category, location });
    res.status(201).json(newVerse);
  } catch (error) {
    console.error("Error creating verse:", error);
    res.status(500).json({ error: "Error creating verse" });
  }
};

export const deleteVerse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const verse = await Verse.findByPk(id);
    if (!verse) {
      return res.status(404).json({ error: "Verse not found" });
    }

    await verse.destroy();
    res.status(204).send(); 
  } catch (error) {
    console.error("Error deleting verse:", error);
    res.status(500).json({ error: "Error deleting verse" });
  }
};

