var id='';



$.ajax({
  url: 'http://157.122.54.189:9090/api/getcategorytitle',
  type: 'get',
  success: function (info) {
    var htmlStr = template('listclass_tpl', info);
    $('#mmbuy_list').html(htmlStr);
  },
});

//返回顶部
$('.f_top').animate({scrollTop:0},0);
//关闭小广告
$('.close_btn').on('click',function(){
  // alert(12);
  $('#foot_promptly').css('display','none');
});

$('.a-close').on('click',function(){
  $('#Div1').css('display','none');
})



$('#mmbuy_list').on('click','.family_electric',function(){
  var id = $(this).attr('data-id');
  var _this=$(this);
 $.ajax({
  url: 'http://157.122.54.189:9090/api/getcategory',
  type: 'get',
  data:{
    titleid:Number(id),
  },
  success: function (info_2) {
    console.log(info_2);
    var htmlStr2 = template('info_tpl', info_2);
    $('#id'+id).html(htmlStr2);
     _this.children().children("span").toggleClass('glyphicon-menu-up glyphicon-menu-down');
    _this.parent().children(".collapse").removeClass("in");
  }
});

});