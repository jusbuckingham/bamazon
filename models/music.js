'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Music extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Music.init({
    name: {
      type: DataTypes.STRING,
      validate: { notNull: true }
    },
    by: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    language: DataTypes.STRING,
    content_type: DataTypes.STRING,
    year: {
      type: DataTypes.INTEGER,
      validate: { isInt: { msg: 'Number for player must be an integer' } }
   },
    duration: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Music',
  });
  return Music;
};