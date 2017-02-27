/**
 * Created by yangjiahua on 2016/4/11.
 */
var express = require('express');
var router = express.Router();
var index = require('./controllers/index');
var sign = require('./controllers/sign');
var isLogin = require('./middlewares/index');
router.get('/', index.index); // todo 首页
router.get('/reg',sign.goReg); // todo 注册页面
router.post('/reg',sign.reg); //TODO 用户注册
router.get('/login',sign.loginIn); // todo 注册页面
router.post('/login',sign.login);//TODO 用户登录
router.get('/home',isLogin.userRequired,sign.home);
router.post('/createTopic',sign.createTopic);
router.get('/publish',sign.publish);// TODO 发布话题
router.get('/test2',sign.test2);
module.exports = router;