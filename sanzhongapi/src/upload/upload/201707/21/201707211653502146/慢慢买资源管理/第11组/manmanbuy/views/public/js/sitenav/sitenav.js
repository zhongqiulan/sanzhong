define(["jquery","template","zepto","event","touch","bootstrap"],function($,template,$1,event,touch){
   $.ajax({
       url:"http://157.122.54.189:9090/api/getsitenav",
       type:"get",
       success:function(data){
           var htmlStr=template("sitenav_tmp",data);
           console.log(data);
           $(".body").html(htmlStr);
       }
   })
    $1("header .arrow").tap(function(){
       location.href="/";
   })

})