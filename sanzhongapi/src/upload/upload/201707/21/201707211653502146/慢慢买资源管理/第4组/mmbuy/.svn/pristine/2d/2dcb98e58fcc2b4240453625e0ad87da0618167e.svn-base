$(function(){
   getDisList();
  function getDisList(){
  $.ajax({
 url:'http://139.199.192.48:9090/api/getinlanddiscount',
 datatype:'JSON',
 post:'get',
 success:function(data){
 // console.log(data);
  var htmlStr=template('dis_tpl',data); 
   $('#discount').html(htmlStr);
 }
})
  };
 $("#backTop").click(function(){
   $('body,html').animate({scrollTop:0},500);
    return false;
   }); 

var myDate = new Date();
var hour=myDate.getHours();
$('h1').html('国内折扣热度排行榜-'+hour+'点');
})
