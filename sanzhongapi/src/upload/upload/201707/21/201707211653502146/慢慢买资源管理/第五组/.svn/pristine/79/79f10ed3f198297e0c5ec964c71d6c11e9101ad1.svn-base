function mmm_list(num) {
    $.ajax({
        url: "http://139.199.192.48:9090/api/getindexmenu",
        success: function (data) {
            console.log(data);
            var html = template(num, data);
            // console.log(html);
            $(".mmm_list").html(html);

        }
    })
}
mmm_list("mmm_list");

function product_list() {
    $.ajax({
        url: "http://139.199.192.48:9090/api/getmoneyctrl",
        success: function (data) {
            // console.log(data);
            var html = template("product_list", data);
            // console.log(html)
            $(".product_list").html(html);
            // $.createElement("li");

        }
    })
}
product_list();

var flag = true;
// 点击加载更多
window.onload = function () {
    function too() {

        $(".mmm_list").on("click", "ul>li>a:eq(7)", function () {

            $(".mmm_list").css("overflow", "auto");
            $(".mmm_list").animate({height: "100%"}, 1000);
            $(".mmm_list").addClass("show");
            $(".mmm_list").removeClass("hidden1");
            if (flag) {
                mmm_list("mmm_listAll");
                flag = false;
            }else{
                mmm_list("mmm_list");
                flag =  true;
            }
            return false;
        })


    }

    too()

    function xx() {

        $(".mmm_list").on("click", "ul>li>a:eq(5)", function () {
            location.href = "./pages/coupon.html"
        })
        $(".mmm_list").on("click","ul>li>a:eq(0)",function(){
            location.href="./pages/parity_search.html"
        })
        return false;
    }

    xx()




}
