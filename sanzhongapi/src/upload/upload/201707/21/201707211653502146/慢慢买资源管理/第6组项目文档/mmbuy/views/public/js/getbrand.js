 //点击的时候.跳转到对应的品牌页面
    function query(url) {
    var obj = {};
    var str=url.split('?')[1];
    var arr=str.split('=');
    obj[arr[0]]=arr[1]?arr[1]:"";
    return obj;
}
    var id = query(location.href).brandTitleId;
                console.log(id)
        // //    console.log(123)
        //  location.href="getbrand.html?brandTitleId="+id
           $.ajax({
               url:'http://139.199.192.48:9090/api/getbrand?brandTitleId='+id,
               type:'get',
               data:{
                   brandTitleId:id
               },
               success:function(data){
                           console.log(data)
                            var htmlStr=template('tp_rec_tpl',data.result);
                            $('.recommont_introduce').html(htmlStr)
                            
               }
           })
           
        
