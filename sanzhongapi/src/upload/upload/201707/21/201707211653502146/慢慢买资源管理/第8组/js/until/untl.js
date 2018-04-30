var config = {
    // http://157.122.54.189:9090/api/getindexmenu

    host: '139.199.192.48',
    port: ':9090/',
    prefix: 'http://',
    getUrl: function (api) {
        if (api.indexOf('/') != 0) {

            return this.prefix + this.host + this.port + api;
        }
        return this.prefix + this.host + this.port + api.substring(1, api.length);

    },
        queryString: function () {
        // 获取当前url中的tc_id
        var search = location.search;//  ?tc_id=14&name=zhangsan&age=20
        search = search.slice(1);
        // console.log(search);
        var searchArr = search.split('&');  //searchArr是一个数组
        // console.log(searchArr);
        var obj = {};  //定义一个空对象 ，用来存储数据
        for (var i = 0; i < searchArr.length; i++) {
            var temp = searchArr[i].split('='); //temp也是一个数组
            // console.log(temp);
            obj[temp[0]] = temp[1];
        }
        return obj[temp[0]]
    }
}