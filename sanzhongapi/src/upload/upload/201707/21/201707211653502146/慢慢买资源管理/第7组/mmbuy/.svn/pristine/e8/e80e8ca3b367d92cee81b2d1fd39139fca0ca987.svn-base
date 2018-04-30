
$.ajax({
    url:"http://139.199.192.48:9090/api/getinlanddiscount",
    dataType:"json",
    type:"get",
    success:function(data){
        var htmls = template("com_list",data);
        $(".row").html(htmls); 
    }
})
