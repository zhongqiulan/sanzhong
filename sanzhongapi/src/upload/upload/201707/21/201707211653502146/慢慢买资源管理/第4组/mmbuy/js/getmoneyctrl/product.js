~function () {
    var productid = o.queryString().productid;
    $.ajax({
        url: config.getUrl('/api/getmoneyctrlproduct'),
        type: "get",
        data: {
            productid: productid
        },
        success: function (data) {
            document.title=data.result[0].productName;
            var tplStr=template("product_tpl",data.result[0]);
            $("main").html(tplStr);
        }
    })
    $(".back").on("click",function(){
    location.href="../../pages/1moneyctrl.html";
})

}()

