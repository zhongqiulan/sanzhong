define(['jquery','template'],function ($,template) {
    // $(".nav a").eq(7).on("click",function () {
    //         console.log(123);
    // });
    $.ajax({
        url:"http://139.199.192.48:9090/api/getmoneyctrl",
        type:"get",
        success:function (info) {
            // console.log(info);
            var htmlStr=template("list",info);
            $(".list").html(htmlStr);
            var all=$(".nav").children("a");
            all.eq(7).nextAll().addClass("hidediv");
            all.eq(7).on("click",function () {
            all.eq(7).nextAll().toggleClass("hidediv");
            });
        //   var infoStr=JSON.stringify(info.result);
        // console.log(infoStr);
        //   $.cookie("info",infoStr);  
        }
    });
 
    // function sendInfo(params) {
    //     console.log(params);
    // }
})