      //获取categoryId
        var search = location.search;
         search =  search.slice(1);
        var arr =  search.split('&');
        var obj = {};
        for(var i=0;i<arr.length;i++){
            var tempArr = arr[i].split('=');
            obj[tempArr[0]] = tempArr[1];
        }
        console.log(obj);
        //发送请求,通过category 和 productId获取数据
        $.ajax({
            url:'http://139.199.192.48:9090/api/getproduct',
            type:'get',
            data:{productid:obj.productId},
            success:function(d){
                //把url码转成中文,存入d属性中
                d.category = decodeURI(obj.category);
                var htmlStr = template('commodity_info_tpl',d);
                $('.main').html(htmlStr);

            $.ajax({
                url:'http://139.199.192.48:9090/api/getproductcom',
                type:'get',
                data:{productid:obj.productId},
                success:function(d){
                    var htmlStr = template('comment_tpl',d);
                    $('.comment_content ul').html(htmlStr);
                    console.log(htmlStr);
                }

            });
                
                // console.log(d);
            }
        });
        //注册点击评价按钮的事件,显示评价内容
        // $('.main').on('click','.commodity_nav .comment',function(){
        //     $.ajax({
        //     url:'http://139.199.192.48:9090/api/getproductcom',
        //     type:'get',
        //     data:{productid:obj.productId},
        //     success:function(d){
        //         var htmlStr = template('comment_tpl',d);
        //         $('.comment_content ul').html(htmlStr);
        //         console.log(htmlStr);
        //     }

        //     });
        // });