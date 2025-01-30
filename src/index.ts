import express from "express";
import sequelize from "../config/db"; 

const app = express();
const PORT = 3000;

sequelize.sync({ force: false }) 
  .then(() => console.log("✅ Database synced"))
  .catch((err) => console.error("❌ Sync error:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
