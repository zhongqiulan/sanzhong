$(function(){
    $.ajax({
        url: config.getUrl('/api/getbrandtitle'),
        type: 'get',
        dataType: 'JSON',
        success: function(data){
            console.log(data);
            var tplHtml = template('tpl_brand_title',data);
            $('.brand-content').html(tplHtml);
        }
    });//ajax
});