import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
  declare id: number;
  declare username: string;
  declare email: string;
  declare admin: boolean;
}

export function UserFactory(sequelize: Sequelize) {
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    freezeTableName: true,
    tableName: 'users',
    sequelize
  });
}

//
//
// import { DataTypes, Model } from "sequelize";
// import sequelize from "../config/db"; 
//
// const User = sequelize.define("User", { //change to User.define per Ryan link
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   admin: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//     defaultValue: false,
//
//   }
// });
//
// export default User;
