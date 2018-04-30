/**
 * Created by Administrator on 2017/7/18 0018.
 */

$(function(){
    var url = config.getUrl('/api/getmoneyctrl');
    $.ajax({
        url:url,
        type:"GET",
        dataType:'JSON',
        success:function(info){
            var htmlStr = template('content_tpl',info);
            $('.content').html(htmlStr);
        }
    })

    //点击商品时  跳转到国内折扣的商品详情页
    $('.content').on('click','#btnSkip',function (){
        var id = $(this).attr('productId');
        location.href = 'rebate.html?productid='+id;
    })

})



