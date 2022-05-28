"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    static associate(models) {
      Likes.belongsTo(models.Restaurant, { foreignKey: "idRestaurant" });
      Likes.belongsTo(models.User, { foreignKey: "idAccount" });
    }
  }
  Likes.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      idRestaurant: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idAccount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Likes",
      tableName: "Likes",
      timestamps: false,
    }
  );
  return Likes;
};
