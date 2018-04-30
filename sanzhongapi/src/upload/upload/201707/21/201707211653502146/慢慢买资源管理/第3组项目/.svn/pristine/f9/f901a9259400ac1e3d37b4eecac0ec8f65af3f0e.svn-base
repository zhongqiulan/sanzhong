/**
 * 2017-7-18
 * http：路径
 */
var agio_config={
    prefix:'http://',
    port:':9090/',
    host:'139.199.192.48',
    getUrl:function(api){
        if(api.indexOf('/') != 0){
            return this. prefix + this.host + this.port + api;
        }
         return this. prefix + this.host + this.port + api.substring(1,api.length);
    }
    
}
