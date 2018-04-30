//页面加载
loadPage(1);

function loadPage(num) {
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getmoneyctrl?pageid=' + num,
        type: 'get',
        success: function (data) {
            console.log(data);
            var seaPage = template("seaPage", data);
            // var currentPage = 1;
            // data.currentPage=currentPage;
            // var pagesize = data.pagesize;
            // var totalPage=Math.ceil(data.totalCount/data.pagesize);
            // data.totalPage=totalPage;
            // $('.currentTotal').text(currentPage + "/" + totalPage);
            $('.pageList').html(seaPage);
        }
    });
}

//点击下拉框获取下面的value,同时更新首页数据
$('#select').on("change", function () {

    var checkText = $(this).find("option:selected").attr('value');
    $(this).find("option:selected").prop('selected', true);
    console.log(checkText);
    loadPage(checkText);
});
//点击上一页更新内容
$('button.prev').on("click", function () {
    //获取select的value值
    var checkText = parseInt($("#overseas_main select").find("option:selected").attr('value'));
    // console.log("点击时" + checkText);

    //
    if (!(checkText - 1)) {
        return;
    }
    checkText--;
    $("#overseas_main select").find('option').prop("selected", false)
        .eq(checkText-1).prop("selected", true);

    // console.log("减减后" + checkText);
    loadPage(checkText);

});
//点击下一页更新内容
$('button.next').on("click", function () {
    var checkText = $("#overseas_main select").find("option:selected").attr('value');
    $("#overseas_main select").find('option').prop("selected", false)
        .eq(checkText).prop("selected", true);

    if (checkText > 15) {
        return;
    }
    checkText++;
    console.log(checkText);
    loadPage(checkText);

    // 同时修改select里面的值
});
//点击回到顶部功能
$('.backTop').on("click", function () {
    $('body,html').animate({scrollTop: 0}, 200);
    return false;
});






//点击a链接跳转到相应的详情页
$("#overseas_main").on("click", ".media-left a", function () {
    // console.log(111);
    //获取自定义属性
    var data_id = $(this).attr('data-id');
    var data_product = $(this).attr('data-product');
    checkText = $("#overseas_main select").find("option:selected").attr('value');
    console.log(data_id);
    console.log(data_product);
    console.log(checkText);
    location.href = "./products.html?id=" + data_id + "&product=" + data_product + "&pageid=" + checkText;
})

//回到首页

$('.backIndex').on("click", function () {

    location.href = "../../index.html";

})


//登录
$('.login').on("click", function () {

    location.href = "../../login.html";
    return false;

});
$('.register').on("click", function () {

    location.href = "../../login.html";
    return false;

});