// 喧染页面；
    $.ajax({
        url:'http://139.199.192.48:9090/api/getcoupon',
        type:'get',
        success:function(info){
          console.log(info);
          var htmlStr=template('myTemp',info);
        //  $(".content").html(htmlStr);
         var content=document.getElementById('content');
         content.innerHTML=htmlStr;
        }
    });
   
  //  //   事件委托注册；
  //    $('#content').on('click','a',function(){
  //     var id = $(this).attr('data-id');
  //     console.log(id);
  //     $.ajax({
  //         url:'http://139.199.192.48:9090/api/getcouponproduct',
  //         type:'get',
  //         data:{couponid:id},
  //         success:function(info){
  //           //   console.log(info);
  //           location.href='../../pages/coupon/couponlist.html' ;
  //         }
  //     })
  //    });

