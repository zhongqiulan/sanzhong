define(["jquery", "template"], function($, template) {
    $.ajax({
        url: tool.getUrl("api/getsitenav"),
        success: function(info) {
            var tpl = template("sm-tpl", info);
            $(".sm-main").html(tpl);
        }
    })
})