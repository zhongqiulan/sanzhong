var search = location.search;
var id = search.split('=')[1];

$.ajax({
    url: 'http://139.199.192.48:9090/api/getmoneyctrl',
    type: 'get',
    dataType: 'json',
    data: {
        'productid': id
    },
    success: function (info) {
        var htmlStr = template('overseas_tpl',info);
        $('.shop').html(htmlStr);
    }
})