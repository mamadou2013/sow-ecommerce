'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.SubCategory, {
        // foreignKey: 'subCategoryId',
        foreignKey: 'categoryId'
      })
    }

  };

  Category.init({
    category_name: DataTypes.STRING,
    category_description: DataTypes.TEXT,
    category_picture: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};