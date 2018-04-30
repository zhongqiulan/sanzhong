

define(["jquery","template","utils"],function ($,template,utils) { 
    //获取id
    var id=utils.queryString().productId;
    //发送请求
    $.ajax({
        url:"http://139.199.192.48:9090/api/getdiscountproduct",
        // url:"http://192.168.50.2:9090/api/getdiscountproduct",
        data:{productid:id},
        dataType:"Json",
        success:function (info) {

            //渲染 
            var tempStr=template("detail_temp",info.result[0]);
            $("#main_temp").html(tempStr);


            //点击发表评论
            $("#main_temp").on("click",".comment>.btn",function () { 
                 
                //获取表单内容
                var formdata=$("form").serializeArray();
                formdata=formdata[0].value;

                var date=new Date();
                date=date.toLocaleString();
                //渲染页面
                var temp=template("comment_info",{comment:formdata,time:date})
                $("#comment_box").append(temp);
                $(".textarea").val("");
             })
          }
    })
 })