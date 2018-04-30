/**
 * 2017-7-18
 * 渲染国内折扣网页面
 */

$(function(){
    var url = agio_config.getUrl('api/getinlanddiscount');
    //console.log(url);
    $.ajax({
        url:url,
        dataType:'JSON',
        type:'get',
        success:function(data){
             var htmlStr = template('agio_tpl',data);
             $('.agio-content').html(htmlStr);
        }
    });
    /*var falg = true ;
     $(window).on('scroll',function(){
              //console.log($(window).scrollTop());
              var scrollTop = $(window).scrollTop();
              if(scrollTop >= 1000&&falg){
                  //console.log(123);
                  falg=false;

            var url = agio_config.getUrl('api/getinlanddiscount');    
                $.ajax({
                 url:url,
                 dataType:'JSON',
                 type:'get',
             success:function(data){
             var htmlStr = template('agio_tpl',data);
             $('.agio-content').html(htmlStr);
        }
      });
    }       
  })*/
})