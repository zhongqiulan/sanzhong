
/**
 *    author:郑伟雄
      data:2017/7/18;
 */

define([
    'jquery',
    'template'
], function($, template) {
$.ajax({
    url: 'http://139.199.192.48:9090/api/getbrandtitle',
    type: 'get',
    success: function (info) {
        var str = template('tpl_brand', info);
        $(".content  ul").html(str)
    }
})

$(".content ul").on("click", '#brand_Title', function () {
    var res = $(this).attr('brandTitle');
    location.href = 'getbrand.html?brandtitleid=' + res
})

});