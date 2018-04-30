define(['jquery', 'template'], function($, template) {

    listsApi();

    function listsApi() {

        var id = tool.getSearch().couponid;

        $.ajax({
            url: tool.getUrl('api/getcouponproduct'),
            type: 'get',
            dataType: 'Json',
            data: {
                couponid: id
            },

            success: function(data) {
                $('.quan-list ul').html(template('listsTmp', data));
            }
        })
    }

    $(function() {
        // 获取遮罩层元素
        var mask = $('.mask');
        // 获取点击优惠券元素
        var coupon_ul = $('.list_click');
        // 获取遮罩层的img元素
        var maskImg = $('.mask img');


        // // 获取遮罩层左按钮元素
        // var btnLeft = $('.glyphicon-menu-left');
        // // 获取遮罩层右按钮元素
        // var btnRight = $('.glyphicon-menu-right');

        coupon_ul.on('click', 'li', function() {

            mask.addClass('show');
            var src = $(this).find('img').attr('src');
            maskImg.attr('src', src);
        });

        mask.on('click', function() {
            mask.removeClass('show');
        });

        // btnLeft.on('click',function (){

        // });

    })


})