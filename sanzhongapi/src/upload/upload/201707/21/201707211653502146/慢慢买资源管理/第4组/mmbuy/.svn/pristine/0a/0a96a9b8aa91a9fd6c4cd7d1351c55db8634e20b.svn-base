// 失焦和聚焦事件
$(".item_link >input").focus(function () {//聚焦
    $("input").attr("placeholder", "");
    $("input").blur(function () {//失焦
        $("input").attr("placeholder", "请通过购物App中使用分享或浏览器打开商品页面获取商品链接");
    });
})

// 点击按钮弹出说明框
$('.seach-history-Price').on('click', function () {
    alert('请通过京东、天猫等App分享商品链接到输入框')
    var txt=$('input').val();//获取到输入框中的内容
    if(txt!=""){
       $('input').val($("input").attr("placeholder", "请通过购物App中使用分享或浏览器打开商品页面获取商品链接").placeholder)
    }
})

// 点击重置按钮事件
$('.reset').on('click', function () {
    var txt=$('input').val();//获取到输入框中的内容
    if(txt!=""){
        // $('input').val($("input").attr("placeholder", "请通过购物App中使用分享或浏览器打开商品页面获取商品链接"))//得到[object object]可以通过对象.法方
      $('input').val($("input").attr("placeholder", "请通过购物App中使用分享或浏览器打开商品页面获取商品链接").placeholder)
    }


})

// 底部广告点击消失事件
$('.footer i').on('click',function(){
    $('.footer').hide();
})