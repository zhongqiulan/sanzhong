
    // 获取url上面的值，渲染页面
    var id=utils().queryString().productid;
        id=parseInt(id);
    var category=utils().queryString().category;
        category=decodeURIComponent(category)
    //     console.log(category);
    // console.log(id);
    $.ajax({
        url:'http://139.199.192.48:9090/api/getproduct',
        data:{
            productid:id
        },
        success:function(data){
            var ptName=data.result[0].productName;
            str=ptName.indexOf(' ');
            ptName=ptName.substr(0,str);
            console.log(ptName);
            data.result[0].ptName=ptName;
            data.result[0].category = category;
            console.log(data);
             data.category=category;
            var html=template('prod_tpl',data.result[0]);
            $('.productInfo > .product').html(html)
        }
    })
    // 渲染评论
    $.ajax({
        url:'http://139.199.192.48:9090/api/getproductcom',
        data:{
            productid:id
        },
        success:function(data){
            console.log(data);
             var html=template('comment_tpl',data);
            //  console.log(html);
            $('.comment h5').after(html)
            
        }
    })
    //评论按钮
    $('.moreComment').on('click','button',function(){
        $(this).html('暂无查看更多评价功能')
    })
