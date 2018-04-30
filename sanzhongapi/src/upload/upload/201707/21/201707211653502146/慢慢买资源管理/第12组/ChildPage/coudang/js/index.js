




// tab栏下拉框京东
$(function () {
    // 获取要点击的div
    var divs = $('.container > .jds >.jds_l');

    //    获取面板
    var uls = $('.container > .jds > ul');
    console.log(uls);

    for (var i = 0; i < divs.length; i++) {
        var $get = $(divs[i]);
        //  添加点击事件
        //  console.log('------------点击啦---------')
        // console.log($get);
        $get.on('click', function () {
           var  $this = $(this);

           var href =  $(this).attr('data-type'); 
          
            if( $this.next().hasClass('show')){
                    $('.show').removeClass('show');
                    return false;
            }
             getUL(href);  
        });
    }
    //    点击事件执行程序
    function getUL(o) { 
         if($('.'+o).className != '.show'){
               $('.show').removeClass('show');
            $('.'+o).addClass('show');
         }
    }


    // 下拉框里的li
    // 点击li时，右侧出现一个图标
    // 点击li时，页面跳转
    uls.on('click',function(){
         
    })





    // tab栏滚动
     var tab = $('.container');
     function getScrool(){
          return{
              top: document.body.scrollTop,
             
              left:document.body.scrollLeft
          };

     }
    
    //    获取skiphop_tap顶部的高度
           var ski = $('#skiphop_tap');
        //   获取container tab栏的高度
           var tab = $('.container');

        //    滚动出去的距离
        var scrool = getScrool().top;
        console.log(scrool);



});

