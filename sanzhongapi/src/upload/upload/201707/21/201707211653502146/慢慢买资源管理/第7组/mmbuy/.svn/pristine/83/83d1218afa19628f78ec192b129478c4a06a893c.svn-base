

var page = queryString().brandtitleid;
$.ajax({
    url: 'http://139.199.192.48:9090/api/getbrandproductlist',
    type: 'get',
    data: {
        brandtitleid: page,
    },
    success: function (info) {
        console.log(info)
        var nameStr = template('tpl_branNam',info);
        $(".branName").html(nameStr);
        var str = template('tpl_sales',info);
        $(".show ul").html(str)
    }
})

 $(".show  ul").on("click","#shou_produt",function(){
     var productid = $(this).attr("data-produ") ;
     var  numbe = $(this).attr("data-index")
     location.href = 'comment.html?productid='+productid +"&numbe=" +numbe +"&page="+page ;
 })