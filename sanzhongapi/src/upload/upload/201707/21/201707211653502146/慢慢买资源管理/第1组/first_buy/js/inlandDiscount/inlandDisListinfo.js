define(['jquery', 'template'], function($, template) {
    var id = tool.getSearch().productid;
    var url = tool.getUrl('api/getdiscountproduct');
    $.ajax({
        url: url,
        datatype: 'JSON',
        type: 'get',
        data: { productid: id },
        success: function(info) {
            var htmlStr = template('goodsListInfo_tpl', info.result[0]);
            $('.main').html(htmlStr);
        }
    })
})