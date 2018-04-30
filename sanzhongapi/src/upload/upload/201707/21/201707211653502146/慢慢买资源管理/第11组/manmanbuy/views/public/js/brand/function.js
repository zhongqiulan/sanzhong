define(['jquery','zepto','event','touch','template'], function ($,zp,e,t,template) {
    // 进入这个页面就发送ajax请求渲染这个页面
    $.ajax({
        url: 'http://157.122.54.189:9090/api/getbrandtitle',
        success: function (info) {
            // alert('请求成功');
            // console.log(info);
            var htmlStr = template('function_tpl', info);
            $('#func_list').html(htmlStr);
            zp("#func_list > a").tap(function(){
                var id = zp(this).attr('data-id');
                var title = zp(this).attr('data-title').slice(0,-4);
                // console.log(title);
                location.href = '/views/brand/category?brandTitleId='+id+"&brandTitle="+title;
            })
        }
    });
    // 底部固定隐藏
    zp(".footer-bar .closefix").tap(function(){
        // $(".brand_func").css("padding-bottom",0)
        $(this).parent().fadeOut(300);
    })
})





































