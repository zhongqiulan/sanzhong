$(function () {

    $.ajax({
        type: 'get',
        url: "http://157.122.54.189:9090/api/getinlanddiscount",
        dataType: "json",
        success: function (data) {
            // console.log(data);
            // console.log(htmlStr)
                var htmlStr = template("dd_list_tpl", data);
                $("#row").html(htmlStr);
        }
    })

     // 点击商品，跳转到详情页
    $("#row").on("click", '.shopping', function () {
        // alert(12345);
        var id = $(this).attr('data-id');
        // alert(id);
        location.href = 'http://192.168.65.98/mmb/ChildPage/z-detail.html?id=' + id
    })

})

