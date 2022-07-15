'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_name: {
        type: Sequelize.STRING,
        unique: true
      },
      product_price:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      product_description: {
        type: Sequelize.TEXT,
        allowNull:false,
      },
      product_quantity:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      discount:{
        type:Sequelize.INTEGER,
      },
      subCategoryId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'SubCategory',
          key: 'id',
          as: 'subCategoryId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },{
      freezeTableName: true
  })
  .then(resul=>console.log(resul))
  .catch(err=>console.log(err));
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product');
  }
};