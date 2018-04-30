
var options = $("select").children();
var zlx_index = 1;
// 请求页面的函数
function getPage(num){
		$.ajax({
		url: "http://157.122.54.189:9090/api/getmoneyctrl",
		type: "get",
		data: {
			pageid: num,
		},
		success: function (info) {
			console.log(info);
			var htmlStr = template("con_tpl", info);
			$(".ul_content").html(htmlStr);
		}
	})
}

getPage(zlx_index);

//点击上一页，注册事件
$(".btnPre").on("click",function(){
		zlx_index--;
	if(zlx_index>=1){
		getPage(zlx_index);
		for(var i=0;i<options.length;i++){
			if($(options[i]).val()==zlx_index){
				$(options[i]).prop("selected",true);
			}
		}
	}else{
		zlx_index=1;
		alert("已经是第一页了");
	}
})

//点击下一页，注册事件
$(".btnNext").on("click",function(){
	zlx_index++;
	if(zlx_index>15){
		zlx_index=15;
		alert("已经是最后一页了");
	}else{
		getPage(zlx_index);
		for(var i=0;i<options.length;i++){
			if($(options[i]).val()==zlx_index){
				$(options[i]).prop("selected",true);
			}
		}
	}
})

//select选中注册事件
$("select").change(function(){
	zlx_index = $("select option:selected").val();
	getPage(zlx_index);
})

//点击回到顶部，注册事件
$(".btnReturn").on("click",function(){
	$(document).scrollTop(0);  
})





