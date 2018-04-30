
   var currentPage = 1;
    var totalPage;

function getUrl(num){
    currentPage = num || 1;
    var url=config.getUrl('/api/getmoneyctrl');
    $.ajax({
        url:url,
        dataType:'json',
        type:'get',
        data:{
          pageid:currentPage,
        },
        success:function(data){
        //    console.log(data)
          var str=template('haitao-content-tpl',data);
           $('.ht-content').html(str); 

           //总页数=总条数/当前页显示的条数
           totalPage=Math.ceil(data.totalCount/data.pagesize);
           var tex='';
           for(var i=1;i <= totalPage; i++){
               if(i==currentPage){
                   tex +='<option value='+i+' selected>'+ i +'/' + totalPage +'</option>';
               }else{
                   tex +='<option value='+i+' >'+ i +'/' + totalPage +'</option>'; 
               }
                 
           };
           $('.form-control').html(tex) //选项框的数据
            
        }
    })

}

getUrl()

// 上一页
$(".previous").on('click',function(){
    // alert('上');
    if(currentPage > 1){ 
      currentPage--;
      $('.form-control option').val(currentPage)
    }else{
        alert('已经是第一页了');
         return false;
    }
     getUrl(currentPage);
})
                             
// 下一页
$(".next").on('click',function(){
    // alert('下')
    if(currentPage >= totalPage){
        alert('已经是最后一页了')
        return false;
    }else{
        currentPage++;
        $('.form-control option').val(currentPage)
    }
     getUrl(currentPage);
})

//选中
$('.form-control').change(function(){
    // alert(12)
    var num=$(this).val()
    // alert(num)
       getUrl(num);
})





// 点击返回顶部
$('.backft').on('click',function(){
   $(" body").animate({scrollTop:0},500)
})



$('.ht-content').on('click','.media',function(){
    //   alert(12)
    var id=$(this).attr('data-id')
    location.href='./moneyctrlList.html?productid='+id;
})


