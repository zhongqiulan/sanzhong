define([
    'jquery',
    'template'
], function($, template) {
    
   $.ajax({
       url:'http://157.122.54.189:9090/api/getcoupon',
       type:'get',
       success:function(rel){
        //    console.log(rel);
           var temp=template('info',rel);
           $('.content').html(temp);
       }
   })

   $('.content').on('click','.ken',function(){
       var id=$(this).attr('data-id');
       var name=$(this).attr('data-name');
        location.href='/coupon/quan?id='+id+'&name='+name;
       
   })

    $('.goBack').on('click',function(){
        location.href='/';
    })
    
});