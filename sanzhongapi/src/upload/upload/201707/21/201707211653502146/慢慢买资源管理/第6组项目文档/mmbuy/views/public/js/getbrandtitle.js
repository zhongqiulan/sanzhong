

    
    //发送ajax请求渲染热门品牌页
    
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getbrandtitle',
        type: 'get',
        success: function (data) {
            var htmlStr = template('tp_br_tpl', data);
            // console.log(htmlStr)
            $('.introduce_parten').html(htmlStr)
        }
    });
  
     //点击的时候.跳转到对应的品牌页面
    //  $('.introduce_parten').on('click','#jump',function(){
    //      var id=$(this).attr('data-id')
    //        console.log(id)
    //     // //    console.log(123)
    //     //  location.href="getbrand.html?brandTitleId="+id
    //        $.ajax({
    //            url:'http://139.199.192.48:9090/api/getbrand?brandTitleId='+id,
    //            type:'get',
    //            data:{
    //                brandTitleId:id
    //            },
               
    //            success:function(data){
    //                        console.log(data)
    //                         var htmlStr=template('tp_rec_tpl',data.result);
    //                         $('.recommont_introduce').html(htmlStr)
                            
    //            }
    //        })
           
    //        return false;
        
    //  })
      


  