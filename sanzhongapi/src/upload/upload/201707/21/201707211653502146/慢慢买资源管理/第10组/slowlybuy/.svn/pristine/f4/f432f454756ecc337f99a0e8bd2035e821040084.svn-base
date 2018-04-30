//渲染页面,

$.ajax({
    // url: "http://139.199.192.48:9090/api/getcategorytitle",
    url:config.getUrl("api/getcategorytitle"),
    dataType: "json",
    success: function (info) {
        console.log(info);
        var htmlStr = template("title_tpl", info);
        $('#accordion').html(htmlStr);
    }
})

$("#accordion").on("click", ".panel", function () {
    //切换箭头
    var spanClass=$(this).find("span")
    if(spanClass.hasClass("glyphicon-menu-down")){
        spanClass.removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
    }else{
        spanClass.removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
    }
    var titleid = $(this).attr("data-titleid");
    var flag = $("#collapseOne" + titleid).attr("data-getData");
    // 此时得到的flag是一个字符串
    if (flag == "false") {
        $("#collapseOne" + titleid).attr("data-getData",true);
        $.ajax({
            // url: "http://139.199.192.48:9090/api/getcategory",
            url: config.getUrl("api/getcategory"),
            dataType: "json",
            data: {
                titleid: titleid
            },
            success: function (info) {
                console.log(info);
                var htmlStr = template("clasifu_title_tpl", info)
                $("#collapseOne" + titleid).html(htmlStr);
            }
        })
    }
})


//点击子分类跳转到相应的商品列表



//点击回到顶部
$(".top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
});