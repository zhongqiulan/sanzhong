
// // 从进来改页面就有效果，所以一开始就要有商品列表请求，渲染页面
$.ajax({
    url: 'http://139.199.192.48:9090/api/getgsproduct',
    type: 'get',
    data: {
        "shopid": 0,
        "areaid": 0
    },
    success: function (info) {
        // console.log(info)
        var htmlStr = template('jd_tpl', info)
        $('.item-show .row').html(htmlStr)
    }
})



// 京东等的店铺数据来源
$('#jd_seach').on('click', function () {
    // alert('点击成功，发送请求中')
    $.ajax({//发送请求店铺信息
        url: 'http://139.199.192.48:9090/api/getgsshop',
        type: 'get',
        data: {
            "shopId": 'shopId',
            "shopName": 'shopName'
        },
        success: function (info) {
            // console.log(info)
            var htmlStr = template('shop_tpl', info);
            $('.jd_download').html(htmlStr)


            // 京东下拉菜单点击事件
            $('.jd_download').on('click', 'li', function (data) {
                // alert('2347');
                // 根据li发送ajax请求，再次渲染商品列表页面
                // console.log(data.currentTarget.id);//获取到当前点击的目标的id
                // $.ajax({
                //     url: 'http://139.199.192.48:9090/api/getgsproduct',
                //     type: 'get',
                //     data: {
                //         "shopid": data.currentTarget.id,
                //         "areaid": 0
                //     },
                //     success: function (info) {
                //         // console.log(info)
                //         var htmlStr = template('jd_tpl', info)
                //         $('.item-show .row').html(htmlStr)
                //         //  alert('发送成功')
                //     }
                // })
                replace(data)

            })
        }
    })

})



// 地域请求列表
$('#area_seach').on('click', function () {
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getgsshoparea',
        type: 'get',
        data: {
            "areaId": 0,
            "areaName": "华北（北京、山西等）"
        },
        success: function (info) {
            // console.log(info);
            var htmlStr = template('dy_tpl', info);
            $('.area').html(htmlStr)

            // 地域下拉请求商品列表
            $('.area').on('click', "li", function (data) {
                // alert(32423522)
                // $.ajax({
                //     url: 'http://139.199.192.48:9090/api/getgsproduct',
                //     type: 'get',
                //     data: {
                //         "shopid": data.currentTarget.id,
                //         "areaid": 0
                //     },
                //     success: function (info) {
                //         // console.log(info)
                //         // console.log(data.currentTarget.id)
                //         var htmlStr = template('jd_tpl', info)
                //         $('.item-show .row').html(htmlStr)
                //         //  alert('发送成功')
                //     }
                // })
                replace(data)

            })
        }
    })
})

// 价格请求商品列表
$('.price>li').on('click', function () {
    // alert('3298')
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getgsproduct',
        type: 'get',
        data: {
            "shopid": 0,
            "areaid": 0
        },
        success:function(info){
            var htmlStr = template('jd_tpl', info)
            $('.item-show .row').html(htmlStr)
        }
    })


})

// 封装商品列表请求
function replace(data) {
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getgsproduct',
        type: 'get',
        data: {
            "shopid": data.currentTarget.id,
            "areaid": 0
        },
        success: function (info) {
            var htmlStr = template('jd_tpl', info)
            $('.item-show .row').html(htmlStr)
            //  alert('发送成功')
        }
    })
}


// 点击显示和隐藏下拉框
$(function(){
   $('.tab-content').hide();
    $(".down_lowd").click(function() {
        $(".tab-content").toggle();  // 已经显示则隐藏，隐藏了则显示
    })
})

// 下拉导航搜索点击切换图标
$('.last_seach>a>span').on('click',function(){
   $('.last_seach>a>span').removeClass('glyphicon glyphicon-search')//移除改样式
   $('.last_seach>a>span').addClass('glyphicon glyphicon-remove')//添加此样式
   $(".last_seach>a>span").click(function() {
   $('.last_seach>a>span').removeClass('glyphicon glyphicon-remove')
   $('.last_seach>a>span').addClass('glyphicon glyphicon-search')
    })
})

