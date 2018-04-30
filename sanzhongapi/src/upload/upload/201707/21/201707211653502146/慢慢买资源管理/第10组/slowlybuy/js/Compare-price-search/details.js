var search = location.search.slice(1);
var searchArr = search.split("&");
var obj = {};
for (var i = 0; i < searchArr.length; i++) {
    var arr = searchArr[i].split("=");
    obj[arr[0]] = arr[1];
}
var productid = obj.productid;
var brandName = decodeURI(obj.brandName);
//获取产品图的相关信息
$.ajax({
    url:config.getUrl("api/getproduct"),
    data:{
       productid:productid 
    },
    success:function(info){
        console.log(info);
        info.brandName=brandName
        var htmlStr=template("pic_tpl",info);
        $(".bigcontainer").html(htmlStr);
    }
})

//获取评价的相关信息
$.ajax({
    url:config.getUrl("api/getproductcom"),
    data:{
       productid:productid 
    },
    success:function(info){
        console.log(info);
        var htmlStr=template("comment_tpl",info);
        $(".comment_box").html(htmlStr);
    }
})


//点击回到顶部
$(".top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
});
