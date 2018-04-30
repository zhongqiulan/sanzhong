 //第一步  截取他的id
  var search = location.search; 
    search = search.slice(1);
    var searcharr = search.split('&');
    var obj = {};
    for (var i = 0; i < searcharr.length; i++) {
        var temp = searcharr[i].split('=');
        console.log(temp);      //["tc_id", "12"]
        obj[temp[0]] = temp[1];
        //22 
    }
    console.log(obj.productid);
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
            var htmlstr = template("save_list_tmp", data.result[0]);
            $(".buy_details").html(htmlstr);
        }
    })
//点击返回的按钮,返回到第一页
    $(".back_save").on("click",function () {
        location.href="save.html";
    })