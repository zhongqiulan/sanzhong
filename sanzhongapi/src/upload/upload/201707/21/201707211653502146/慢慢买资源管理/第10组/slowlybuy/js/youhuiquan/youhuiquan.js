var info_url = config.getUrl('api/getcoupon');
$.ajax({
    url:info_url,
    type:'get',
    success:function(data){
        console.log(data);
        var htmlstr = template('coupon_tel',data);
        $('.info_coupon').html(htmlstr);
    }
});
$('.prev').on('click', function () {
    window.history.back(-1);
})
