define(["jquery", "zepto", "template", "event", "touch"], function ($, $1, template) {
    // 设置一下商品列表的参数
    var shopId = 0;
    var areaId = 0;
    // 点击导航条箭头的改变和下拉菜单的显示和隐藏  还有就是点击下拉菜单时发送不同的请求
    $1(".nav_left ul li a").each(function (index, value) {
        // 遍历每一个a标签
        $1(value).tap(function () {
            if (!$1(this).children().hasClass("icon-d")) {
                $1(".icon-d").removeClass("icon-d").addClass("icon-c");
            }
            $1(this).children().toggleClass("icon-c icon-d");
            $1(".show").removeClass("show");
            if ($1(this).children().hasClass("icon-d")) {
                $1(".popbox").eq(index).addClass("show");
            }
            //   用来获取凑单品的店铺的信息 并渲染到店铺的下拉列表
            if (index == 0) {
                $.ajax({
                    url: "http://157.122.54.189:9090/api/getgsshop",
                    type: "get",
                    // datatype: "jsonp",
                    success: function (data) {
                        var htmlStr = template("popsort_tmp", data);
                        $(".popsort").html(htmlStr);
                        $(".popsort ul li a span").eq(shopId).addClass("icon-e");
                        $(".popsort ul li a").each(function (index, value) {
                            $1(value).tap(function () {
                                $1(".popsort .icon-e").removeClass("icon-e");
                                $1(this).children().addClass("icon-e");
                                shopId = $(this).attr("data-shopId");
                                render(shopId, areaId);
                                $(this).parent().parent().parent().removeClass("show");
                                $(".nav_left ul li a").eq(0).children().removeClass("icon-d").addClass("icon-c");
                            })
                        })
                    }
                })
            }
            if (index == 1) {
                $.ajax({
                    url: "http://157.122.54.189:9090/api/getgsshoparea",
                    type: "get",
                    // datatype: "jsonp",
                    success: function (data) {
                        var htmlStr = template("poparea_tmp", data);
                        $(".poparea").html(htmlStr);
                        $(".poparea ul li a span").eq(areaId).addClass("icon-e");
                        $(".poparea ul li a").each(function (index, value) {
                            $1(value).tap(function () {
                                $1(".poparea .icon-e").removeClass("icon-e");
                                $1(this).children().addClass("icon-e");
                                areaId = $(this).attr("data-areaId");
                                render(shopId, areaId);
                                $(this).parent().parent().parent().removeClass("show");
                                $(".nav_left ul li a").eq(1).children().removeClass("icon-d").addClass("icon-c");
                            })
                        })
                    }
                })
            }

            if (index == 2) {
                $(".popprice ul li a").each(function (index, value) {
                    $1(value).tap(function () {
                        $1(".popprice .icon-e").removeClass("icon-e");
                        $1(this).children().addClass("icon-e");
                        $(this).parent().parent().parent().removeClass("show");
                        $(".nav_left ul li a").eq(2).children().removeClass("icon-d").addClass("icon-c");
                    })
                })
            }
        })
    })

    render(shopId, areaId);

    function render(shopId, areaId) {
        $.ajax({
            url: "http://157.122.54.189:9090/api/getgsproduct",
            type: "get",
            data: {
                shopid: shopId,
                areaid: areaId
            },
            // datatype:"jsonp",
            success: function (data) {
                var htmlStr = template("body_tmp", data);
                $(".coudan-body-content").html(htmlStr);
            }

        })
    }
    $1(".nav_search").tap(function(){
        $(this).children().toggleClass("icon-icon-search icon-icon-cha");
        if($(this).children().hasClass("icon-icon-search")){
            $(".nav_left ul li a").children().removeClass("icon-d").addClass("icon-c");
            $(".popbox").removeClass("show");
            $(".popsearch").addClass("show")
        }else{
            $(".popsearch").removeClass("show")
        }
    })

    $1("header .arrow").tap(function () {
        location.href = "/";
    })

})