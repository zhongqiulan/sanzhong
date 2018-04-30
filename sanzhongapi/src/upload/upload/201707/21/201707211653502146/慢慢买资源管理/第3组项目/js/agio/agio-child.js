/**
 * 2017-7-18
 * 渲染国内折扣 子页面
 */
/* 获取queryString */

$("#back").on("click",function(){
	history.back()
})
var id = parseInt(location.search.split("=")[1]);
$.ajax({
		type:"get",
		url:"http://139.199.192.48:9090/api/getmoneyctrlproduct",
		data:{productid:id},
		success:function(suc){
			$("#rong").html(template("ron",suc))
		}
});



var o={
    queryString:function(){
        var search=location.search;
        search=search.slice('1');
        var arr=search.split('&');
        var obj={};
        for(var i=0;i<arr.length;i++){
            var newArr=arr[i].split('=');

            obj[newArr[0]]=newArr[1];
        }
        return obj;
    }
}
$.ajax({
    url:'http://139.199.192.48:9090/api/getdiscountproduct',
    // dataType:'jsonp',
    type:'get',
    data:{
        productid:o.queryString().productid
    },
    success:function(info){
        //console.log(info);
            var htmlStr=template('agio_child_tpl',info);
        $('.det-box').html(htmlStr);
    }
})







