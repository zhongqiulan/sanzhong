
$.ajax({
    url: config.getUrl("api/getgsshop"),
    success: function (info) {
        // console.log(info);
        var htmlStr = template("shop_tpl", info);
        $(".shop_menu").html(htmlStr);
    }
})

$.ajax({
    url: config.getUrl("api/getgsshoparea"),
    success: function (info) {
        // console.log(info);
        var htmlStr = template("area_tpl", info);
        $(".area_menu").html(htmlStr);
    }
})

//首次进来页面渲染模板
var obj={"shopid":0,"areaid":0};
getProduct(obj.shopid, obj.areaid);

//商城
$(".shop_menu").on("click", "li", function () {
    $(".shop_menu span").removeClass("glyphicon-ok");
    $(this).children().children().addClass("glyphicon-ok");
    var info=$(this).text()+'<span class="caret">'+'</span>';
    $("#dropdownMenu1").html(info);
    obj.shopid=$(this).attr("data-shopid");
    getProduct(obj.shopid, obj.areaid);
    console.log(obj);
})

//地区
$(".area_menu").on("click", "li", function () {
    $(".area_menu span").removeClass("glyphicon-ok");
    $(this).children().children().addClass("glyphicon-ok");
    var info=$(this).text().slice(0,2)+'<span class="caret">'+'</span>';
    $("#dropdownMenu2").html(info);
    obj.areaid=$(this).attr("data-areaid");
    getProduct(obj.shopid, obj.areaid);
    console.log(obj);
})

//默认渲染商品列表
function getProduct(shopId, areaId) {
    $.ajax({
        url: config.getUrl("api/getgsproduct"),
        data: {
            shopid: shopId,
            areaid: areaId
        },
        success: function (info) {
            console.log(info);
            var htmlStr = template("product_tpl", info);
            $(".productList").html(htmlStr);
        }
    })
}


