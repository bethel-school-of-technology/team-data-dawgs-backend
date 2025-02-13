import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class Journal extends Model<InferAttributes<Journal>, InferCreationAttributes<Journal>>{
  declare id: number;
  declare content: string;
}

export function JournalFactory(sequelize: Sequelize) {
  Journal.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    tableName: 'journal',
    sequelize
  });
}
