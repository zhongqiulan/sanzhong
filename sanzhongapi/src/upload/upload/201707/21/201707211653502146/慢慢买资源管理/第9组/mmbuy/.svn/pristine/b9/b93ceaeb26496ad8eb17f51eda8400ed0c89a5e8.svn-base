$(function(){
    //品牌列表
    $.ajax({
        url: config.getUrl('/api/getbrand'),
        type: 'get',
        dataType: 'JSON',
        data: {brandtitleid: o.queryString().id},
        success: function(data){
            console.log(data);
            var tplHtml = template('temp_brand_list',data);
            $('.model').html(tplHtml);
        }
    });//ajax

    //品牌销量排行列表
    $.ajax({
        url: config.getUrl('/api/getbrandproductlist'),
        type: 'get',
        dataType: 'JSON',
        data: {
            brandtitleid: o.queryString().id
        },
        success: function(data){
            // console.log(data);
            var tplHtml = template('temp_brand_product',data);
            $('.product').html(tplHtml);
        }
    });

});