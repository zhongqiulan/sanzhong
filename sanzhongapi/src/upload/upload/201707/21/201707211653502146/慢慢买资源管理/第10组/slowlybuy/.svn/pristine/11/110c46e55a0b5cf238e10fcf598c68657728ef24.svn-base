var coupon_url = config.getUrl('api/getcouponproduct');

var search = location.search.slice(1);
var searcharr = search.split('&');
var obj = {};
for (var i = 0; i < searcharr.length; i++) {
    var temp = searcharr[i].split('=');
    obj[temp[0]] = temp[1]
};
var id = obj.couponId;

$.ajax({
    url: coupon_url,
    data: { couponid: id },
    success: function (data) {
        var htmlstr = template('tel', data);
        $('.info_ul').html(htmlstr);
    }
})


//点击显示模态框
$('.info_ul').on('click', '.media-left img', function () {
    $('.modal').modal('show');
    $('.modal').css('display', 'block');
    var _this =this
    $.ajax({
    url: coupon_url,
    data: { couponid: id },
    success: function (data) {
        var htmlstr = template('lunb_tel', data);
        $('.carousel-inner').html(htmlstr);
        var ouponProductId = $(_this).parent().attr('data-id');
        $('.item[data-id='+ouponProductId+']').addClass('active');
        var  scrollTop = _this.offsetTop
    }
})

});
//点击隐藏模态框
$('.carousel-inner').on('click','.item img',function(){
    $('.modal').modal('hide');
     var id = $(this).parent().attr('data-id')
    var  scrollTop =  $('.media-left[data-id='+id+']')[0].offsetTop
    $("html,body").animate({ scrollTop: scrollTop }, 500);
})
//
$('.prev').on('click', function () {
    window.history.back(-1);
})

$('.carousel').carousel({
    interval: false
})
