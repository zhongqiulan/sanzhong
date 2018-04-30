
define([
    'jquery',
    'template'
],function ($,template) {
    // 获取数据的id
    var search = location.search;
    // 从第一位开始截取到最后
    search = search.slice(1);
    // 以&符号分割
    var searchArr = search.split("&");
    // console.log(searchArr);
    var obj = {};
    for (var i = 0; i < searchArr.length; i++) {
        var temp = searchArr[i].split("=");
        obj[temp[0]] = temp[1];
    }
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getcouponproduct',
        type: 'GET',
        dataType: 'JSON',
        data: { couponid: obj.couponId },
        success: function (info) {
            // console.log(info);
            var htmlStr = template('yh-tpl', info);
            $('.list-group').html(htmlStr);
            var str = template('screen-tpl', info);
            $('.screen').html(str);
            var id = 0;
            $('.main').on("click", "a", function () {
                $('.screen').show();
                id = $(this).attr('data-id');
                // console.log($(this));
                $('.item').removeClass('active');
                console.log(id);
                $('.item' + id).addClass('active');
                // console.log($('.item'));

            });
            $('.screen').on('click', function (e) {
                if (e.target.nodeName != "SPAN") {
                    $(this).hide();
                }else{
                    // alert('点击')
                    id++;
                    $('.item').removeClass('active');
               
                    $('.item' + id).addClass('active');
                }

            })

        }


    })

    // $('.headers>div>a').on("click",function(){
    //     window.history.back();
    //     alert(123);
    // })

});
