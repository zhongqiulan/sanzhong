//获取当前商品的id
var id = $('.shop li').attr('data-id');
//发送请求
$.ajax({
    url: 'http://139.199.192.48:9090/api/getmoneyctrl',
    // url: 'http://192.168.50.2:9090/api/getmoneyctrl',
    type: 'get',
    dataType: 'JSON',
    data: {
        'productid': id
    },
    success: function (info) {
        var htmlStr = template('money_ctrl_tpl', info);
        $('.shop').html(htmlStr);
    }
})
