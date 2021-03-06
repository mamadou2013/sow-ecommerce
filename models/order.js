'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasMany(models.OrderLine, {
        foreignKey: 'orderId',
      });

      Order.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });
    }
  };
  Order.init({
    order_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};