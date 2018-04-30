 
       //初始化页面,请求分类页数据渲染到页面
        $.ajax({
        url:'http://139.199.192.48:9090/api/getcategorytitle',
        success:function(d){
            var htmlStr = template("main_list_tpl",d);
            $('.main>ul').html(htmlStr);
            // console.log(d);
            }
        });
        //点击主菜单时,加载分类标题到页面,并显示
        $('.main').on('click','.main_list',function(){
            //判断当前是否有ul_hide类名
            var flag = $(this).next().hasClass('ul_hide');
            var _this = $(this);
            //所有隐藏
            $(".main_list").next().addClass('ul_hide');
            //循环将所有main_list类名下面的span移除类名,显示向下箭头
            for(var i=0;i<$(".main_list").length;i++){
                $($(".main_list")[i]).children().eq(1).removeClass("glyphicon-menu-up");
                $($(".main_list")[i]).children().eq(1).addClass("glyphicon-menu-down");
            }
            console.log($(".main_list"));
            if(!this.getAttribute('data_active')){
                $(this).next().removeClass('ul_hide');
                $(this).children().eq(1).removeClass("glyphicon-menu-down");
                $(this).children().eq(1).addClass("glyphicon-menu-up");
                $.ajax({
                    url:'http://139.199.192.48:9090/api/getcategory',
                    //传入titleId参数
                    data:{titleid:$(this).attr('data-titleId')},
                    success:function(d){
                        console.log(d);
                    var htmlStr=template('son_list_tpl',d);
                    _this.next().html(htmlStr);
                    //设置一个属性做为已请求渲染的标识
                    _this.attr('data_active','ok');
                    }
                });
            }else{
                if(flag){
                    $(this).next().removeClass('ul_hide');
                    $(this).children().eq(1).removeClass("glyphicon-menu-down");
                    $(this).children().eq(1).addClass("glyphicon-menu-up");
                }else{
                    $(this).next().addClass('ul_hide');
                    $(this).children().eq(1).removeClass("glyphicon-menu-up");
                    $(this).children().eq(1).addClass("glyphicon-menu-down");

                }

            }
        });