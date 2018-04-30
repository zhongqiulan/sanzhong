// author:Z
// day:2017-07-18

$(function(){
    $.ajax({
        url:'http://139.199.192.48:9090/api/getcoupon',
        success:function(data){
            // console.log(data);
            var htmlStr = template("kdj_tpl",data);
            // console.log(htmlStr);
            $("#nav_content").html(htmlStr);
        }
    });  
});

// $('.glyphicon').on('click',function(){
//     history.back();
// })

