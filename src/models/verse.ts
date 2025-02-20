import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class Verse extends Model<InferAttributes<Verse>, InferCreationAttributes<Verse>>{
  declare category: string;
  declare location: string;
  declare content: string;
}

export function VerseFactory(sequelize: Sequelize) {
  Verse.init({ 
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    tableName: 'verse',
    sequelize
  });
}
