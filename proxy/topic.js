/**
 * Created by Administrator on 2016/4/14.
 */
var topic = require("../models/topic.js");
//操作model,写增删改查findone
exports.getTopicByName = function(name,fn){
    topic.findAll({
        where:{name:name}
    }).then(fn);
};
exports.create = function(data,fn){
    topic.create(data).then(fn);
};

exports.findAllTopic = function(fn){
    topic.findAll().then(fn);
};