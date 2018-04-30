define(['jquery', 'template', 'bootstrap'], function($, template, bootstrap) {
    $.ajax({
        url: tool.getUrl('api/getcategorybyid'),
        type: 'get',
        data: {
            categoryid: tool.getSearch().id
        },
        success: function(info) {
            $("title").html(info.result[0].category + "比价选购， 音响 / 音箱推荐哪个好--慢慢买手机版");
            $("#nav_title").html(info.result[0].category).prop("href", "/Parity-search/list?id=" + info.result[0].categoryId);
        }
    })




    $.ajax({
        url: tool.getUrl('api/getproductlist'),
        type: 'get',
        data: {
            categoryid: tool.getSearch().id,
            pageid: tool.getSearch().pageid ? tool.getSearch().pageid : 1
        },
        success: function(info) {
            var htmlstr = template("list_tpl", info);
            $(".main .list-group").html(htmlstr);
            var selectstr = '';
            for (var i = 1; i <= Math.ceil(info.totalCount / info.pagesize); i++) {
                var options = "<option value='" + i + "'>" + i + "/" + Math.ceil(info.totalCount / info.pagesize) + "</option>"
                selectstr += options;
            }
            $("#yeshu").html(selectstr);
            $("#yeshu").val(tool.getSearch().pageid ? tool.getSearch().pageid : 1);
        }
    })


    $("#yeshu").change(function() {
        ajaxtolist($(this).val());
    })

    $(".fanye").on("click", ".fanyes", function() {
        var num = $("#yeshu").val();
        var len = $("#yeshu").children().length;
        if ($(this).attr("data-s") == "s") {
            num--;
            if (num < 0) {
                num = 0;
                return;
            }
        } else {
            num++;
            if (num > len) {
                num = len;
                return;
            }

        }
        ajaxtolist(num);
    })

    function ajaxtolist(pageid) {
        $.ajax({
            url: tool.getUrl('api/getproductlist'),
            type: 'get',
            data: {
                categoryid: tool.getSearch().id,
                pageid: pageid
            },
            success: function(info) {
                $("#yeshu").val(pageid);
                $(".shade").addClass("hide");
                var htmlstr = template("list_tpl", info);
                $(".main .list-group").html(htmlstr);
                location.href = "/Parity-search/list?id=" + tool.getSearch().id + "&pageid=" + pageid;
            }
        })
    }

})