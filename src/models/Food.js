"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    static associate(models) {
      Food.belongsTo(models.Restaurant, {foreignKey: 'idRestaurant'});
    }
  }
  Food.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      idRestaurant: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      photo: {
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Food",
      tableName: "Food",
      timestamps: false
    }
  );
  return Food;
};
