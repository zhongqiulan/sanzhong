function utils(){
        var o={
        queryString:function(){
             var search = location.search;
    // console.log(search);
    search = search.slice(1); //截取序列为1后面的值

    var searchArr = search.split('&'); //将字符串,从'&'分割生成数组
    //定义空对象保存,并且遍历数组
    var obj = {};
    for (var i = 0; i < searchArr.length; i++) {
        var temp = searchArr[i].split('=');
        // console.log(temp);
        obj[temp[0]] = temp[1];
    }
    return obj; //返回对象
        }
        
    }
    return o;
}
// utils()