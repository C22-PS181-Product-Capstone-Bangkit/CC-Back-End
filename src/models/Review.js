"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.User, { foreignKey: "idAccount" });
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
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.STRING,
      photo: DataTypes.STRING,
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
