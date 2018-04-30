$(function () {
  //渲染列表
  var flag = 0;
  show();
  function show() {
    $.ajax({
      url: "http://139.199.192.48:9090/api/getbrandtitle",
      dataType: "Json",
      success: function (info) {
        var html = template("tradeList", info);
        $(".list").html(html);
        $("#TopTitle").text("热门品牌排行");
        $("#nav").text("全部分类");

        $(".list").on("click", 'li', function () {
          var titleId = $(this).children(".brandId").val();
          var title = $(this).children("span").text();
          var end = title.length - 4;
          title = title.substring(0, end);
          if (flag == 0) {
            // 显示Top10品牌
            $.ajax({
              url: "http://139.199.192.48:9090/api/getbrand",
              dataType: "Json",
              data: {
                brandtitleid: titleId
              },
              success: function (info) {
                $(".list").html("");
                var html = template("TopList", info);
                $(".list").html(html);
                $("#TopTitle").text(title + "哪个牌子好");
                $("#nav").text(title + "Top10品牌");
                $($(".list li")[0]).attr("id","Top1");
                $($(".list li")[1]).attr("id","Top2");
                $($(".list li")[2]).attr("id","Top3");
                $("#Top1 .media-object").addClass("red");
                $("#Top2 .media-object").addClass("yellow");
                $("#Top3 .media-object").addClass("green");
                flag++;
              }
            })//ajax 11 
          } else if (flag == 1) {
            //分类详情 Top10品牌进来就是这里
            var title = $("#TopTitle").text();
            var end = title.length - 5;
            title = title.substring(0, end);
            $("#TopTitle").html(title + "产品销量排行");
            var titleIds = $(this).children(".brandId").val();
            $.ajax({
              url: "http://139.199.192.48:9090/api/getbrandproductlist",
              dataType: "Json",
              data: {
                brandtitleid: titleIds
              },
              success: function (info) {
                $(".list").html("");
                var html = template("Top10_Info", info);
                $(".list").html(html);
                $("#nav").text("商品列表");
                flag++;
              }
            })//ajax
          } else if (flag == 2) {
            //评论页面
            var titleIds = $(this).children(".productId").val();
            var index = $("li").index(this);
            var img = $(document.querySelectorAll("#imgInfo")[index]).html();
            var title = $(document.querySelectorAll("#title2")[index]).text();

            $.ajax({
              url: "http://139.199.192.48:9090/api/getproductcom",
              dataType: "Json",
              data: {
                productid: titleIds
              },
              success: function (info) {
                info.img = img;
                info.title = title;
                $(".list").html("");
                var html = template("comment", info);
                $(".list").html(html);
                $("#TopTitle").text("详情评论");
                $("#nav").text("详情评论")
                $(".list").unbind();
              }
            })
          }

        })
      }
    })
  }


//回退功能
  $("#backBtn").click(function () {
    flag = 0;
    show();
  })

  //返回顶部
  $(document).bind('scroll', function () {
    var len = $(this).scrollTop();
    if (len >= 50) {
      $('.TopBtn').show();
    } else {
      $('.TopBtn').hide();
    }
  })
  //绑定回到顶部按钮的点击事件
  $('.TopBtn,#TopBtn').click(function () {
    //动画效果，平滑滚动回到顶部
    $('body,html').animate({ scrollTop: 0 }, 800);
  })

})

//自定义一个数组，并且有个number类型的值
//写一个函数得出数组内两个元素相加等于这个值的两个元素的索引
//如： arr = [1,2,3,4,5,6,7];  result = 3;  return arr[0,1]





