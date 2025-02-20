import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import { db } from './models';
import verseRoutes from "./routes/verseRoutes";
import journalRoutes from "./routes/journalRoutes";
import userRoutes from "./routes/userRoutes";
import sermonRoutes from "./routes/sermonRoutes";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use("/verses", verseRoutes);
app.use("/journals", journalRoutes);
app.use("/users", userRoutes);
app.use("/sermons", sermonRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

// Syncing our database
db.sync(
//    {alter: true}
).then(() => {
    console.info("connected to the database!")
});

app.listen(3000);