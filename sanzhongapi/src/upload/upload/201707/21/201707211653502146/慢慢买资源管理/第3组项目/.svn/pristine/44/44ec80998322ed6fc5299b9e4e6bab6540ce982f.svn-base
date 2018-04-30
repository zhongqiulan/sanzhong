
//单击返回按钮,返回index页面
$(".glyphicon-menu-left").on("click", function () {
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getcoupon',
        success: function (info) {
            location.href = "../index.html";
        }
    })
})


//获取location后面的id索引
// console.log(location);
var search = location.search;
search = search.slice(1);
var arr = search.split('=');
var id = arr[1];


$.ajax({
    url: "http://139.199.192.48:9090/api/getcouponproduct",
    data: { couponid: id },
    dataType: "json",
    success: function (info) {
        // console.log(info);
        var htmlStr = template("coupons_tpl", info);
        // console.log(htmlStr);
        $("#kfc_coupons_ul").html(htmlStr);
    }
})




// 遮罩层

// 在渲染模板中,实现点击对应的列表显示对应的图片
var imgs=null;
var index=0;
function kfc_click(){
    $(".picshow").on("click",function(){
        
        var path=$(this).find("img").attr("src");
        imgs=$("img")
        index=$(this).parent().index();
        $("#picture").attr("src",path);
        $("#galleryOverlay").css({display:"block"});
    });
}
$("#galleryOverlay").on("click",function(){
    $(this).fadeToggle(2);
})

//在遮罩层中,左右按钮实现点击下一页轮播功能

//上一页
$("#next").on("click",function() {
    index++;
    var src1=imgs.eq(index).attr("src");
    $("#picture").attr("src",src1);
    //由于事件冒泡,结尾一定要加上false阻止跳转
    return false;
})
//下一页
$("#previous").on("click",function() {
    index--;
    var src1=imgs.eq(index).attr("src");
    $("#picture").attr("src",src1);
    return false;
})



// $('.glyphicon').on('click',function(){
//     history.back();
// })

// $('.get_top').on('click',function(){
//         var current=$("body").scrollTop();
//         var target=0;
//         var step=(current-target)/30;
//         var timerId=setInterval(function(){
//             current=current-step;
//             $("body").scrollTop(current);
//             if(current<=0){
//                 clearInterval(timerId);
//             }
//         },17)
//     })



