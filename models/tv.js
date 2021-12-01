'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tv extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tv.init({
    name: DataTypes.STRING,
    starring: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    language: DataTypes.STRING,
    content_type: DataTypes.STRING,
    year: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tv',
  });
  return Tv;
};