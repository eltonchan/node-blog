//负责定义modes
var  Sequelize = require('Sequelize');
var sequelize = require("../db/db");
var user = sequelize.define('user', {
    name:{type:Sequelize.STRING},
    password:{type:Sequelize.STRING},
    ID:{ type: Sequelize.INTEGER,primaryKey: true}
}, {
    freezeTableName: true,// Model tableName will be the same as the model name
    timestamps: false
});
module.exports = user;