/**
 * Created by Administrator on 2017/7/19 0019.
 */
var config = {
    // µÿ÷∑	http://139.199.192.48:9090/api/getmoneyctrl

    host:'139.199.192.48',
    port:':9090/',
    prefix:'http://',
    getUrl:function(api){
        if(api.indexOf('/')!=0)
        {
            return this.prefix + this.host+this.port + api;
        }
        return this.prefix+this.host+ this.port + api.substring(1,api.length);
    }
}