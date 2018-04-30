$(function(){
    $.ajax({
        url: config.getUrl('/api/getproductcom'),
        type: 'get',
        dataType: 'JSON',
        data: {
            productid : o.queryString().id
        },
        success: function(data){
            console.log(data);
            var tplHtml = template('tpl_comment_list',data);
            $('.comment-list').html(tplHtml);
        },
        error: function(){
            console.log('请求失败');
        }
    });

});