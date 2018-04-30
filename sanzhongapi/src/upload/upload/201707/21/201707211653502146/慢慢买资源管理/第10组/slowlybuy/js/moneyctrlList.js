htlist()

function htlist(){
    var id=location.search.split('=')[1]
    $.ajax({
        url:'http://139.199.192.48:9090/api/getmoneyctrlproduct',
        type:'get',
        dataType:'Json',
        data:{
           productid:id,
        },
        success:function(data){
        //    console.log(data)
           var html=template('haitaolist_tpl',data.result[0])
           $('.list-content').html(html)
           $('.htlist-jump .list-name').text(data.result[0].productName)
        }
    })
}


// 点击返回顶部
$('.btnBack').on('click',function(){
   $(" body").animate({scrollTop:0},500)
})
