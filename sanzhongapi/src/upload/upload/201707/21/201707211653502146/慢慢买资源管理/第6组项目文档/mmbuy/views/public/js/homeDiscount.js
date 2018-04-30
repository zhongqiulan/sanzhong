// 请求商品内容


define(["jquery", "template"], function ($, template) {
            $.ajax({
                url: "http://139.199.192.48:9090/api/getinlanddiscount",
                // url:"http://192.168.50.2:9090/api/getinlanddiscount",
                dataType: "Json",
                success: function (info) {
                    // console.log(info)

                    var htmlStr = template("produce_temp", info);
                    $(".produce_box").html(htmlStr);
                    var num=0;      
                    $(window).on("scroll", function () {
                           
                            var foot = ($(".produce_box").offset().top + $(".produce_box").height()) - ($(window).height() + $(window).scrollTop());
                            if (foot < -100&&num==0) {
                                num=1;
                                setTimeout(function() {
                                    $(".loading").hide();
                                   var htmlStr = template("produce_temp0", info);
                                   $(".produce_box").append(htmlStr); 
                                }, 1000);
                                
                            }
                        })

                            //注册点击事件
                            $(".produce_box").on("click", "#detail", function () {
                                //获取id
                                var id = $(this).attr("data-id");
                                //跳转
                                location.href = "/produceDetail?productId=" + id;
                            })
                        }
                    })
            })