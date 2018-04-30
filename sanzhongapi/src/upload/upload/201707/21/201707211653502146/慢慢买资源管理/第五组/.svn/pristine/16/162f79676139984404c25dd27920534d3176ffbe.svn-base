function render(page) {
  $.ajax({
    url: 'http://139.199.192.48:9090/api/getinlanddiscount',
    type: 'get',
    dataType: 'json',
    beforeSend: function () {
      $('.loading').show();
    },
    success: function (info) {
      $('.loading').hide();

      if (page) {
        var s = parseInt(Math.random() * 15);
        info.result = info.result.slice(s, s + 4);
      }
      var html = template('zhekou_list_tpl', info);
      $('.zhekou_content ul').append(html);

      // 绑定点击事件,点击每个里跳转到相应商品的详细页面
      $('.zhekou_content ul').on('click', 'li', function () {
        location.href = 'zhekou/product_info.html?productId=' + $(this).attr('data-id');
      })
    }
  })
}

render();
$(window).on('scroll', function () {
  var divH = $('.zhekou_content').height();
  var divScrollT = $('.zhekou_content').offset().top;
  var winH = $(window).height();
  var windScrollT = $(window).scrollTop();
  var distance = (divH + divScrollT) - (winH + windScrollT);

  if (distance <= 50) {
    if ($('.loading').css('display') == 'block') {
      return;
    } else {
      render(1);
    }
  }
})


