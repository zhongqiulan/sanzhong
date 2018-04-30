define(["jquery", "template", "bootstrap"], function($, template) {
    var shopid = 0,
        areaid = 0;
    setAjax(0, 0);

    window.onresize = function() {
        var w = document.documentElement.clientWidth;
        $(".navs-font>.btn-default").next().css("min-width", w);
    }

    $(".btn-default").on("click", function() {
        $(this).css("background", "#fff");
        if ($(this).attr("aria-expanded") == "false") {
            $(this).find("span").css({ "border-top": "0", "border-bottom": "4px dashed" });
        } else if ($(this).attr("aria-expanded") == "true") {
            $(this).find("span").css({ "border-top": "4px dashed", "border-bottom": "0" });
        }
    })

    $(".navs-font>.btn-default").on("click", function() {
        var w = document.documentElement.clientWidth;
        $(this).next().css("min-width", w);
        $(this).find("i").toggleClass("glyphicon-tasks glyphicon-remove");
    })

    // 京东按钮请求
    $("#group-jd").on("click", function() {
        $.ajax({
            url: tool.getUrl("api/getgsshop"),
            type: "get",
            success: function(info) {
                var tpl = template("jd-tpl", info);
                $("#jd-lists").html(tpl);
            }
        })
    })


    // 区域按钮请求
    $("#group-area").on("click", function() {
        $.ajax({
            url: tool.getUrl("api/getgsshoparea"),
            type: "get",
            success: function(info) {
                var tpl = template("area-tpl", info);
                $("#area-lists").html(tpl);
            }
        })
    })

    // 点击某区域发送请求
    $("#jd-lists").on("click", "#shopId", function() {
        $(this).parent().parent().parent().find("button").html($(this).text() + '<span class="caret"></span>');
        shopid = $(this).attr("data-id");
        setAjax(shopid, areaid);
    })

    $("#area-lists").on("click", "#areaId", function() {
        var txt = $(this).text().slice(0, 2);
        $(this).parent().parent().parent().find("button").html(txt + '<span class="caret"></span>');
        areaid = $(this).attr("data-id");
        setAjax(shopid, areaid);
    })

    function setAjax(shopid, areaid) {
        $.ajax({
            url: tool.getUrl("api/getgsproduct"),
            data: {
                shopid: shopid,
                areaid: areaid
            },
            success: function(info) {
                var tpl = template("main-tpl", info);
                $(".single-main").html(tpl);
            }
        })
    }
})