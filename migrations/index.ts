import sequelize from "../config/db";
import User from "../models/user";
import Verse from "../models/verses";

const migrate = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("✅ Database migrated successfully.");
  } catch (error) {
    console.error("❌ Migration error:", error);
  }
};

migrate();
