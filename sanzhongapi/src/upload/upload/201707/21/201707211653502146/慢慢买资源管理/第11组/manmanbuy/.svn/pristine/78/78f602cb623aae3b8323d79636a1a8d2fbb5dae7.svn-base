define(["utils", "jquery", "template", "zepto", "event", "touch"], function (o, $, template, $1) {
    // 点击筛选实现遮罩的出现和侧边栏的出现
    var pageid = 1;
    var maxPage;
    var id = o.queryString().categoryid;
    // console.log(id);
    var cpname=o.queryString().category;
        cpname=decodeURI(cpname);
        console.log(cpname);
        
    $1("#shuaixuan").tap(function () {
        $(".master").css("display", "block");
        $(".sx-aside").css("left", 0);
    })
    //   点击关闭按钮，遮罩侧边栏消失
    $1("#aside_close").tap(function () {
        $(".master").css("display", "none");
        $(".sx-aside").css("left", "-80%");
    })

    // $.ajax({
    //     url: "http://139.199.192.48:9090/api/getcategorybyid",
    //     type: "get",
    //     data: {
    //         categoryid: 1
    //     },
    //     success: function (data) {
    //         console.log(data);
    //         // var htmlStr = template("product_tmp", data.result[0]);
    //         // $(".cpzs-nav").html(htmlStr);
    //         id=data.result[0].categoryId;
    //         console.log(id);
    //     }
    // })
    render();

    function render() {
        $.ajax({
            url:"http://139.199.192.48:9090/api/getproductlist",
            type: "get",
            data: {
                categoryid: id,
                pageid: pageid || 1
            },
            success: function (data) {
                // console.log(data);
                // data=cpname;
                data.cpname=cpname;
                maxPage = Math.ceil(data.totalCount / data.pagesize);
                var htmlStr = template("category_tmp", data);
                // console.log(htmlStr);             
                $(".prolist-tab").html(htmlStr);
                $("#currentTotal").html(pageid+"/"+maxPage);
            }
        })
    }

    $1(".up-page").tap(function () {       
        pageid--;
        if (pageid <= 1) {
            pageid = 1;        
        }
        render();

    })
    $1(".down-page").tap(function () {
        
        pageid++;
        if (pageid >= maxPage) {
            pageid = maxPage;
        }
        render()
    })

})