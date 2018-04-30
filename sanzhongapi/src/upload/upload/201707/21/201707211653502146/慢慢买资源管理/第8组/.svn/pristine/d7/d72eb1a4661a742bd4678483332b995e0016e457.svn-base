/*优惠券js*/

/*优惠券标题列表*/
$.ajax({
    url:'http://139.199.192.48:9090/api/getcoupon',
    type:'get',
    dataType:'JSON',
    success:function(info){
        console.log(info);
        //渲染模板
        var htmlStr = template('coupon_title_tpl',info);
        $('.row').html(htmlStr);

    }
});
