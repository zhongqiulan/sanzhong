define(['jquery', 'template'], function($, template) {
        var number;
        $.ajax({
                url: tool.getUrl('api/getmoneyctrl'),
                data: {
                    pageid: tool.getSearch().pageid ? tool.getSearch().pageid : 1
                },
                success: function(info) {
                    number = Math.ceil(info.totalCount / info.pagesize);
                    var htmstr = template('myul', info);
                    $('#product-list').html(htmstr);
                    var html = "";
                    for (var i = 1; i <= number; i++) {
                        html += "<option value='" + i + "'>" + i + "/" + number + "</option>"
                        $('.yeshu').html(html);
                    }
                    $(".yeshu").val(tool.getSearch().pageid);
                }
            }) //ajax
            // var num=$("#yeshu").val(tool.getSearch().pageid);
        $(".fanye").on("click", '.btns', function() {
            var num = $('.yeshu').val();
            if ($(this).attr("data-d") == "back") {
                num++;
                console.log(tool.getSearch().pageid);
                if (num > number) {
                    num = number;
                    return;
                }
            } else if ($(this).attr("data-d") == "front") {
                num--;
                if (num < 1) {
                    num = 1;
                    return;
                }
            }
            ajaxmoney(num);
        })
        $('.yeshu').change(function() {
                var num = $(this).val();
                $.ajax({
                    url: tool.getUrl('api/getmoneyctrl'),
                    type: 'get',
                    data: {
                        pageid: num,
                    },
                    success: function(info) {
                        var newstr = template('myul', info);
                        $('#product-list').html(newstr);
                        location.href = "/pages/save-money/save-money?pageid=" + num;
                    }
                })
            }) //页数
        function ajaxmoney(num) {
            $.ajax({
                url: tool.getUrl('api/getmoneyctrl'),
                type: 'get',
                data: {
                    pageid: num,
                },
                success: function(info) {
                    $('.yeshu').val(num);
                    var newstr = template('myul', info);
                    $('#product-list').html(newstr);
                    location.href = "/pages/save-money/save-money?pageid=" + num;
                }
            })
        }
        $('.list-group').on('click', '.btn-tz', function() {
            var id = $(this).attr('data-id');
            location.href = "/save-money/discount?productid=" + id;
        })
    }) //