define([
    'jquery',
    'template', 'utils',
    'bootstrap'
], function ($, template, obj) {
    var productid = obj.queryString().productid;
  var cpname = obj.queryString().cpname;
    cpname = decodeURI(cpname);
    // 产品id
    var productname;

    $.ajax({
        url: "http://139.199.192.48:9090/api/getproduct",
        type: "get",
        data: {
            "productid": productid
        },
        success: function (data) {    
            data.result[0].cpname = cpname;
            productname = data.result[0].productId;
            productNa = data.result[0].productName;
            //产品名
            productNa=productNa.split(" ")[0];
            // productNa=productNa.slice(0,9);
            data.result[0].productNa=productNa;
            var cateid = data.result[0].categoryId;
            var str = template("tpl", data.result[0]);
            $(".cpzs").html(str);

            var spj = template("jsop", data.result[0]);
            // console.log(spj);
            $("#home").html(spj);
        }
    })

    $("#propj").on("click", function () {
        $.ajax({
            url: "http://139.199.192.48:9090/api/getproductcom",
            type: "get",
            data: {
                productid: productname
            }, success: function (data) {
                
                var strd = template("propjt", data);
               
                $(".pj-content").html(strd);

                 if(data.result.length){
                    $(".jzgd").html("暂无评论");
                }
            }
        })
    })


});