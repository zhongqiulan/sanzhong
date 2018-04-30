// 配置请求地址---------------------
var obj={
    host:"//139.199.192.48",
    port:':9090',
    prefix:'http://',
    getURL:function (api) {
        return this.prefix+this.host+this.port+api;
    }
}
 