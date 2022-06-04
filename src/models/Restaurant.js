"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    static associate(models) {
      Restaurant.hasMany(models.Review, {foreignKey: 'idRestaurant'});
    }
  }
  Restaurant.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      category: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price : DataTypes.BIGINT,
      person : DataTypes.INTEGER,
      photoPlaces: DataTypes.STRING,
      profilePic: DataTypes.STRING,
      location: DataTypes.STRING,
      openHour: DataTypes.STRING,
      price: DataTypes.STRING,
      contact: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Restaurant",
      tableName: "Restaurant",
      timestamps: false
    }
  );
  return Restaurant;
};
