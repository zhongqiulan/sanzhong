$(function () {
    //首页菜单栏api
    $.ajax({
        // url:'http://139.199.192.48:9090/api/getindexmenu',
        url: config.getUrl('/api/getindexmenu'),
        type: 'get',
        success: function (info) {
            console.log(info);
            var listStr = template('index_list_tmp', info);
            $('#index_list_ul').html(listStr);
            // alert('finish');
        }
    })



    //首页的折扣列表中的数据api
    $.ajax({
        //    url:'http://139.199.192.48:9090/api/getmoneyctrl',
        url: config.getUrl('/api/getmoneyctrl'),
        type: 'get',
        success: function (info) {
            var htmlStr = template('discount_tmp', info);
            $('.discount_ul').html(htmlStr);
            // alert('go');
        }
    })


    //index的回到顶部的图标隐藏和出现
    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $('#back_top').css('visibility', 'visible');
        }
        else {
            $('#back_top').css('visibility', 'hidden');
        }
    });

})

