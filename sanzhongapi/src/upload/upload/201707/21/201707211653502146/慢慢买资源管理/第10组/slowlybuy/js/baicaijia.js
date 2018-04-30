var navs_url = config.getUrl('api/getbaicaijiatitle');
var title_url = config.getUrl('api/getbaicaijiaproduct');

$.ajax({
    url: navs_url,
    type: 'get',
    success: function (data) {
        var htmlstr = template("bcj_navs_tel", data);
        $('.navs_list').html(htmlstr);

        var id = $('.active').attr('data-id');
        product(id);
    }
});
$('.navs_list').on('click', ".navs_title", function () {
    $(this).siblings().children().removeClass('active');
    $(this).children().addClass('active');

});

//导航栏滑动事件

var myScroll = new IScroll('.navs_box', {scrollX: true, scrollY: false,preventDefault: false});

//   var title_id =  $('.navs_list').children().attr('data-id');
//点击加载不同的商品
$('.navs_list').on('click', ".navs_title", function () {
    var id = $(this).children().attr('data-id');
    product(id);
})

//商品列表
function product(id) {
    $.ajax({
        url: title_url,
        tyep: 'get',
        data: { titleid: id },
        success: function (data) {
            var htmlstr = template('bcj_shangping', data);
            $('.shangping').html(htmlstr);
            var text_spans = $('.bar>i>span');
            for (var i = 0; i < text_spans.length; i++) {
                var w = text_spans.eq(i).text();
                text_spans.eq(i).width(w);
                $('.bar>i>em').text(w);
            };
        }
    })
}
//点击回到顶部
$(".up,.top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
});
//点击返回上一页
$('.prev').on('click', function () {
    window.history.back(-1);
})

//滚动事件
$(window).scroll(function () {
    if (window.scrollY > 300) {
        $('.up').css(
            'display', 'block'
        );
    } else {
        $('.up').css(
            'display', 'none'
        )
    }
})

