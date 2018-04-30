$(function () {
    // user
    var user_Boolean = false;
    var password_Boolean = false;
    var emaile_Boolean = false;
    var Mobile_Boolean = false;
    $('#userName').blur(function(){
  if ((/^[a-z0-9_-]{4,8}$/).test($("#userName").val())){
    $('.user_hint').html("该昵称可以使用").css("color","green");
    user_Boolean = true;
  }else {
    $('.user_hint').html("您输入的信息有误,请重新输入").css("color","red");
    user_Boolean = false;
  }
});
// password
$('#userPass').blur(function(){
  if ((/^[a-z0-9_-]{6,16}$/).test($("#userPass").val())){
    $('.password_hint').html("可以使用").css("color","green");
    password_Boolean = true;
  }else {
    $('.password_hint').html("您输入的信息有误,请重新输入").css("color","red");
    password_Boolean = false;
  }
});
// Email
$('#email').blur(function(){
  if ((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($("#email").val())){
    $('.email_hint').html("可以使用").css("color","green");
    emaile_Boolean = true;
  }else {
    $('.email_hint').html("您输入的信息有误,请重新输入").css("color","red");
    emaile_Boolean = false;
  }
});


// phone
$('#phone').blur(function(){
  if ((/^1[34578]\d{9}$/).test($("#phone").val())){
    $('.mobile_hint').html("可以使用").css("color","green");
    Mobile_Boolean = true;
  }else {
    $('.mobile_hint').html("您输入的信息有误,请重新输入").css("color","red");
    Mobile_Boolean = false;
  }
});


// click
$('#reg_button').click(function(){  
  if(user_Boolean && password_Boolea && emaile_Boolean && Mobile_Boolean == true){
    alert("注册成功");
  }else {
    alert("请完善信息");
    return false;
  }
  
});
// 生成随机数列表
var arr=[4396,4458,9795,2636,5566,8521,4554,3349,3799,6943,4166,8766,9984,9438,1245,5213];
$('.random').on('click',function(){
var index = Math.floor((Math.random()*arr.length)); 
    // alert(arr[index]); 
    $('.random').html(arr[index]);

})
// 点击获取验证码
$('.obtain').on('click',function(){
    $('.obtain').html('短信发送中...');
    $('.verify>i').css('opacity','1').css('transition-delay','2s');
    // console.log($('.verify>i'));  
    if($('.verify>i').html=438){
        setTimeout(function(){
            $('.obtain').html('获取成功');
        },2000) 
    }
})
});