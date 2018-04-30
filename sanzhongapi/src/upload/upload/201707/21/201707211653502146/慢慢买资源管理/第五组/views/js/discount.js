
var productid = location.search.slice(1);
var temp = productid.split("=");
productid = temp[1];
//发送请求，渲染页面
$.ajax({
	url : "http://139.199.192.48:9090/api/getmoneyctrlproduct",
	type : "get",
	data : {productid :productid},
	success : function(info){
		console.log(info);
		var htmlStr = template("dis_tpl",info);
		$(".content").html(htmlStr);
		$("title").text(info.result[0].productName);
		$("#nav_tit").text(info.result[0].productName);
	}
})



//点击回到顶部，注册事件
$(".btnReturn").on("click",function(){
	$(document).scrollTop(0);  
})