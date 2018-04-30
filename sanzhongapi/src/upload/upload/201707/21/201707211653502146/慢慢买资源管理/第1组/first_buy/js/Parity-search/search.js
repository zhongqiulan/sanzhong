define(['jquery', 'template', 'bootstrap'], function($, template, bootstrap) {
    $.ajax({
        url: tool.getUrl('api/getcategorytitle'),
        type: 'get',
        success: function(info) {
            var htmlstr = template("search_tpl", info);
            $(".seation_search").html(htmlstr);

        }
    })

    $(".seation_search").on("click", ".panel-heading", function() {
        if ($(this).parent().find(".collapse").hasClass("in")) {
            $(this).find(".after").css("background-image", "url('/images/arrow1.gif')");
        } else {
            $(this).find(".after").css("background-image", "url('/images/arrow2.gif')");
            var that = $(this);
            $.ajax({
                url: tool.getUrl('api/getcategory'),
                type: 'get',
                data: {
                    titleid: $(this).attr("data-titleid")
                },
                success: function(info) {
                    var htmlstr = template("collapse_tpl", info);
                    $("#collapseOne" + that.attr("data-titleid") + " .household").html(htmlstr);
                }
            })
        }

    })
})