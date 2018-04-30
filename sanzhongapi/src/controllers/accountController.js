'use strict'

const md5 = require('md5');
const kits = require('../kits/kits.js');
const multiparty = require('multiparty');
const path = require('path');
const urlobj = require('url');

const SUCCESSCODE = 0;
const ERRORCODE = 1;
let resobj = {};

//1.0 用户登录验证
exports.login = (req,res)=>{
	let uname = req.body.uname;
	let upwd = md5(req.body.upwd);
	
	let sql = `select * from dt_manager where user_name='${uname}' and password='${upwd}'`;
	execSqlCallBack(req,res,sql,(err,datas)=>{
		if(err){
			resobj.status = ERRORCODE;
			resobj.message = err.message;
			res.end(JSON.stringify(resobj));
			return;
		}
		if(datas.length==0){
			resobj.status = ERRORCODE;
			resobj.message = '用户名或密码错误';
			res.end(JSON.stringify(resobj));
			return;
		}

		var data = datas[0]; 
		var user = {uid:data.id,uname:data.user_name,realname:data.real_name}
		req.session.admin_user = user;
		console.log(req.session.admin_user);
		resobj.status = SUCCESSCODE;
		resobj.message =user;
		res.end(JSON.stringify(resobj));
	});	
}

// 注销
exports.logout = (req,res)=>{
	resobj = {};
	
	if(req.session && req.session.admin_user){
		req.session.admin_user = null;
	}

	resobj.status = SUCCESSCODE;
	resobj.message = '用户已注销';
	res.end(JSON.stringify(resobj));
}

exports.vcode = (req,res)=>{
	let resobj =req.session.admin_user;	
	console.log(resobj);
	res.end(JSON.stringify(resobj));
}

// 统一执行sql语句
function execSqlCallBack(req,res,sql,callback){
		req.db.driver.execQuery(sql,(err,datas)=>{				
					if(err){
						callback(err);
						return;
					}
					try{
						callback(null,datas);
					}
					catch(e){
								resobj.status = ERRORCODE;
								resobj.message = e.message;
								res.end(JSON.stringify(resobj));
							}
		});
	
};