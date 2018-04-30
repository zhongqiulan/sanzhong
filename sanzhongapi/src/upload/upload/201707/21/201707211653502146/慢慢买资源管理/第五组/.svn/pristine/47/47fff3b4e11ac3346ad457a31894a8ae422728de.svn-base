
$.ajax({
    url:"http://139.199.192.48:9090/api/getcategorytitle",
    type: "get",
    success : function(info){
        $(".btn-primary").attr("data-id",info.titleId)
        var htmlStr = template("parity_search_tpl",info);
        
        $(".parity_search").html(htmlStr);
       
    }
})
$(".parity_search").on("click",".btn-primary",function(){
      
        var id = $(this).attr("data-id");
        var _this = $(this);
        $.ajax({
            url : "http://139.199.192.48:9090/api/getcategory",
            type :"get",
            data : {
                titleid: id
            },
            success : function(info){
                var htmlStr = template("parity_list_tpl",info);
                $("#list"+id).html(htmlStr);
                _this.children().children("span").toggleClass("glyphicon-menu-down glyphicon-menu-up")
            }
        })
       /* $(".parity_toggle").slideToggle();*/
})