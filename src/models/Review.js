"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Restaurant, {foreignKey: 'idRestaurant'});
      Review.belongsTo(models.User, {foreignKey: 'idAccount'});
    }
  }
  Review.init(
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
      description: DataTypes.TEXT,
      // photo: DataTypes.STRING,
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
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
      modelName: "Review",
      tableName: "Review",
      timestamps: true,
    }
  );
  return Review;
};
