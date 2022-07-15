'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('subCategory', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sub_name: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      sub_description: {
        type: Sequelize.TEXT,
        allowNull:false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Category',
          key: 'id',
          as: 'categoryId'
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
  });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('subCategory');
  }
};