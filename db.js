const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  port: process.env.PORT,
  dialect: 'mysql'
});

 sequelize.authenticate()
 .then(() => {
    console.log('Connection has been established successfully.');
}).catch(() => {
    console.error('Unable to connect to the database:', error);
 });

module.exports = sequelize;
