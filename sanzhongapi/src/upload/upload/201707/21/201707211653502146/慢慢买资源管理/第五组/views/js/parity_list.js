/*获取Id*/

var o = {
    queryString: function () {
        // 获取当前url中的tc_id
        var search = location.search;//  ?tc_id=14&name=zhangsan&age=20
        console.log();

        search = search.slice(1);
        var searchArr = search.split('&');  //searchArr是一个数组
        var obj = {};  //定义一个空对象 ，用来存储数据
        for (var i = 0; i < searchArr.length; i++) {
            var temp = searchArr[i].split('='); //temp也是一个数组
            obj[temp[0]] = temp[1];
        }
        return obj; //要把对象返回值
    }

}



var id = o.queryString().categoryId;
var category = null;
/*导航的渲染模板*/
$.ajax({
    url: "http://139.199.192.48:9090/api/getcategorybyid",
    type: "get",
    data: {
        categoryid: id
    },
    success: function (info) {
        var htmlStr = template("navs_tpl", info);
        $("#nav_list").html(htmlStr);
        category = info.category;
    }
})




/*商品列表的请求*/
 var pageArr = [];
$.ajax({
    url: "http://139.199.192.48:9090/api/getproductlist",
    type: "get",
    data: {
        categoryid: id,
    },
    success: function (info) {
       

        /*遍历数组得到页数*/
        var page = Math.ceil(info.totalCount / info.pagesize);
        info.page = page;
       
        for (var i = 1; i <= page; i++) {
            pageArr[i] = i;
        };

        pageArr = pageArr.slice(1);
        info.pageFlip = pageArr;
        
        /*渲染模板*/
        var htmlStr = template("product_list_tpl", info);
        $(".product_list").html(htmlStr);
        /*点击改变页数*/



        var pages = $("#flip_opt").data("pages");
        
        
$(".product_list").on("click", "#prve", function () {
    var index = $("#flip_opt").data("index");
    index--;
    if (index <= 0) {
        return;
    }
    $("#flip_opt option").attr("selected", false);
    $("#flip_opt option[value=" + index + "]").prop("selected", true);
    $("#flip_opt").change();
})

/*点击下一页按钮*/

$(".product_list").on("click", "#next", function () {
    var index = parseInt($("#flip_opt").data("index"));
    /*if (!index) {
        index = 1;
    }*/
    index++;
    console.log(index)
    if (index > pages) {
        return;
    }
    $("#flip_opt option").attr("selected", false);
    $("#flip_opt option[value=" + index + "]").prop("selected", true);
    $("#flip_opt").change();
})
/*下拉框的点击*/
$(".product_list").on("change", "#flip_opt", function () {
    $("#flip_opt").data("index", $(this).val());
    var pageid = Number($(this).val());

    $.ajax({
        url: "http://139.199.192.48:9090/api/getproductlist",
        type: "get",
        data: {
            categoryid: id,
            pageid: pageid,
            category: category
        },
        success: function (info) {
            info.pageid = pageid;
            var page = Math.ceil(info.totalCount / info.pagesize);
            var pageArr = [];
            for (var i = 1; i <= page; i++) {
                pageArr[i] = i;
            };
            info.page = page;
            pageArr = pageArr.slice(1);
            // console.log(pageArr);
            info.pageFlip = pageArr;
            var htmlStr = template("product_list_tpl", info);
            $(".product_list").html(htmlStr);
        }
    })
})

    }
})


/*点击上一页按钮*/
