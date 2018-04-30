$(function(){
    var sid=0;
    var  eid=0;
    var lis = $(".tab_item");
    console.log(lis);
    // 下拉菜单的切换
    lis.on('click',function(){       
        // $('.active').removeClass("active");
        // $(this).addClass("active");
        $(this).toggleClass("active").siblings().removeClass('active');
        var index = $(this).index();
        // $('.on').removeClass('on');
        $(".popbox").eq(index).toggleClass("on").siblings().removeClass('on');
        // $(this).removeClass("hou");
        if(index==3){           
             $(this).toggleClass("hou").siblings().removeClass('hou');
            //  $(this).addClass(" hou");
        }       
    });
    // 点击popbox就会让其消失
//     $('.popbox').on('click',function(){
//         if($(this).hasClass('on')){
//             $('.on').removeClass("on");
//         }else{
//         }
//     })
    // 点击下拉菜单选项----商品店铺
    $('#num1').on('click',function(){
       
        $.ajax({
            url:'http://139.199.192.48:9090/api/getgsshop',
            // url:'http://192.168.50.2:9090/api/getgsshop',
            type:'get',
            datatype:'json',
            success:function(info){
                    console.log(info);
                    var htmlStr = template('dianpu',info);               
                    $('.shopname').html(htmlStr);              
            }
        })
    });
    // 商品区域
    $('#num2').on('click',function(){
      
        $.ajax({
            url:'http://139.199.192.48:9090/api/getgsshoparea',
            // url:'http://192.168.50.2:9090/api/getgsshoparea',
            
            type:'get',
            datatype:'json',
            success:function(info){
                 var htmlStr = template('quyu',info);                 
                 $('.areaName').html(htmlStr);
            }
        })
    });
    // 主要内容的渲染
   function render(sid,eid) {
        $.ajax({
        url:'http://139.199.192.48:9090/api/getgsproduct',
        // url:'http://192.168.50.2:9090/api/getgsproduct',
        type:'get',
        datatype:'json',
        data:{
            shopid:sid,
            areaid:eid
        },
        success:function(info){
            console.log(info)
            var htmlStr = template('contentZY',info);
            $('.product').html(htmlStr);
        }
    });
   }
   render(sid,eid);

   // 点击下拉选项让当前的li内容与点击内容一样
    $('.shopname').on('click','li',function(){
        var value = $(this).text();
        $('#num1 >a>span').text(value);
        $('.popbox').removeClass('on');
        sid=$(this).attr("data-id");
        render(sid,eid);
        

    });
    $('.areaName').on('click','li',function(){
        var value = $(this).text();
        var arr = value+"";  
        var mm=arr.substr(0,2);      
        $('#num2 >a>span').text(mm);
        $('.popbox').removeClass('on');
        eid=$(this).attr("data-id");
        console.log(eid);
        render(sid,eid);
    });
    // 头部的返回按钮
    var fanhui = $('.view .header .head_left a');
    console.log(fanhui)
    fanhui.on('click',function(){
        console.log('返回');
        location.href = 'couyixia.html';
    })
});

















/*************************************************/ 
// $(function(){
//     var lis = $(".tab_item");
//     console.log(lis);
//     // 下拉菜单的切换
//     lis.on('click',function(){       
//         $('.active').removeClass("active");
//         $('.hou').removeClass("hou");
//         $(this).addClass("active");
//         var index = $(this).index();
//         $('.on').removeClass('on');
//         $(".popbox").eq(index).addClass("on");
//         if(index==3){           
//             // $(".popbox").eq(index).addClass("on");
//             $(this).addClass("active hou");
//        }else{
            
//        }      
//     });
//     // 点击popbox就会让其消失
//     $('.popbox').on('click',function(){
//         if($(this).hasClass('on')){
//             $('.on').removeClass("on");
//            lis.removeClass("active");
//            lis.removeClass("hou");
//        } 
//     });
    
// })
/**********************************************************/ 
// $(function(){
//     var lis = $(".tab_item");

//     // 下拉菜单的切换
//     if($('.popbox').hasClass('on')){
//         lis.on('click',function(){
//            $('.popbox').removeClass('on');
//         })
//     }else{
//         lis.on('click',function(){       
//             $('.active').removeClass("active");
//             $('.hou').removeClass("hou");
//             $(this).addClass("active");
//             var index = $(this).index();
//             $('.on').removeClass('on');
//             $(".popbox").eq(index).addClass("on");
//             if(index==3){           
//                 // $(".popbox").eq(index).addClass("on");
//                 $(this).addClass("active hou");
//             }else{
                    
//             }      
//         });
//         // 点击popbox就会让其消失
//         $('.popbox').on('click',function(){
//             if($(this).hasClass('on')){
//                 $('.on').removeClass("on");
//             lis.removeClass("active");
//             lis.removeClass("hou");
//         } 
//         });
//     }
    
// })
