/**
 * Created by yangjiahua on 2016/4/11.
 */
var express = require('express');
var router = express.Router();
var index = require('./controllers/index');
var sign = require('./controllers/sign');
var isLogin = require('./middlewares/index');
router.get('/', index.index); // todo ��ҳ
router.get('/reg',sign.goReg); // todo ע��ҳ��
router.post('/reg',sign.reg); //TODO �û�ע��
router.get('/login',sign.loginIn); // todo ע��ҳ��
router.post('/login',sign.login);//TODO �û���¼
router.get('/home',isLogin.userRequired,sign.home);
router.post('/createTopic',sign.createTopic);
router.get('/publish',sign.publish);// TODO ��������
router.get('/test2',sign.test2);
module.exports = router;