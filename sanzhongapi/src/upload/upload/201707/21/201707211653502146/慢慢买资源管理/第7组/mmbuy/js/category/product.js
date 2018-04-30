/**
 * 更换标题的导航内容
 */
changeNav();
function changeNav() {
    var step1 = JSON.parse(sessionStorage.getItem('step1'));
    var step2 = JSON.parse(sessionStorage.getItem('step2'));
    $(".nav_title > a:nth-of-type(2)").html(step1);
    $(".nav_title > a:nth-of-type(3)").html(step2);
}
/**
 * 渲染页面
 */
var search = location.search;
getProduct();

function getProduct() {
    $.ajax({
        url: config.getUrl("/api/getproduct") + search,
        type: 'get',
        success: function (data) {
            console.log(data);
            var htmlStr = template("titleTpl", data);
            $(".content").html(htmlStr);

            $(".nav_title > a:nth-of-type(2)").attr('href', "./ductlist.html?categoryid=" + data.result[0].categoryId);
        }
    })
}

/**
 * 评论模块渲染
 */
getEvaluation();

function getEvaluation() {
    $.ajax({
        url: config.getUrl('/api/getproductcom') + search,
        type: 'get',
        success: function (data) {
            console.log(data);
            var htmlStr = template("evaluationTpl", data);
            $('.evaluation .info').html(htmlStr);
        }
    })
}