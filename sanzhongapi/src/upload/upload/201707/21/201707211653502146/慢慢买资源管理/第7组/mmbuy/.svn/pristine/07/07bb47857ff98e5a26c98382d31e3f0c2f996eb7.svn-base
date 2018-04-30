

    var productid  = queryString().productid ;
    var  numbe = queryString().numbe  ;
    var page = queryString().page

    $.ajax({
        url:'http://139.199.192.48:9090/api/getbrandproductlist',
        type:'get',
        data:{brandtitleid:page},
        success:function(info){
            console.log(info)
            $("#lastA").html(info.result[numbe].brandName)
            var expStr = template("tpl_exp",info.result[numbe]);
            $(".detail-head").html(expStr)  ;
        }
    })

    $.ajax({
        url:'http://139.199.192.48:9090/api/getproductcom',
        type:'get',
        data:{productid:productid },
        success:function(info){
            var str = template('tpl_comment',info) ;
            $(".content").html(str)
        }
    })
