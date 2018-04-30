'use strict'

const express = require('express');
const route = express.Router();


const payCtrl = require('../siteControllers/validatePayController');

//扫码跳转到支付页面
route.get('/validate/pay/alipay/:orderid',payCtrl.getPayPage);

//获取加密之后的支付宝支付链接
route.get('/validate/pay/getAlipayURL/:orderid',payCtrl.getAlipayURL);

//接收支付宝服务器发送过来的支付状态通知
route.get('/validate/pay/alipayservernotify',payCtrl.getAlipayServerNotify);

module.exports = route;