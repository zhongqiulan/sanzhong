



$(function () {
  var titleId = 0;
  sale(titleId);
  $.ajax({
    url: "http://139.199.192.48:9090/api/getbaicaijiatitle",
    dataType: "json",
    success: function (info) {
      console.log(info);
      var html = template("navInfo", info);
      $(".naver").html(html);
      $($(".naver li")[0]).addClass("actives");

      // var widths = 0;
      // for(var i = 0; i < info.result.length; i++){
      //   widths += $($(".naver li")[i]).width();
      // }
      // $(".naver").css("width" ,widths+"px");
      // $($(".naver li")).each(function(i,val){
      //   widths += $($(".naver li")[i]).width();
      // })

      

      $(".naver").on("click", "li", function () {
        $(this).siblings().removeClass("actives");
        $(this).addClass("actives");
        titleId = $(this).children("input").val();
        $("#productList").html('');
        sale(titleId);
      })
    }
  })

  function sale(num) {
    $.ajax({
      url: "http://139.199.192.48:9090/api/getbaicaijiaproduct",
      dataType: "json",
      data: {
        titleid: num
      },
      success: function (info) {
        var text = '';
        for (var i = 0; i < info.result.length; i++) {
          $.each(info.result[i], function (j, value) {
            text = '<li><div class="media">' +
              '<div class="media-left">' +
              info.result[i]['productImg'] +
              '</div>' +
              '<div class="media-body">' +
              '<a class="media-heading">' + info.result[i]['productName'] + '</a>' +
              '<div class="price">' +
              info.result[i]['productPrice'] +
              '</div>' +
              info.result[i]["productCouponRemain"] +
              '<div class="sale">' +
              '<p>' + info.result[i]['productCoupon'] + '</p>' +
              '<span type="button" class="btn btn-danger">' + info.result[i]['productHref'] + '</span>' +
              ' </div>' +
              '</div>' +
              '</div></li>'
          })
          $("#productList").append(text);
          $(".bar").addClass("progress");
          $(".bar em").addClass("progress-bar").attr({ "role": "progressbar", 'aria-valuenow': "60" });
          text = '';
        }
      }
    })
  }

  var flag = true;
  $('#dLabel').on("click", function () {
    if (flag) {
      $('#dLabel').html("&#xe664;");
      flag = false;
    } else {
      $('#dLabel').html("&#xe6a4;");
      flag = true;
    }
  })



  $(document).bind('scroll', function () {
    var len = $(this).scrollTop();
    if (len >= 50) {
      $('.TopBtn').show();
    } else {
      $('.TopBtn').hide();
    }
  })
  //绑定回到顶部按钮的点击事件
  $('.TopBtn,#TopBtn').click(function () {
    //动画效果，平滑滚动回到顶部
    $('body,html').animate({ scrollTop : 0 },800);
    //不需要动画则直接回到顶部
    //$(document).scrollTop(0)
  })
})