'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('lead', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			created_date_time: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
				allowNull: false,
			},
			modified_date_time: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
				allowNull: false,
			},
			phone: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		}),
  down: (queryInterface) =>
  queryInterface.dropTable('lead'),

};
