//获取凑单品的店铺的信息 并渲染到店铺的下拉列表

$('#tabs .shop').on("click", function () {
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getgsshop',
        // url:'http://192.168.50.2:9090/api/getgsshop',
        type: "get",
        dataType: "Json",
        success: function (data) {
            console.log(data);
            var dropOne = template("dropOne", data);
            $('#list_one').html(dropOne);
        }

    })
});

$('#tabs .area').on("click", function () {
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getgsshoparea',
        // url:'http://192.168.50.2:9090/api/getgsshoparea',
        type: "get",
        dataType: "Json",
        success: function (data) {
            console.log(data);
            var dropTwo = template("dropTwo", data);
            $('#list_two').html(dropTwo);
        }

    })
})
//根据对应的店铺和商品信息渲染页面,默认是第一个店铺和第一个参数
getPage(0, 0);

function getPage(shopid, areaid) {
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getgsproduct',
        // url:'http://192.168.50.2:9090/api/getgsproduct?shopid=1&areaid=1',
        type: "get",
        data: {
            shopid: shopid,
            areaid: areaid
        },
        dataType: "Json",
        success: function (info) {

            var details = template("list_details", info);

            $('#page_details').html(details);

        }
    })
}

//tab栏点击事件
$('#tabs .nav').on("click", "li", function () {
    $(this).siblings().find('i').removeClass('glyphicon glyphicon-triangle-top').addClass('glyphicon glyphicon-triangle-bottom');
    $(this).find('i').removeClass().addClass('glyphicon glyphicon-triangle-top');
});
//点击显示再次点击隐藏
$("#tabs .nav li").each(function (i) {
    $(this).on("click", function () {
        $(this).parent().parent().parent().find('.tab-pane').eq(i)
            .toggleClass('active').siblings().removeClass("active");
        // $(this).parent().parent().parent().find('.tab-pane').eq(i).find('i')
        //     .eq(0).addClass('glyphicon-ok');
    });

});
//点击下拉列表时修改tab栏的数据

$('.tab-content .tab-pane .list-group').each(function (i) {
    $(this).on('click', "a", function () {
        var str = $(this).text();
        var arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == "" || typeof(arr[i]) == "undefined") {
                arr.splice(i, 1);
                i = i - 1;
            }
        }
        var arr2=arr[1];
        // console.log($(this).parent().parent().parent().parent().parent().find('.nav a').eq(i));
        // $(this).parent().parent().parent().parent().parent().find('.nav a').eq(i).html(arr2);
        // $(this).parent().parent().parent().parent().parent().find('.nav a').eq(i);
    });


});


// 默认第一项加上类
$('.tab-content .list-group').find('i').eq(0).addClass('glyphicon-ok');

//下拉选项点击事件
//
$('.list-group').on("click", "a", function () {
    $(this).siblings().find('i').removeClass('glyphicon-ok');
    $(this).find('i').addClass('glyphicon-ok');
//    获取shopid
//     var shopid = $(this).attr('data-shop');
//     console.log(shopid);
//     var areaid = $(this).attr('data-area');
//     console.log(areaid);
    return false;
});

//给商店注册事件
$('#list_one').on("click","a",function () {
    //    获取shopid
    var shopid = $(this).attr('data-shop');
    // console.log(shopid);
    var idx=Math.floor(Math.random()*7);
    getPage(shopid,idx);
    return false;
});
//给地区注册事件
$('#list_two').on("click","a",function () {
    //    获取id
    var areaid = $(this).attr('data-area');
    var idx=Math.floor(Math.random()*2);
    getPage(idx,areaid);
    return false;
});


//点击回到首页

$('#topTitle i').on("click", function () {

    location.href = "../../index.html";

});