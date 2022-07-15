'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderLine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderLine.belongsTo(models.Product, {
        foreignKey: 'productId',
        onDelete: 'CASCADE'
      });

      OrderLine.belongsTo(models.Commande, {
        foreignKey: 'commandeId',
        onDelete: 'CASCADE'
      });
    }
  };
  OrderLine.init({
    line_number: DataTypes.STRING,
    line_quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderLine',
  });
  return OrderLine;
};