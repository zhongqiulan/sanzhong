$(function () {
  // console.log(this)
  //直接有数组
  var tme = [0, 0];
  var url = config.getUrl('/api/getgsshop');
  var ubl = config.getUrl('/api/getgsproduct');
  var urn = config.getUrl('/api/getgsshoparea');
  var merll = [0, 0];
  $.ajax({
    url: url,
    type: 'get',
    success: function (info) {
      // console.log(merll)
      var temp = info.result;
      info.title = info.title ? merll : "京东";
      var temhtml = template('jd_html', info);
      $('.jd_mle').html(temhtml);

    }
  })
  $.ajax({
    url: urn,
    type: 'get',
    success: function (info) {
      var temhtml = template('jd_addls', info);
      $('.jd_add').html(temhtml);

    }
  })
  //  先获取当前点击的店铺的id
  person(0, 0);
  $('.jd_add').on('click', 'li', function () {
    $(this).parent().prev().html(($(this)[0].children[0].innerHTML));
    var $this = $(this);
    var shopad = $this.attr('data-aid');
    tme[1] = shopad;
    person(tme[0], tme[1])
  })
  // console.log(tme);
  $('.jd_mle').on('click', 'li', function () {
    $(this).parent().prev().html($(this)[0].children[0].innerText);
    var shopmr = $(this).attr('data-sid');
    tme[0] = shopmr;
    // console.log(tme)
    person(tme[0], tme[1])
  })

  function person(m, n) {
    var ubl = config.getUrl('/api/getgsproduct');
    $.ajax({
      url: ubl,
      type: 'get',
      data: {
        shopid: m,
        areaid: n
      },
      success: function (infd) {
        infd.tlmer = "去凑单"
        // console.log(infd)
        var tmlmter = template('pls_mt', infd);
        $('.shl_lis').html(tmlmter);
      }
    })
  }
})
