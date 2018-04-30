define(['jquery', 'template', 'utils'], function ($, template, obj) {
    var categoryid = obj.queryString().categoryId; //商品id
    var category = decodeURIComponent(obj.queryString().category); //获取商品名
    console.log(category);
    var id = 1;
    var idzong = 1;
    goods_listAjax();

    //发送ajax请求
    function goods_listAjax() {
        $.ajax({
            url: 'http://139.199.192.48:9090/api/getproductlist',
            // url:'http://192.168.50.2:9090/api/getproductlist',
            data: {
                categoryid: categoryid,
                pageid: id
            },
            success: function (info) {
                
                 idzong = Math.ceil(info.totalCount / info.pagesize);

                // info.pageid = idzong;
                
                // 这里是渲染select 跳转页面标签
                var html = '';
                for (var i = 1; i <= idzong; i++) {
                    if (i == id) {
                        html += ' <option  selected value=' + i + '>' + i + '/' + idzong + '</option>';
                    } else {
                        html += ' <option  value=' + i + '>' + i + '/' + idzong + '</option>';
                    }
                }
                $("#save_select").html(html);
                //    动画的方式跳转到顶部
                $("body", "html").animate({
                    "scrollTop": 0
                }, 30);


                //渲染导航路径
                for (var i = 0; i < info.result.length; i++) {
                    info.result[i].category = category;
                }

                var navStr = template('goods_navs_tpl', { category: category });
                $('.goods_navs').html(navStr);
                console.log(info);

                //渲染商品列表
                var str = template('goods_list_tpl', info);
                $('.goods_list').html(str);
            }

        })
    }


    //    点击下一页的功能
    $(".save_button_right").on("touchstart", function () {
        if (id >= idzong) {
            id = idzong;
            alert("正在开发更多数据");
            return;
            
        }
        id++;
        goods_listAjax();
        
    })

    // 点击上一页功能
    $(".save_button_left").on("touchstart", function () {
        id--;
        goods_listAjax();
        if (id <= 0) {
            id = 1;
            alert("已经是第一页了");
        }
    })

    //点击选择页面
    $('#save_select').on('change', function () {
        var options = $('#save_select option:selected');
        var value = options.val();
        // console.log(value);
        id = value;
        goods_listAjax();
    })
})