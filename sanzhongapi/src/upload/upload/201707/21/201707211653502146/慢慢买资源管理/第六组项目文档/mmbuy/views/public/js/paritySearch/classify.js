define(['jquery', 'bootstrap','template'], function ($, bootstrap,template) {
    //请求分类标题数据
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getcategorytitle',
        // url:'http://192.168.50.2:9090/api/getcategorytitle',
        dataType: 'json',
        success: function (info) {
            // console.log(info);
            
            var str = template('classify_title_tpl', info);
            $('#accordion').html(str);

            
             
            //渲染模板后注册事件
            var flag = true;
            //初始化隐藏所有分页
            for(var i = 0;i<info.result.length;i++) {
                $('#collapse'+(i+1)).collapse('hide');
            }
            
            
            $('#accordion').on('click', '.panel-heading', function () {
                var id = Number($(this).attr('data-id'));
                var titleId = id - 1;
                //请求分类列表数据
                $.ajax({
                    url:'http://139.199.192.48:9090/api/getcategory',
                    // url:'http://192.168.50.2:9090/api/getcategory',
                    data:{
                        titleid:titleId
                    },
                    success:function(data){
                        console.log(data);
                        
                        var str = template('getcategory_tpl', data);
                        // console.log(str);
                        // console.log(str);
                        $('#collapse'+id + ' .panel-body div').html(str);
                    }
                })
                         
                // console.log(id);
                if (flag) {
                    // alert('123');
                    $('#collapse'+id).collapse('show');
                    flag = false;
                    $('.collapse'+id).removeClass('glyphicon glyphicon-menu-down').addClass('glyphicon glyphicon-menu-up')
                } else {
                    $('#collapse'+id).collapse('hide');
                    flag = true;
                    $('.collapse'+id).removeClass('glyphicon glyphicon-menu-up').addClass('glyphicon glyphicon-menu-down')
                    //   alert('123')
                }
                return false;
            })
        }
    })



})