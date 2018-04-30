define(function () {
    var o = {
        queryString: function () {
            // 利用地址栏传递数据，使用location.search获取
            var search = location.search;
            // console.log(typeof search);
            //截取字符串
            search = search.slice(1);
            var searchArr = search.split('&');
            // console.log(searchArr);
            var obj = {};
            for (var i = 0; i < searchArr.length; i++) {
                var temp = searchArr[i].split('=');
                // console.log(temp[0] +':'+temp[1]);
                obj[temp[0]] = temp[1];
            }

            return obj;
        }
    }

    return o;
})