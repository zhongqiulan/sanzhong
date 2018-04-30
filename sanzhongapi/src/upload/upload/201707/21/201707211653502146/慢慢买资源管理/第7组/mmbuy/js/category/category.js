/**
 * 功能：发送请求，渲染当前页面数据
 */
$.ajax({
    url: config.getUrl("/api/getcategorytitle"),
    type: 'get',
    dataType: 'json',
    success: function (data) {
        var htmlStr = template("categoryTpl", data);
        $(".category").html(htmlStr);
    }
})

// 内容信息
$(".category").on('click', 'ul li', function () {
    var tid = $(this).attr('data-tid');
    var _this = $(this);
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getcategory?titleid=' + tid,
        type: 'get',
        success: function (data) {
            var htmlStr = template('infoTpl', data);
            _this.children('.ct_info').html(htmlStr);

            if (_this.children('.ct_info').hasClass("hide")) {
                $(".category .title").children('i').removeClass('glyphicon glyphicon-menu-up').addClass("glyphicon glyphicon-menu-down");
                _this.children().children('i').removeClass('glyphicon glyphicon-menu-down').addClass("glyphicon glyphicon-menu-up");

                $(".ct_info").addClass("hide");
                _this.children('.ct_info').removeClass("hide");
            } else {
                _this.children().children('i').removeClass('glyphicon glyphicon-menu-up').addClass("glyphicon glyphicon-menu-down");
                _this.children('.ct_info').addClass("hide");
            }
            
        }
    })
})