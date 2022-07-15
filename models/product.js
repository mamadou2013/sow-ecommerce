'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Product migrates in Image
      Product.hasMany(models.Picture, {
        foreignKey: 'productId'
      });

      // SubCategory migrates in Product
      Product.belongsTo(models.SubCategory, {
        foreignKey: 'subCategoryId',
        onDelete: 'CASCADE'
      });

      // Product migrates in OrderLine
      Product.hasMany(models.OrderLine, {
        foreignKey: 'productId'
      });

      Product.belongsToMany(models.User, { through: models.ProductLike });
      Product.belongsToMany(models.User, { through: models.Rate });

      Product.belongsToMany(models.Color, { through: models.ColorProduct });
    }
  };
  Product.init({
    product_name: DataTypes.STRING,
    product_price: DataTypes.INTEGER,
    product_description: DataTypes.TEXT,
    product_quantity: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    subCategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};