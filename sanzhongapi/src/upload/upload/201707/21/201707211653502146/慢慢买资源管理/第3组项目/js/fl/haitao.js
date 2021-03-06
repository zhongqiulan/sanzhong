
//index表示当前页数,在渲染页面和页面切换中都要用
	var index=1;
	var count=0;
	//渲染页面
	function render(index) {
		$.ajax({
			url:"http://139.199.192.48:9090/api/getmoneyctrl",
			dataType:"json",
			type:"get",
			data:{
				pageid:index
			},
			success:function(info) {
				console.log(info);
				var str=template("listTemplate",info);
				$("#itemList").html(str);
				count=info.totalCount;
				renderOption(count);
				$('#selectPages option').eq(index-1).prop("selected","selected");
			}
		})
	}

	//渲染option选项
	function renderOption(count) {
		var num=Math.floor(count/10)+1;
		var strOp=``;
		for(var i=1;i<=num;i++) {
			strOp+=`<option value=${i}>第${i}页</option>`;
		}
		$('#selectPages').html(strOp)
	}

	//页面加载渲染第一页的数据
	render(index);

	//上一页
	$("#nextPage").on("click",function(){
		if(index>=count) {
			return ;
		}
		index++;
		render(index);
		return false;
	})

	//上一页
	$("#prevPage").on("click",function() {
		if(index<=1) {
			return ;
		};
		index--;
		render(index);
		return false;
	})

	//option用onchange来注册事件
	$("#selectPages").on("change",function() {
		var num=$("#selectPages option:selected").val();
		index=num;
		render(num);
	})
	
	$('.glyphicon').on('click',function(){
            history.back();
    })
	