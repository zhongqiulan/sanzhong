define(['jquery','cookie'], function($,cookie) {
  //  $(".login_span").on("click",function(){
  //       $(".login_foot").fadeOut(500);
  //   });
    
  //   $(".uname").on("blur",function(){
  //     var str = $(".uname").val();
  //     var ret = /^[\u4e00-\u9fa5]{2,8}$/;
  //     if(ret.test(str)){
  //       $(".input_div").css("display",'block');
  //       $(".input_div").addClass("input_div_green")
  //       $(".input_div").removeClass("input_div_red")
  //       $(".input_div").html("验证成功,请输入密码");
  //       setTimeout(function(){
  //         $(".input_div").css("display",'none');
  //       },2000)
  //     }else{
  //       $(".input_div").css("display",'block');
  //       $(".input_div").addClass("input_div_red")
  //       $(".input_div").removeClass("input_div_green")
  //       $(".input_div").html("该ID已存在,请重新输入");
  //       setTimeout(function(){
  //         $(".input_div").css("display",'none');
  //       },2000)
  //     }
  //   });
    //点击登陆
    $(".login_uinp").on("click",function () {
      var dataObj=$.cookie("logindata");
      var data=JSON.parse(dataObj);
           console.log(data);
       if($(".uname").val()==data[0].value){
        alert("登陆成功");
        location.href="/index";
      }
      return false;
    })

});