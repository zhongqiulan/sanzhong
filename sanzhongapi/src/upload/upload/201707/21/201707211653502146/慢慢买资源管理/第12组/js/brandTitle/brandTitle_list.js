//getbrand
var brandTitleId = location.search.slice(1);
var brandArr = brandTitleId.split("&");
var o = {};
for (var i = 0; i < brandArr.length; i++) {
    var temp = brandArr[i].split("=");
    if (temp[0] == "brandtitleid") {
        o[temp[0]] = Number(temp[1]);
    } else {
        var brandTitle = temp[1];
        var bTitle = decodeURI(brandTitle).slice(0,-4);
        $('.content_header a').eq(2).html(bTitle+"哪个牌子好");
        $('.title').eq(0).html(bTitle+"哪个牌子好");
        $('.title').eq(1).html(bTitle+"产品销量排行榜");
        $('.title').eq(2).html(bTitle+"最新的用户评论");
        
    }

}

// -------------------------------------------十大品牌--------------------------------------------------
$.ajax({
    url: "http://139.199.192.48:9090/api/getbrand",
    type: "get",
    dataType: "JSON",
    data: o,
    success: function (data) {
        var htmlStr = template("best_tpl", data);
        $(".bestBrand").html(htmlStr)
    }
})


//getbrandproductlist
// o.pageSize = 9;
// -------------------------------------------销量排行--------------------------------------------------
$.ajax({
    url: "http://139.199.192.48:9090/api/getbrandproductlist",
    type: "get",
    dataType: "JSON",
    data: o,
    success: function (data) {
        console.log(data)
        var htmlStr = template("rankingList_tpl", data);
        $(".rankingList").html(htmlStr);

        //获取data-id属性
        var first = $("#rankingList")[0].children[0];
        var attr = $(first).attr("data-id");
        var pName = $(first).attr("data-name");
        var img = $(first).attr("data-img");

        // -------------------------------------------最新评论-------------------------------------------
        $.ajax({
            url: 'http://139.199.192.48:9090/api/getproductcom',
            type: "get",
            dataType: "JSON",
            data: {
                productid: attr
            },
            success: function (data) {
                // console.log(data);
                data.img = img;
                data.pName = pName;
                var htmlStr = template("comment_tpl", data);
                $(".comment").html(htmlStr)
            }
        })

    }
})

