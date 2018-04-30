	$(function() {

		// $('#head').on('click','.glyphicon' ,function(){
		// 	location.href='../../index.html';
		// })
	    // 请求tab栏数据
	    $.ajax({
	        url: 'http://139.199.192.48:9090/api/getbaicaijiatitle',
	        // url: 'http://192.168.50.2:9090/api/getbaicaijiatitle',
	        success: function(data) {
	            // console.log(data);
	            var htmlStr = template('tab_tpl', data);
	            // console.log(htmlStr);
	            $('#my_Scroll').html(htmlStr);


	            // 搜索功能显示与隐藏
	            $(".iconfont").on("click", function() {
	                $(".cut").toggle();
	            })



	            // 动态获取到所有li的宽度的和,让后再动态设置给ul
	            var sunWidth = 0
	            $('#tab li').each(function(index, element) {
	                // sunWidth +=	$(element).width();
	                sunWidth += $(element).outerWidth(true);
	            })


	            // 設置ul的寬度
	            $('#tab').css({
	                "width": sunWidth + "px"
	            })

	            //tab栏滑动
	            var Scroll = new iScroll('my_Scroll', {
	                vScroll: false,
	                hScrollbar: false
	            });


	            getTabDiv(0);

	            //tab 切换功能
	            var mains = $("#content").children(); //选取id下面的所有子元素
	            // console.log(mains);
	            $('#tab li:first').addClass('reveal'); //给第一个子元素添加类名
	            $('#content div:first').addClass('selected');
	            $('#my_Scroll').on('click', '#tab li', function() { //点击事件
	                $(".reveal").removeClass("reveal"); //移除类名
	                $(this).addClass("reveal"); //为当前点击的添加类
	                var index = $(this).index();
	                $(".selected").removeClass("selected");
	                mains.eq(index).addClass("selected");
	                // console.log(mains);

	                // console.log($(this).data().id);

	                getTabDiv($(this).data().id);

	            })
	        }
	    })

	    function getTabDiv(id) {
	        $.ajax({
	            // url:'http://192.168.50.2:9090/api/getbaicaijiaproduct?titleid='+id,
	            url: 'http://139.199.192.48:9090/api/getbaicaijiaproduct?titleid=' + id,
	            type: "get",
	            success: function(data) {
	                // console.log(data);
	                var htmlStr = template('tab_cont_tpl', data);
	                // console.log(htmlStr)
	                $('#content').html(htmlStr);
	            }
	        })
	    }

	    //点击tab切换标题
	    $('#my_Scroll').on('click', 'li', function() {
	        var id = $(this).attr('data-id');
	        // console.log(id);
	        $.ajax({
	            url: 'http://139.199.192.48:9090/api/getbaicaijiatitle',
	            // dataType:'JOSN',
	            // type:'get',
	            success: function(data) {
	                if (id == 0) {
	                    var htmlStr = template('title_tpl', {
	                        title: '淘宝内部券'
	                    });
	                } else if (id == 1) {
	                    var htmlStr = template('title_tpl', {
	                        title: '一小时热销'
	                    });
	                } else {
	                    var htmlStr = template('title_tpl', data.result[id]);
	                    console.log(htmlStr);
	                }
	                $('.headLogo').html(htmlStr);
	            }
	        })
	    })



	});