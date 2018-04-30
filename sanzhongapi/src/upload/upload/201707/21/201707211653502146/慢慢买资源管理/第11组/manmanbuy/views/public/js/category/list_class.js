
define([
    'jquery',
    'template',
    "zepto",
    "event",
    "touch"
], function ($, template, it) {

    $.ajax({
        url: "http://157.122.54.189:9090/api/getcategorytitle",
        // url: "http://192.168.50.2:9090/api/getcategorytitle",
        type: "get",
        success: function (data) {
            console.log(data);
            var str = template("ctae-tpl", data);
            $(".container").html(str);
            it(".btn").tap(function () {
                var id = $(this).attr("data-id");
                var _this = $(this);
                $.ajax({
                    url: "http://157.122.54.189:9090/api/getcategory",
                    // url: "http://192.168.50.2:9090/api/getcategory",
                    type: "get",
                    data: {
                        titleid: id
                    },
                    success: function (data) {
                        console.log(data);

                        var str = template("catelist-tpl", data);
                        $('.xfl').each(function (i, dom) {
                            if (dom == _this.parent().next(".xfl")[0]) {

                                return;
                            }
                            $(dom).removeClass("show").addClass("hidden");
                        });
                        _this.parent().next(".xfl").html(str).toggleClass('hidden').toggleClass("show");
                    }
                })
            })
        }
    })

    // $(".Commodity-list").on("click", ".btn", function () {
    //     var id = $(this).attr("data-id");
    //     var _this = $(this);
    //     $.ajax({
    //         url: "http://139.199.192.48:9090/api/getcategory",
    //         // url: "http://192.168.50.2:9090/api/getcategory",
    //         type: "get",
    //         data: {
    //             titleid: id
    //         },
    //         success: function (data) {
    //             console.log(data);

    //             var str = template("catelist-tpl", data);
    //             $('.xfl').each(function (i, dom) {
    //                 if (dom == _this.parent().next(".xfl")[0]) {

    //                     return;
    //                 }
    //                 $(dom).removeClass("show").addClass("hidden");
    //             });
    //             _this.parent().next(".xfl").html(str).toggleClass('hidden').toggleClass("show");
    //         }
    //     })
    // })
    // console.log(it);
    //
});
