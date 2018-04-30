 
//  var url = config.getUrl("/api/getbrandtitle");
 $.ajax({
     url:"http://139.199.192.48:9090/api/getbrandtitle",
     type:"get",
     dataType:"JSON",
     success:function(data){
            console.log(data);
            var htmlStr = template("host_tpl",data);
            console.log(htmlStr);
            $(".hot ul").html(htmlStr)
         
     }
 })



 