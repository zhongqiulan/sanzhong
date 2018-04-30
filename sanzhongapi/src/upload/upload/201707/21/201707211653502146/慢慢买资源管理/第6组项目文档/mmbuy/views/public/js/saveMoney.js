define(['jquery', 'template', 'bootstrap'], function ($, template, bt) {
    //   点击向左图标,跳转到index页面
    $('.save_header>i').on("click", function () {
        location.href = "/index"
    })

    var id = 1;
    save_ajax(); //先调用一次.渲染模版 

    function save_ajax() {
        $.ajax({
            url:'http://139.199.192.48:9090/api/getmoneyctrl',
            // url: 'http://192.168.50.2:9090/api/getmoneyctrl',
            data: {
                pageid: id
            },
            success: function (info) {
                // console.log(info);
                var idzong = Math.ceil(info.totalCount / info.pagesize);

                info.pageid = idzong;
                // console.log(info.pageid)
                var htmlStr = template('save_menu_tpl', info);
                $('#save_menu_ul').html(htmlStr);
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
                            
            }
        })
    } //封装ajax


    //    点击下一页的功能
    $(".save_button_right").on("touchstart", function () {
        id++;
        save_ajax();
        if (id >= idzong) {
            id = idzong;
            alert("正在开发更多数据");
        }
    })

    // 点击上一页功能
    $(".save_button_left").on("touchstart", function () {
        id--;
        save_ajax();
        if (id <= 0) {
            id = 1;
            alert("已经是第一页了");
        }
    })

    //点击选择页面
    $('#save_select').on('change',function(){
        var options = $('#save_select option:selected');
        var value = options.val();
        // console.log(value);
        id = value;
        save_ajax();
    })

    

})