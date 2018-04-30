define(['jquery', 'template'], function($, template) {
    var url = tool.getUrl('api/getbrandtitle');
    $.ajax({
        url: url,
        datatype: 'JSON',
        type: 'get',
        success: function(info) {
            var htmlStr = template('brandList_tpl', info);
            $('.brandTitle').html(htmlStr);
        }
    })
})