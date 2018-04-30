define(["jquery", 'template', 'utils', 'bootstrap'], function ($, template, obj) {
    var cpid = obj.queryString().categoryid;
    var cpname=obj.queryString().category;
        cpname=decodeURI(cpname);

    function getdata(pageid,id) {
        $.ajax({
            // url: "http://139.199.192.48:9090/api/getproductlist",
            url:"http://139.199.192.48:9090/api/getproductlist",
            type: "get",
            data: {
                categoryid:id,
                pageid: pageid
            },
            success: function (data) {
                console.log(data);
                data.cpname=cpname;
                var str = template("pro-list-tpl", data);
                $(".prolist-tab").html(str);
            }
        })
    }
    getdata(1,cpid);
});