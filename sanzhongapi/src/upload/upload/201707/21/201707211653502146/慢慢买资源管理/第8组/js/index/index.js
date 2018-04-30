$(function(){
    // 菜单栏获取数据
    var url = config.getUrl('/api/getindexmenu');
    console.log(url);
    $.ajax({
        url:url,
        dateType:'JSON',
        type:'GET',
        success:function(data){
            console.log(data);
            var htmlStr = template('menu_tpl',data);
            $('.menu_list').html(htmlStr);
        }
    })

    // 菜单栏获取的图片路径需要修改
    // $(".menu_list").attr("img",src) = '../'+this.src;

    // 推荐栏获取数据
    var url = config.getUrl('/api/getmoneyctrl');
    console.log(url);
    $.ajax({
        url:url,
        dateType:'JSON',
        type:'GET',
        success:function(info){
            console.log(info);
            var htmlStr = template('rec_tpl',info);
            $('.info_list').html(htmlStr);
        }
    })
})