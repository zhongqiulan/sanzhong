var id = location.search;
id=id.slice(1);
var arr = id.split("=");
var o = {};
o[arr[0]]=Number(arr[1]);

console.log(o);

$.ajax({
    url:"http://139.199.192.48:9090/api/getmoneyctrlproduct",
    type:"get",
    dataType:"JSON",
    data:o,
    success:function(data){
        // console.log(data)
        var htmlStr = template("product_tpl",data.result[0]);
        $(".product").html(htmlStr)
        console.log(data.result[0].productComment)
    }
})