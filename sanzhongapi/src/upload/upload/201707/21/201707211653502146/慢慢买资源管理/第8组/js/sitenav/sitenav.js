$.ajax({
    url:'http://139.199.192.48:9090/api/getsitenav',
    type:'get',
    success:function(info){
        console.log(info);
        //渲染模板
        var htmlStr = template('site_tpl',info);
        $('.sitenav-list').html(htmlStr);
    }
})
