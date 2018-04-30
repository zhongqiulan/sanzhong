'use strict'

//导入需要的包
const Alipay = require('alipay_for_node')
const path = require('path')
const fs = require('fs')

//获取支付页面
exports.getPayPage = (req,res) => {
    //获取订单id
    let orderid = req.params.orderid;

    //查询订单sql
    let sql = `select id,order_no,accept_name,area,address,
                mobile,order_amount,message,status from dt_orders where id=${orderid}`;

     //执行sql语句
     req.db.driver.execQuery(sql, (err, data) => {
        //读取支付页面，并且返回
        fs.readFile(path.join(__dirname,'../upload/pay.html'),(err,htmlData)=>{
            let originHTML = htmlData.toString()

            originHTML = originHTML.replace("${payMoney}",data[0].order_amount)

            originHTML = originHTML.replace("${payMoney}",data[0].order_amount)

            originHTML = originHTML.replace("${order_id}",data[0].id)

            res.setHeader("Content-Type","text/html;charset=utf-8")
            res.end(originHTML)
        })
     })
}

/**
 * 获取支付宝支付所需要的加密字符串
 * @param {*} req 请求
 * @param {*} res 响应
 */
exports.getAlipayURL = (req, res) => {
    //获取订单id
    let orderid = req.params.orderid;

    //查询订单sql
    let sql = `select id,order_no,accept_name,area,address,
                mobile,order_amount,message,status from dt_orders where id=${orderid}`;

    //执行sql语句
    req.db.driver.execQuery(sql, (err, data) => {
        //订单编号
        const out_trade_no = data[0]["order_no"]

        //生成alipay的加密支付链接
        //创建Alipay对象
        let alipay = new Alipay();

        //设置网关，注意:沙箱环境与生产环境是不一样的，注意区分
        alipay.gateWayUrl = 'https://openapi.alipaydev.com/gateway.do'

        //设置加密请求参数的私钥,注意:在当前目录下新建一个pem目录，并且导入你自己的RSA或RSA2密钥
        //alipay.rsaPrivateKey=path.join(__dirname,'./pem/rsa_private_key.pem')
        alipay.rsa2PrivateKey = path.join(__dirname, '../pem/rsa2_private_key.pem')

        //设置app_id,替换你自己的app_id,沙箱模式或生产环境下的app_id都可以
        alipay.setParam('app_id', '2016082600315647')

        //设置支付成功之后，跳转的页面
        alipay.setParam('return_url','http://39.108.135.214:8899/paySuccess.html')

        //设置支付成功之后，支付宝通过我们服务器的网关地址
        alipay.setParam('notify_url','http://39.108.135.214:8899/site/validate/pay/alipayservernotify')

        //设置商品相关参数
        alipay.setParam('biz_content', JSON.stringify({ subject: `黑马买买买订单-${out_trade_no}`, out_trade_no: out_trade_no, total_amount: 100.00, product_code: 'QUICK_WAP_WAY' }))

        //设置编码
        alipay.setParam('charset', 'utf-8')

        //设置格式
        alipay.setParam('format', 'json')

        //设置method
        alipay.setParam('method', 'alipay.trade.wap.pay')

        //设置加密方式
        //alipay.setParam('sign_type','RSA')
        alipay.setParam('sign_type', 'RSA2')

        //设置版本
        alipay.setParam('version', '1.0')

        //设置时间戳
        alipay.setParam('timestamp', alipay.getNowFormatDate())

        //调用方法,获取最终支付的URL
        const alipayRequestStr = alipay.getLastRequestStr()

        res.setHeader("Content-Type","text/html;charset=utf-8")
        res.end(alipayRequestStr)
    })
}

/**
 * 获取支付宝服务器发送过来的支付结果通知
 * @param {*} req 请求
 * @param {*} res 响应
 */
exports.getAlipayServerNotify = (req,res) =>{
    console.log("---query---start")
    console.log(req.query)
    console.log("---query---end")
    console.log("")
    console.log("---params---start")
    console.log(req.params)
    console.log("---params---end")
    res.end("OK")
}

