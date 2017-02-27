/**
 * Created by yangjiahua on 2016/4/12.
 */
//负责定义modes
var  Sequelize = require('Sequelize');
var sequelize = require("../db/db");
var article = sequelize.define('article', {
    title:{type:Sequelize.STRING},
    content:{type:Sequelize.STRING},
    data:{ type: Sequelize.DATE},
    author:{type:Sequelize.STRING},
    ID:{type: Sequelize.INTEGER,primaryKey: true}
}, {
    freezeTableName: true,// Model tableName will be the same as the model name
    timestamps: false
});
module.exports = article;