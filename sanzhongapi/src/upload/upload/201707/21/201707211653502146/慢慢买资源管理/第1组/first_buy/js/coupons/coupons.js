define(['jquery', 'template'], function ($, template) {
   
    // 优惠券部分
    couponApi();

    function couponApi() {
        $.ajax({

            url: tool.getUrl('api/getcoupon'),

            type: 'get',
            dataType: 'Json',
            success: function (data) {

                $('.items ul').html(template('couponsTmp', data));
            }
        })
    }

    $('.items_click').on('click', 'li', function () {


        var id = $(this).attr('data-id');
        location.href = '/pages/coupons/lists?couponid=' + id;

    })

})