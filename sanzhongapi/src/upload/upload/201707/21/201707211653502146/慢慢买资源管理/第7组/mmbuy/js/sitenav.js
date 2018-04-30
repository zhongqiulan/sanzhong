


$.ajax({
    url:"http://139.199.192.48:9090/api/getsitenav",
    dataType:"json",
    type:"get",
    success:function(data){
        var htmls = template("href_nav",data);
        $(".navs").html(htmls);
    }
})