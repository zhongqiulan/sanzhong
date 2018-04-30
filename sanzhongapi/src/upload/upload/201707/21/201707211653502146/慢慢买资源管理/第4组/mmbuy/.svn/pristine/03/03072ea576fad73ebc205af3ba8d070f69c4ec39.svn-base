//获取地址
var config={
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
// 获取地址内信息
var o = {
        queryString: function () {
            var search = location.search.slice(1);
            // console.log(search);
            var searchArr = search.split("&");
            var obj = {};
            for (var i = 0; i < searchArr.length; i++) {
                var arr = searchArr[i].split("=");
                obj[arr[0]] = arr[1];
            }
            return obj;
        }
    }