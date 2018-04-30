var configURL = {
    host: "139.199.192.48:9090",
    protocol: "http://",
    getURL: function (path) {
        return this.protocol + this.host + "/api/" + path;
    }
}
$(".back").on("click",function () {
    history.back();
})
$.ajax({
    url: configURL.getURL("getsitenav"),
    type: "get",
    success:function (info) {
        console.log(info);
        var htmlStr = template("brand_tpl",info);
        $(".brand_list").html(htmlStr);
    }
})
