define(['jquery','template','utils'],function ($,template,obj) {
    var id=obj.queryString().produceId;
    $.ajax({
        url:"http://139.199.192.48:9090/api/getmoneyctrl",
        type:"get",
        success:function (info) {
            var res=info.result;
            for(var i=0;i<res.length;i++){
                // console.log(res[i].productId);
                if(res[i].productId==id){
                var htmlStr=template("detail",res[i]);
                 $(".detail").html(htmlStr);
                }
            }
        }
    })
})