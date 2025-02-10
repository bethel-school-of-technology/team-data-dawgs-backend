import sequelize from "../config/db";

const migrate = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("✅ Database migrated successfully.");
  } catch (error) {
    console.error("❌ Migration error:", error);
  }
};

migrate();
