
define(['jquery', 'template'], function ($, template) {
    // var url = config.getUrl('/api/getcoupon');
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getcoupon',
        // type:'GET',
        // dataType:'JSON',
        success: function (data) {
            console.log(data);
            var htmlStr = template("cou_tpl", data);
            $('.main').html(htmlStr);
        }
    })

});


// $(function(){

// });