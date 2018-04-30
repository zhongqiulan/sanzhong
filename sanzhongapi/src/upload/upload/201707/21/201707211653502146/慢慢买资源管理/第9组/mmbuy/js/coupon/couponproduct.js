$(function () {
    // alert(123);
    var id = o.queryString().couponid;
    console.log(o.queryString());
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getcouponproduct',
        type: 'get',
        dataType: "JSON",
        data: {
            couponid: id
        },
        success: function (info) {
            // console.log(info);
            var htmlStr = template('coupon_list', info);
            $('.coupon_list').html(htmlStr);
            var htmlStr1 = template('coupon_modle', info);
            // $('#carousel-example-generic').html(htmlStr1);
            $('.carousel-inner').html(htmlStr1);
            // var htmlStr2 = template('couponProductId',info);
            // $('.navbar-center').html(htmlStr2);
            console.log(id);
            if(id == 0){
                $('.navbar-center span').html("肯德基优惠劵");
            }else if(id ==1){
                $('.navbar-center span').html("必胜客优惠劵");
            }else if(id ==2){
                $('.navbar-center span').html("棒约翰优惠劵");
            }else if(id ==3){
                $('.navbar-center span').html("哈根达斯优惠劵");
            }

          
        }

    })


  $('.coupon_list').on('click', '.lists', function () {
      var $this = $(this);
      var index = $this.data('id');
      console.log($this.data('id'))
    //   alert(index);
      $('.item').removeClass('active');
      $('.item').eq(index).addClass('active');
            })

})