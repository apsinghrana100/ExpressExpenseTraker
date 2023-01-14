const Sequelize=require('sequelize');
const sequelize=require('../util/databaseconnection');

const product=sequelize.define('expensedetail',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nam:Sequelize.STRING,
    emailid:Sequelize.STRING,
    price:Sequelize.DOUBLE,
    choice:Sequelize.STRING

});

module.exports=product;