// console.log(location.search);
var couponId = location.search;//得到?couponId=0
var couponId = couponId.slice(1);//得到couponId=0
// console.log(couponId);
var arr = couponId.split("&");
// console.log(arr);
var obj = {};

for (var i = 0; i < arr.length; i++) {
    var tempArr = arr[i].split("=");
    obj[tempArr[0]] = tempArr[1];
}
// console.log(obj);
var id = obj.couponId;
$.ajax({
    url: "http://139.199.192.48:9090/api/getcouponproduct",
    type: "get",
    dataType: "json",
    data: {
        couponid: id
    },
    success: function (info) {
        // console.log(info);
        var htmlStr = template("couponproduct", info);
        $("#product-content").html(htmlStr);


        //设置轮播图
        $(".coupon-carousel .item").eq(0).addClass("active");
    }
})

//获取cookie
// console.log($.cookie("arrTitle"));
var arrTitle = JSON.parse($.cookie("arrTitle"));
var title = arrTitle[id].couponTitle;
// console.log(title);
$(".coupon-head h4").html(title + "优惠券");


$("#product-content").on("click", ".content-info", function () {
    // alert(123);

    $(".coupon-mask").fadeIn(500);
    $('.coupon-carousel').fadeIn(500);

    var carouselId = $(this).attr("data-id");
    $('.carousel').carousel(Number(carouselId));
});

$(".coupon-mask").on("click", function () {
    // alert(123);
    $(".coupon-mask").fadeOut(500);
    $('.coupon-carousel').fadeOut(500);

})

// 头部返回
$(".head-back").on("click",function(){
    // alert(123);
    location.href = "coupon.html";
})



//获取cookie
// console.log($.cookie("arrTitle"));
var arrTitle = JSON.parse($.cookie("arrTitle"));
var title = arrTitle[id].couponTitle;
// console.log(title);
$(".coupon-head h4").html(title + "优惠券");


$("#product-content").on("click", ".content-info", function () {
    // alert(123);
    $(".coupon-mask").css({
        display: "block",
    });
    $(".coupon-carousel").css({
        display: "block"
    });

});

$(".coupon-mask").on("click", function () {
    // alert(123);
    $(".coupon-mask").css({
        display: "none"
    });
    $(".coupon-carousel").css({
        display: "none"
    });
})

// 头部返回
$(".head-back").on("click",function(){
    // alert(123);
    location.href = "coupon.html";
})

