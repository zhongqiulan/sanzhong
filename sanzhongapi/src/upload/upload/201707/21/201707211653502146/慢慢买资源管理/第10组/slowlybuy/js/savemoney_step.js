$(function(){
    var id = location.search.split('=')[1];
      $.ajax({
         url:'http://139.199.192.48:9090/api/getmoneyctrlproduct',
         type:'get',
         data:{
           productid:id
         },
         success:function(info){
            //  console.log(info);         
             var htmlStr =template('media_tpl',info);
             $('.main').html(htmlStr);     
             var comStr =template('comment_tpl',info);
             $('.comment').html(comStr);
             $('.htlist-jump .name-jump').text(info.result[0].productName)
         }
     })
})