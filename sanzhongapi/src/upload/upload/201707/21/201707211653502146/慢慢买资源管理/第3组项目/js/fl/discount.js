
//获取id
var search=location.search;
var arr=search.split("=");
var id=arr[1];
console.log(id);
//渲染数据
$.ajax({
    url:"http://139.199.192.48:9090/api/getmoneyctrlproduct",
    type:"get",
    data:{
        productid :id
    },
    success:function(info) {
        var str=template("containerTemplate",info.result[0]);
        $("#container").html(str);1
    }
})
	$('.glyphicon').on('click',function(){
            history.back();
    })
	