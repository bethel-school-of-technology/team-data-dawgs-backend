//category - feelings - string
//location - book+chapter verse from bible-api.com -->John+3:16 - string

import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Verse = sequelize.define("Verse", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Verse;
