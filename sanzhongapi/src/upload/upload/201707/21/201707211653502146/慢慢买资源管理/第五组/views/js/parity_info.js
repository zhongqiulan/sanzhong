
var o = {
    queryString: function () {
        // 获取当前url中的tc_id
        var search = location.search;//  ?tc_id=14&name=zhangsan&age=20
        console.log();

        search = search.slice(1);
        var searchArr = search.split('&');  //searchArr是一个数组
        var obj = {};  //定义一个空对象 ，用来存储数据
        for (var i = 0; i < searchArr.length; i++) {
            var temp = searchArr[i].split('='); //temp也是一个数组
            obj[temp[0]] = temp[1];
        }
        return obj; //要把对象返回值
    }

}
var id  = o.queryString().productid;
console.log(id);


$.ajax({
    url : "http://139.199.192.48:9090/api/getproduct",
    type :"get",
    data :{
        productid : id
    },
    success : function(info){
        var htmlStr = template("product_info_tpl",info);
        $(".product_info").html(htmlStr);
    }
})



/*商品评论*/

$.ajax({
    url : "http://139.199.192.48:9090/api/getproductcom",
    type :"get",
    data :{
        productid : id
    },
    success : function(info){
        var htmlStr = template("evaluation_tpl",info);
        $(".comeFrom").html(htmlStr);
    }
})