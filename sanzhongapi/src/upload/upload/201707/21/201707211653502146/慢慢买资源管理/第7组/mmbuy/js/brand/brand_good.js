
var id = queryString().brandtitleid;
$.ajax({
    url: 'http://139.199.192.48:9090/api/getbrand',
    type: 'get',
    data: {
        brandtitleid: id
    },
    success: function (info) {
        var publi = '';
        if(info.result[0].brandName.length==4){
            publi = info.result[0].brandName.substr(-2)
        }else{
            publi = info.result[0].brandName.substr(-4)
        }
        var objStr = template("tpl_head",{brand:publi});
        $(".main  .head").html(objStr) ;


        var str = template('tpl_brand_good', info);
        $(".content  ul").html(str)


    }
})
$(".content  ul").on("click", "#brand_good", function () {
    var num = $(this).parent().attr("brandtitleid") ;
    location.href = 'sales.html?brandtitleid=' + num   ;
})