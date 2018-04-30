~function(){
    var id=o.queryString().brandTitleId;
    var title=o.queryString().title;
    title=decodeURI(title)
    $(".list_title").html(title+"哪个牌子好")
    document.title=title+"什么品牌好，"+title+"十大品牌排行榜"
    // 十大品牌排行
    $.ajax({
        url:config.getUrl('/api/getbrand'),
        data:{
            brandtitleid:id
        },
        type:"get",
        success:function(data){
            var tplStr=template("ten_tpl",data);
            $(".ten").html(tplStr);
            $(".ten h3").html(title+"十大品牌");
        }
    })

// 品牌销量排行
    $.ajax({
        url:config.getUrl('/api/getbrandproductlist'),
        type:'get',
        data:{
            brandtitleid:id,
            // pagesize :4
        },
        success:function(data){
            var tplStr=template("sale_tpl",data);
            $(".sale").html(tplStr);
            $(".sale h3").html(title+"产品销量排行");
        }
    })
    // 最新评论
    $.ajax({
    url: "http://139.199.192.48:9090/api/getproductcom",
    type: "get",
    dataType: "json",
    data: {
        productid: 1
    },
    success: function(info){
        console.log(info);
        var htmlStr = template("koubei_tpl",info);
        $(".comment").html(htmlStr);
    }
})
}()