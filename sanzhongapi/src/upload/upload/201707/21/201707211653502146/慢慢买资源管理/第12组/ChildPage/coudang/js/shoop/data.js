

$(function(){
     
//   这是默认的页面
 
 getShoop();
      function getShoop(){
      $.ajax({
          url:'http://139.199.192.48:9090/api/getgsproduct?shopid=0&areaid=0',
          dataType:'json',
          success:function(data){
            //    console.log(data);
        
               var temp = template('shopListTemp',data);
            //    console.log(temp);
               $('#buy_main').html(temp);
          }
      });
}
      

// 获取凑单品的店铺的信息 并渲染到店铺的下拉列表
    shop();
function shop(){
       $.ajax({
           url:'http://139.199.192.48:9090/api/getgsshop',
           success:function(data){
            // console.log(data);
            var dataObj = template('shopTemp',data);
            // console.log(dataObj);
             $('.jd_ul').html(dataObj);
           }
       });
}


// 获取凑单品的区域的店铺信息，并渲染到店铺的下拉列表
             area();
    function area(){
        $.ajax({
            url:'http://139.199.192.48:9090/api/getgsshoparea',
            success:function(logo){
                //  console.log(logo);   
            var rpg = template('whereList',logo); 
            // console.log(rpg);    
            $('.where_ul').html(rpg);
            }
        });
    }



// 点击tab下拉框时，点击哪一个，哪一个的下标索引就会传入到shopid店铺id  (Number)
//  和areaid : 区域id  (Number)中
//  传入的数值会以参数的形式添加到请求地址中
// 渲染页面
    
 // 获取店铺的id
                  var obj={};
              $('.jd_ul').on('click','li',function(){
                      var one = $(this).attr('data-type');   
                   if(one = 0){
                         
                   }

                     });





                  

                
                 
          
        //  获取区域id
                    $('.where_ul').on('click','li',function(){
                       var two = $(this).attr('data-type');
                        console.log(two);
                       
                   });



          








          function shoopListfun(one,two){

            $.ajax({
                url:"'http://139.199.192.48:9090/api/getgsproduct'+'?'+'shopid='+one+'&'+'areaid='+two",
                success:function(data){
                      console.log(11223);
                      console.log(data);
                }
            });
          }















});