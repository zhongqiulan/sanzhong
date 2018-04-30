define(['jquery','cookie'],function ($,cookie) {
    // //判断用户名函数
    var usernameFlag=false;
    $(".uname").on("blur",function () {
        if($(this).val()==""){
               $(".unameinfo").text("用户名不能为空");
            $(".unameinfo").css({
                "color":"red"});
                usernameFlag=false;
        }
        else{
 
        if($(this).val().length>9){
            $(".unameinfo").text("用户名长度不能大于9");
            $(".unameinfo").css({
                "color":"red"});
                usernameFlag=false;
        }              
        else{
            var reUser=/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
            if(reUser.test($(this).val())){
                  $(".unameinfo").text("不能含有非法字符");
                   $(".unameinfo").css({
                "color":"red"});
                  return false
            }
            $(".unameinfo").text("用户名可用");
            $(".unameinfo").css({
                "color":"blue"});
                usernameFlag=true;
        }    
                }
    });
//判断密码函数
var userpwdFlag=false;
$(".upass").on("blur",function(){
    // console.log(123);
    if($(this).val().length<6||$(this).val().length>20){
         $(".pwdinfo").text("密码长度在6-20个字符之间");
            $(".pwdinfo").css({
                "color":"red"});
               userpwdFlag=false;
    }
            else{
                userpwdFlag=true;
            }
});
//判断手机号码函数
var usertelFlag=false;
$(".phone").on("blur",function () {
    if($(this).val().length!=11){

        $(".telinfo").text("长度不符");
         $(".telinfo").css({
                "color":"red"});
               usertelFlag=false;
    }
            else{
                 usertelFlag=true;
            }
})
//判断验证码
var dxFlag=false;
$(".duanxin").on("blur",function () {
    if($(this).val()!="9620"){
        console.log(123);
        dxFlag=false;
    }
    else{
        dxFlag=true;
    }
}) 

$(".login_uinp").on("click",function () {
    var formdata=$("form").serializeArray();
   var formStr=JSON.stringify(formdata);
    // console.log(formdata);
    $.cookie("logindata",formStr);
    alert("注册成功");
    location.href="/login";
    return false;
})


})
