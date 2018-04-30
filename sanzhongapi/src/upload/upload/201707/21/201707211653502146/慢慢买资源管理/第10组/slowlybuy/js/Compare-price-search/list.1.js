// ?categoryid=0&category=电视
var search = location.search.slice(1);
console.log(search);
var searchArr = search.split("&");
var obj = {};
for (var i = 0; i < searchArr.length; i++) {
    var arr = searchArr[i].split("=");
    obj[arr[0]] = arr[1];
}
var categoryid = obj.categoryid;
var category = encodeURI(obj.category);
//获取导航信息
$.ajax({
    // url:"http://139.199.192.48:9090/api/getcategorybyid",
    url: config.getUrl("api/getcategorybyid"),
    data: {
        categoryid: categoryid
    },
    success: function (info) {
        var htmlStr = template("nav_tpl", info);
        $(".list_nav").html(htmlStr);
    }
})
//首先请求第一条数据
var pageid = 1;
getProductList(pageid);
//点击下一页获取下一条数据

$(".list").on("click", ".next", function () {
    //获取总页数
    var totalpage = $(this).parent().parent().parent().attr("data-totalpage");
    if (pageid >= totalpage) {
        this.disabled = true;
        alert('没有更多数据了!!');
        return;
    }
    pageid++;
    getProductList(pageid);

    var options = $(this).parent().prev().children().children();
    $(options[pageid]).prop("selected", true).siblings().prop("selected", false);
})
//点击上一页获取上一条数据
$(".list").on("click", ".prev", function () {

    if (pageid <= 1) {
        this.disabled = true;
        alert('已经是第一页了!!');
        return;
    }
    pageid--;
    getProductList(pageid);
})
function getProductList(pageid) {
    var pageArr = [];
    var pages = 0;
    $.ajax({
        // url: "http://139.199.192.48:9090/api/getproductlist",
        url: config.getUrl("api/getproductlist"),
        dataType: "json",
        data: {
            categoryid: categoryid,
            pageid: pageid
        },
        success: function (info) {
            pages = Math.ceil(info.totalCount / info.pagesize);
            for (var i = 1; i <= pages; i++) {
                pageArr.push(i);
            }
            info.pages = pageArr;
            // for (var i = 0; i < info.result.length; i++) {
            //     info.result[i][category] = category;
            // }
            console.log(info);
            var htmlStr = template("product_list_tpl", info);
            $(".list .product").html(htmlStr);
        }
    })
}


//点击回到顶部
$(".top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
});
