// 导航
        $.ajax({
        // url:"http://139.199.192.48:9090/api/getbaicaijiatitle/",
        url:'http://192.168.50.2:9090/api/getbaicaijiatitle',
        dataType:'json',
        success:function(data){
            var htmlStr=template("tpl_nav",data);
            $('.nav-tabs').html(htmlStr);
        }
    })

// 加载商品列表图

$('.nav-tabs').on('click','li.btnSave',function(){
   var index=$(this).attr('index');
   getId(index);  
});
function getId(index){
    $.ajax({
        // url:'http://139.199.192.48:9090/api/getbaicaijiaproduct',
        url:'http://192.168.50.2:9090/api/getbaicaijiaproduct',
        dataType:'json',
        data:{
            titleid:index
        },
        success:function(data){
            var htmlStr=template('tpl_media',data);
            $('.shopList').html(htmlStr);
        }
    })
   }
getId(0);


   