$.ajax({
    url:"http://139.199.192.48:9090/api/getinlanddiscount",
    type:"get",
    dataType:"json",
    // data:{
    //     productid :1
    // },
    success:function(info){
        // console.log(info);
        var htmlStr = template("gnzk_tpl",info);
        // console.log(htmlStr);
        $("#list123").html(htmlStr);
    }
})