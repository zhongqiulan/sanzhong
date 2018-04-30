var config = {
    //ttp://139.199.192.48:9090/api/getbrandtitle
    host: "139.199.192.48",
    port: ":9090/",
    prefix: 'http://',
    getUrl: function(api) {
        if(api.indexOf('/')!=0){
            
                return this.prefix + this.host+this.port + api;
        }
        return this.prefix+this.host+ this.port + api.substring(1,api.length);
    }
}

var o = {
    //将url问好(?)后面的字符串数据转换为对象
    queryString: function(){
        var path = location.search;
        path = path.slice(1);
        var pathArr = path.split('&');
        
        var temp = [];
        var data = {};
        for(var i = 0; i < pathArr.length; i++) {
            temp = pathArr[i].split('=');
            data[temp[0]] = temp[1];
        }
        return data;
    }
}

// 返回顶部功能
$("#top").on("click", function () {
    window.scrollTo(0, 0);
    return false;
})