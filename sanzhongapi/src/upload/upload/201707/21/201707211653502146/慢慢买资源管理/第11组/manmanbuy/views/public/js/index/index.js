define([
        'jquery', 'template'
    ],
    function($, template) {
        var arr = ["/category", "/moneyctrl", "/inlanddiscount", "/baicaijia", "/haitao", "/coupon", "javascript:;", "javascript:;", "/coudan", "javascript:;", "/sitenav", "/brand/function"]
        $.ajax({
            url: "http://157.122.54.189:9090/api/getindexmenu",
            // dataType: 'JSON',
            type: "GET",
            success: function(data) {
                for (var i = 0; i < data.result.length; i++) {
                    data.result[i].href = arr[i];
                }
                var html = template('temp', data);
                $('.menu').html(html);
                $(".menu").on("click", "#collapse1", function() {
                    $("#collapseExample").toggleClass("collapse");
                })
            }
        })
        $.ajax({
            url: "http://157.122.54.189:9090/api/getmoneyctrl",
            type: "GET",
            success: function(data) {
                var html = template('temp1', data);
                $('.cu-list').html(html);
            }
        })

        $('collapse')
    });