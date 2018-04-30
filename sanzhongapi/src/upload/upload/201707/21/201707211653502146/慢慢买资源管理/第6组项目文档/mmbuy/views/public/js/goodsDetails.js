define(['jquery','template','utils'],function($,template,obj){
    var productid = Number(obj.queryString().productid); //商品id
    var categoryId = Number(obj.queryString().categoryId);
    var category =  decodeURIComponent(obj.queryString().category);
    // console.log(brandName);
    //商品详情
    $.ajax({
        url:'http://139.199.192.48:9090/api/getproduct',
        // url:'http://192.168.50.2:9090/api/getproduct',
        data:{
            productid:productid,
           
        },
        success:function(info) {
            console.log(info);
            //渲染导航路径
            var productName = info.result[0].productName;
            // console.log(productName);
            var nameStr = productName.split(' ');//切割字符串
            // console.log(nameStr);
            info.goods_name = nameStr[0];
            info.category = category;
            var navStr = template('goods_navs_tpl',info);
            $('.goods_navs').append(navStr);
            
            //渲染商品详情
            var detailStr = template('goods_details_tpl',info);
            $('.goods_details').html(detailStr);
            
           
           
        }

    })

    //网友评价请求
    $.ajax({
        url:'http://139.199.192.48:9090/api/getproductcom',
        data:{
            productid:productid
        },
        success:function(info) {
            console.log(info);
            var str = template('com_tpl',info);
            $('.content').html(str);
        }
    })
})