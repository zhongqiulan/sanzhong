
define([
    'jquery',
    'template',
    "iscroll"
], function($, template, iScroll) {
    var Scroll = new iScroll("#bcj-head-cat", {
        scrollX: true,
        scrollY: false
    })
    $.ajax({
            url: 'http://157.122.54.189:9090/api/getbaicaijiatitle',
            type: 'GET',
            success: function(data) {
                var html = template('li', data);
                $('.nav-tabs').html(html);
                $(".nav-tabs .meu_box").eq(0).addClass("reveal")
                // 动态获取到所有li的宽度的和,让后再动态设置给ul
                var sunWidth = 0;
                $('#wrapper').each(function(index, element) {
                    sunWidth += $(element).outerWidth(true);
                })
                $('#wrapper').css({
                    "width": sunWidth + "px"
                })
                getTabDiv(0);
                var mains = $("#wrapper").children();
                $(mains).on('click', function() {
                    $(mains).removeClass("reveal");
                    $(this).addClass("reveal");
                    console.log(this);
                    var index = $(this).index();
                    console.log(index);
                    $(".selected").removeClass("selected");
                    mains.eq(index).addClass("selected");
                    getTabDiv(index);
                })
                function getTabDiv(id) {
                    $.ajax({
                        url: 'http://139.199.192.48:9090/api/getbaicaijiaproduct?titleid=' + id,
                        type: "get",
                        success: function(data) {
                            var htmlStr = template('sp', data);                           
                            $('.ul-list').html(htmlStr);
                        }
                    })
                }
              
            }
        })
       
})