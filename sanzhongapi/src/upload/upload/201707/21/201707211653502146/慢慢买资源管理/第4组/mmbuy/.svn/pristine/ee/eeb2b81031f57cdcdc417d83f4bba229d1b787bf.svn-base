$.ajax({
    url: "http://139.199.192.48:9090/api/getproductcom",
    type: "get",
    dataType: "json",
    data: {
        productid: 1
    },
    success: function(info){
        console.log(info);
        var htmlStr = template("koubei_tpl",info);
        $(".koubei-main").html(htmlStr);
    }
})


// 头部返回
$(".coupon-head .head-back").on("click",function(){
    // alert(123);
    location.href = "../index.html";
})