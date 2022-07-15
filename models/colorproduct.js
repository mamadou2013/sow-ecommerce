'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ColorProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ColorProduct.belongsTo(models.Product, {
        foreignKey: 'productId',
        onDelete: 'CASCADE'
      });

      ColorProduct.belongsTo(models.Color, {
        foreignKey: 'colorId',
        onDelete: 'CASCADE'
      });

    }
  };
  ColorProduct.init({
    color_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ColorProduct',
  });
  return ColorProduct;
};