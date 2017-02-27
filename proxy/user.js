/**
 * Created by yangjiahua on 2016/2/26.
 */

//代理层，获取数据的方法。一个文件一个对象方法；
var User = require("../models/user.js");
//操作model,写增删改查findone
exports.getUserByName = function(name,fn){
        User.findOne({
            where:{name:name}
        }).then(fn);
};
exports.create = function(data,fn){
    User.create(data).then(fn);
};

exports.findUser = function(name,password,fn){
    User.findOne({
        where:{
            name:name,
            password:password
        }
    }).then(fn);
};



