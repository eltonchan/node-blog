/**
 * Created by yangjiahua on 2016/4/12.
 */
var article = require("../models/article.js");
//����model,д��ɾ�Ĳ�findone
exports.getIndexArticle = function(fn){
    article.findOne({
        where:{
            ID:1
        },
        attributes: ['title', 'content', 'data','author','ID']
    }).then(fn);
};

