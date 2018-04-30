define(['jquery', 'zepto', 'touch', 'event', 'utils', 'template'], function ($, zp, t, e, utils, tempalte) {
    var id = utils.queryString().brandTitleId;
    var title = utils.queryString().brandTitle;
    var pagesize = 4;//展示的商品数据量
    title = decodeURI(title);
    // alert(id);
    // 哪个牌子好
    $.ajax({
        url: 'http://157.122.54.189:9090/api/getbrand',
        data: {
            brandtitleid: id
        },
        success: function (info) {
            // console.log(info);
            var htmlStr = tempalte('category_tpl', info);
            $('.brand-content ul').html(htmlStr);
            // 请求成功后修改相应的区域
            $('.header ul li:last-of-type a').text(title + '哪个牌子好');
            $('.brand-title h4 a').text(title + '哪个牌子好');
            $('.sale-title h4 a').text(title + '产品销量排行');
            $('.recommend-title h4 a').text(title + '最有用的用户评论');
        }
    })
    // 销量排行
    
    $.ajax({
        url: 'http://157.122.54.189:9090/api/getbrandproductlist',
        data: {
            brandtitleid: id,
            pagesize: pagesize
        },
        success: function (info) {
            //  console.log(info)
            var htmlStr = tempalte('sale_tpl',info);
            $('.sale-content ul').html(htmlStr);
            var productId = info.result[0].productId;
            var productImg = info.result[0].productImg;
            var productName = info.result[0].productName;
            // 最有用的用户评论
            $.ajax({
                url: 'http://157.122.54.189:9090/api/getproductcom',
                data: {
                    productid: productId
                },
                success: function (info) {
                    // console.log(info);
                    info.productImg = productImg;
                    info.productName = productName;
                    var htmlStr = tempalte("recommend_tpl",info);
                    $('.recommend-content ul').html(htmlStr);
                }
            })
        }
    });

    // 地部广告栏隐藏
    zp(".footer-bar .closefix").tap(function () {
        $(this).parent().fadeOut(300);
    })

})