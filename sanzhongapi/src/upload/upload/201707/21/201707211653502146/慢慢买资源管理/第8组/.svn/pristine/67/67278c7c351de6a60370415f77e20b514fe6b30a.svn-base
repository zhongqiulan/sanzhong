/**
 * Created by Administrator on 2017/7/20 0020.
 */


$(function(){
    //截取他的id
    var search = location.search;
    search = search.slice(1);
    var searcharr = search.split('&');
    var obj = {};
    for (var i = 0; i < searcharr.length; i++) {
        var temp = searcharr[i].split('=');
        obj[temp[0]] = temp[1];
    }

//发送ajax请求渲染页面
    $.ajax({
        url: "http://157.122.54.189:9090/api/getmoneyctrlproduct",
        dataType: 'JSON',
        type: "GET",
        data: {
            productid: obj.productid
        },
        success: function (data) {
            console.log(data.result);
            var htmlstr = template("goods_tpl", data.result[0]);
            $(".main").html(htmlstr);
        }
    })

})





