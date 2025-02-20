import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class Sermon extends Model<InferAttributes<Sermon>, InferCreationAttributes<Sermon>>{
  declare category: string;
  declare url: string;
}

export function SermonFactory(sequelize: Sequelize) {
  Sermon.init({ 
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, 
  {
    freezeTableName: true,
    tableName: 'sermon',
    sequelize
  });
}
