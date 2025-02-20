import { Request, Response } from "express";
import { Sermon } from "../models/sermon";

export const getSermons = async (req: Request, res: Response) => {
    try {
        const sermons = await Sermon.findAll();
        res.status(200).json(sermons);
    } catch (error) {
        console.error("Error fetching sermons:", error);
        res.status(500).json({ error: "Error fetching sermons" });
    }
}; //copy endpoint "index endpoint" + add optional category param -->This will redo code above

export const createSermon = async (req: Request, res: Response) => {
    console.log(req.body);
    try {
        const { category , url } = req.body;
        const newSermon = await Sermon.create({category: category, url: url });
        res.status(201).json(newSermon);
    } catch (error) {
        console.error("Error creating sermon:", error);
        res.status(500).json({ error })
    }
};

export const updateSermon = async (req: Request, res: Response) => {
    let id = req.params.id;
    let newSermon = req.body;

    let sermonFound = await Sermon.findByPk(id);

    if (sermonFound) {
       /* await Sermon.update(newSermon, {
            where: { id: id }
        });
        res.status(200).json(); */
    }
    else {
        res.status(400).json();
    }
}

export const deleteSermon = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const sermon = await Sermon.findByPk(id);
        if (!sermon) {
            return res.status(404).json({ error: "Sermon not found" });
        }

        await sermon.destroy();
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting sermon:", error);
        res.status(500).json({ error: "Error deleting sermon" });
    }
};
