/**
 * Created by yangjiahua on 2016/2/26.
 */
//连接数据库
var  Sequelize = require('Sequelize');
var config = require('../config/config.js');
//var sequelize= new Sequelize('yantubao.com', 'root', '', {host : '192.168.0.207', post:'3306', dialect : 'mysql'});
var sequelize = new Sequelize(config.db.database,config.db.username,config.db.password,config.db.options);
//module.exports=Db;
module.exports = sequelize;