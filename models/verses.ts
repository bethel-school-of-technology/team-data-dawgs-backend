import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class Verse extends Model<InferAttributes<Verse>, InferCreationAttributes<Verse>>{
  declare id: number;
  declare category: string;
  declare location: string;
}

export function MessageFactory(sequelize: Sequelize) {
  Verse.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    tableName: 'verse',
    sequelize
  });
}

//
// import { DataTypes } from "sequelize";
// import sequelize from "../config/db";
//
// const Verse = sequelize.define("Verse", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   category: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   location: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });
//
// export default Verse;
