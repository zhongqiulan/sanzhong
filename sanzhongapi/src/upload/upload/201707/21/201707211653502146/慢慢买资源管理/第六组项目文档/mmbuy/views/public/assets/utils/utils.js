define(function () {
    var tools = {
        queryString: function () {
            var str = location.search;
            //去掉?
            str = str.slice(1);
            // console.log(str);
            //分割
            var strArr = str.split("&");
            // console.log(strArr);
            //循环
            var obj = {};
            for (var i = 0; i < strArr.length; i++) {

                var temp = strArr[i];
                //分割
                temp = temp.split("=");

                //存到对象中去
                obj[temp[0]] = temp[1];

            }
            return obj;
        }
    }
    return tools;
})