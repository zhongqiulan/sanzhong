define(['jquery', 'template'], function($, template) {
    var number;
    var search = location.search;
    search = search.slice(1);
    var arr = search.split("&");
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var tem = arr[i].split("=");
        obj[tem[0]] = tem[1];
    }
    number = obj.productid;
    $.ajax({
        url: tool.getUrl('api/getmoneyctrlproduct'),
        data: {
            productid: number,
        },
        beforeSend: function() {
            $(".shade").removeClass("hide");
        },
        success: function(info) {
            $(".shade").addClass("hide");
            var htmlstr = template('mymoban', info.result[0])
            $('.yemian').html(htmlstr);
        }
    })
    $('.dyh').on('click', function() {
        location.href = "/save-money/save-money";
    })
})