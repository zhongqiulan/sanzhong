define(['jquery', 'template'], function($, template) {
    var url = tool.getUrl('api/getinlanddiscount');
    $.ajax({
        url: url,
        datatype: 'JSON',
        type: 'GET',
        success: function(info) {
            var htmlStr = template('goodList_tpl', info);
            $('.goodsList .row').html(htmlStr);
        }
    })
    $('.goodsList .row').on('click', '.list', function() {
        var id = $(this).attr('data-id');
        location.href = '/inlandDiscount/inlandDisListinfo?productid=' + id;
    })
})