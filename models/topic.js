/**
 * Created by Administrator on 2016/4/14.
 */
var  Sequelize = require('Sequelize');
var sequelize = require("../db/db");
var topic = sequelize.define('topic', {
    ID:{type: Sequelize.INTEGER,primaryKey: true},
    name:{type:Sequelize.STRING},
    title:{type:Sequelize.STRING},
    content:{type:Sequelize.STRING},
    data:{ type: Sequelize.DATE}
}, {
    freezeTableName: true,// Model tableName will be the same as the model name
    timestamps: false
});
module.exports = topic;