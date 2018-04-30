define(['jquery','template'],function ($,template) {
    $.ajax({
        url:"http://139.199.192.48:9090/api/getindexmenu",
        type:"get",
        success:function (info) {
            var htmlStr=template("nav",info);
            $(".nav").html(htmlStr);
             var all=$(".nav").children("a");
        }
    });
    
})