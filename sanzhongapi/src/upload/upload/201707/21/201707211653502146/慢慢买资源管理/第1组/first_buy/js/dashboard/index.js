define(['jquery', 'template', 'bootstrap'], function($, template, bootstrap) {
    var urlMenu = tool.getUrl('api/getindexmenu');
    var urlMoney = tool.getUrl('api/getmoneyctrl');
    $.ajax({
        url: urlMenu,
        dataType: 'JSON',
        type: 'get',
        success: function(info) {
            var arr = ['/Parity-search/search', '/save-money/save-money', '/inlandDiscount/inlandDiscount', '/baicai/baicaijia', '/save-money/save-money', '/coupons/coupons', 'javascript:;', 'javascript:;', '/singleitem/singleitem', 'javascript:;', 'shopping-mall/shopping-mall', 'brandTitle/brandTitle']
            for (var i = 0; i < arr.length; i++) {
                info.result[i].titlehref = arr[i];
            }
            var htmlTpl = template('menu_tpl', info);
            $('.menu').html(htmlTpl);
        }
    })
    $.ajax({
        url: urlMoney,
        dataType: 'JSON',
        type: 'get',
        success: function(info) {
            var htmlStr = template('recommend_tpl', info)
            $(".recommend").html(htmlStr);
        }
    })
})