import express from "express";
import sequelize from "../config/db";
import userRoutes from "../routes/userRoutes";
import verseRoutes from "../routes/verseRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());

sequelize
  .sync({ force: false })
  .then(() => console.log("✅ Database synced"))
  .catch((err) => console.error("❌ Sync error:", err));

app.use("/users", userRoutes);
app.use("/verses", verseRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
