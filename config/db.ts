import { Sequelize } from "sequelize";

const sequelize = new Sequelize("final_project_backend", "root", "Jayden1017", {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Database connected successfully.");
  })
  .catch((err) => {
    console.error("❌ Error connecting to the database:", err);
  });

export default sequelize;


  