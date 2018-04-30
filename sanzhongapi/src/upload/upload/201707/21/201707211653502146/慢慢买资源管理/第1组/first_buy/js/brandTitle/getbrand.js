define(['jquery', 'template'], function($, template) {
    var url = tool.getUrl('api/getbrand');
    var urlList = tool.getUrl('api/getbrandproductlist')
    var urlCom = tool.getUrl('api/getproductcom')
    var id = tool.getSearch().brandTitleId;
    var obj = {};
    //获得的是乱码，需要解码
    var brandTit = decodeURI(tool.getSearch().brandTit);
    $.ajax({
        url: url,
        datatype: 'json',
        type: 'get',
        data: {
            brandtitleid: id,
        },
        success: function(info) {
            info.brandTit = brandTit;
            var htmlStr = template('getbrand_tpl', info);
            $('.main').html(htmlStr);
            $.ajax({
                url: urlList,
                datatype: 'json',
                type: 'get',
                data: {
                    brandtitleid: id
                },
                success: function(info) {
                    var obj = {
                        img: info.result[0].productImg,
                        name: info.result[0].productName
                    }
                    var firstId = info.result[0].productId;
                    info.brandTit = brandTit;
                    var htmlStr = template('recommend_tpl', info);
                    $('.ranking').html(htmlStr);
                    $.ajax({
                        url: urlCom,
                        datatype: 'json',
                        type: 'get',
                        data: {
                            productid: firstId
                        },
                        success: function(info) {
                            info.name = obj.name;
                            info.img = obj.img;
                            info.brandTit = brandTit;
                            // info.brandTit = brandTit;
                            var htmlStr = template('comId_tpl', info);
                            $('.comContent').html(htmlStr);
                        }
                    })
                }
            })
        }
    });

})