import { Request, Response } from "express";
import { Verse } from "../models/verse";

export const getVerses = async (req: Request, res: Response) => {
    try {
        const category = Array.isArray(req.query.category) 
            ? req.query.category[0] 
            : req.query.category;

        const verses = category 
            ? await Verse.findAll({ where: { category: category as string } }) 
            : await Verse.findAll();

        res.status(200).json(verses);
    } catch (error) {
        console.error("Error fetching verses:", error);
        res.status(500).json({ error: "Error fetching verses" });
    }
};



export const createVerse = async (req: Request, res: Response) => {
    console.log(req);
    try {
        const { content, category, location } = req.body;
        const newVerse = await Verse.create( {category: category, location: location, content: content} );
        res.status(201).json(newVerse);
    } catch (error) {
        console.error("Error creating verse:", error);
        res.status(500).json({ error })
    }
};

export const updateVerse = async (req: Request, res: Response) => {
    let id = req.params.id;
    let newVerse = req.body;

    let verseFound = await Verse.findByPk(id);

    if (verseFound) {
      
    }
    else {
        res.status(400).json();
    }
}

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

