//返回顶部
define(['jquery'],function ($) {
    $("#top").on('click',function () {
        $("body","html").animate({"scrollTop":0},500);
    })
})