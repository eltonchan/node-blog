
var user = require('../proxy/user');
var topic = require('../proxy/topic');
var EventProxy = require('eventproxy');
var ep = new EventProxy();
var session = require('express-session');
var formatDateTime = function (date) {
   var y = date.getFullYear();
   var m = date.getMonth() + 1;
   m = m < 10 ? ('0' + m) : m;
   var d = date.getDate();
   d = d < 10 ? ('0' + d) : d;
   var h = date.getHours();
   var minute = date.getMinutes();
   minute = minute < 10 ? ('0' + minute) : minute;
   return y + '-' + m + '-' + d+' '+h+':'+minute;
};
exports.goReg = function(req,res){
   res.render('sign/reg');
};

exports.loginIn = function(req,res){
   res.render('sign/login');
};

exports.reg = function(req,res){
   var name = req.body.name;
   var password = req.body.password;
   user.getUserByName(name,function(data){
      if(data){
         res.render('sign/reg',{info:'用户已存在!'});
      }
      ep.emit('hasCheck',data);
   });
   ep.on('hasCheck',function(data){
      if(!data){
         user.create({
            name:name,
            password:password
         },function(data){
            res.render('sign/reg',{info:'恭喜你，注册成功!!'});
         });
      }
   })

};

exports.login = function(req,res){
   var name = req.body.name;
   var password = req.body.password;
   user.findUser(name,password,function(data){
      if(data){
         req.session.user = data;
         res.redirect('/home');
      }
   });
};

exports.home = function(req,res){
   topic.getTopicByName(req.session.user.name,function(data){
      res.set('Content-Type', 'text/html');
      res.render('home',{topic:data});
   });
};

exports.createTopic = function(req,res){
   var data = {};
   data.name = req.session.user.name;
   data.title = req.body.title;
   data.content = req.body.content;
   var myDate = new Date();
   data.data = formatDateTime(myDate);
   topic.create(data,function(data){
      res.redirect('/home');
   });
};

exports.publish = function(req,res){
   res.render('publish');
};
exports.test2 = function(req,res){
   res.render('test2');
};


















