/**
 * Created by Administrator on 2017/7/18.
 */

$.ajax({
    url:"http://139.199.192.48:9090/api/getsitenav",
    type:"get",
    success:function (info) {
        // console.log(info);
        var htmlStr = template("ittun_tpl",{data:info.result});
        $("#gd_list_container").html(htmlStr);
    },
    error:function (erro) {
        alert("服务器连接超时");
    }

})

