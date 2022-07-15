'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Picture.belongsTo(models.Product, {
        foreignKey: 'productId',
        onDelete: 'CASCADE'
      });
    }
  };
  Picture.init({
    image: DataTypes.STRING,
    productId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};