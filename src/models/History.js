"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    static associate(models) {
      History.belongsTo(models.Restaurant, { foreignKey: "idRestaurant" });
      History.belongsTo(models.User, { foreignKey: "idAccount" });
    }
  }
  History.init(
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
      title: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "History",
      tableName: "History",
      timestamps: true,
    }
  );
  return History;
};
