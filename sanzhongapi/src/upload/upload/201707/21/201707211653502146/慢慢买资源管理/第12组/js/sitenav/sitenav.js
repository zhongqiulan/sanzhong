$(function(){
    // 跳转加载download页面
    downLoad();
    function downLoad(){
        $.ajax({
            url:'http://139.199.192.48:9090/api/getsitenav',
            success:function(data){
                console.log(data);
                var htmlStr=template('tp_download',data);
                $('.navLink').html(htmlStr);
            }
        })
    }
})