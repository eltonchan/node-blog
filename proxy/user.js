/**
 * Created by yangjiahua on 2016/2/26.
 */

//����㣬��ȡ���ݵķ�����һ���ļ�һ�����󷽷���
var User = require("../models/user.js");
//����model,д��ɾ�Ĳ�findone
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



