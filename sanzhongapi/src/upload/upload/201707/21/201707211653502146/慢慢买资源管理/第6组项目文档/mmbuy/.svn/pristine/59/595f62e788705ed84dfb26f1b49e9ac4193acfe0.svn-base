define(['jquery', 'template'], function ($, template) {
    // alert(123);

    // 点击向左图标,跳转到index页面
    $('.head_title>i').on("click", function () {
        location.href = "/index"
    })
    // 点击导航栏中右边的图标 , 隐藏的搜索框出现
    $('.icon_search').on('click', function () {
        $('.icon_search').toggleClass('glyphicon-zoom-out');
        $('.search_div').toggleClass('toggle');
    });

    // 发送ajax请求导航条菜单数据
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getbaicaijiatitle',
        success: function (menu) {
            var htmlStr = template('bcj_nav_menu', menu);
            $('.nav_bar').html(htmlStr);

            // 获取导航条中的li标签 
            var lis = $('.nav_bar_menu').children('li');
            // 给第一个li标签中的a标签加上默认类样式
            lis.eq(0).children('a').addClass('active');
            // 获取li标签的 titleId , 作为参数
            var titleId = lis.attr('data-value');
            // console.log(titleId);

            // 传入参数发送请求
            $.ajax({
                url: 'http://139.199.192.48:9090/api/getbaicaijiaproduct',
                data: {
                    titleid: titleId
                },
                success: function (list) {
                    // 请求成功后渲染模板
                    var htmlStr = template('bcj_list_info', list);
                    $('.bcj_list').html(htmlStr);

                       
                }
            });

           
            
            

            // 根据标题id获取该标题对应的商品列表然后渲染到页面
            lis.on('click', function () {
                // 去掉类样式
                lis.children('a').removeClass('active');
                // 当前点击的a加上类样式
                $(this).children('a').addClass('active');
                // 获取参数
                titleId = $(this).attr('data-value');

                // 发送ajax请求白菜价商品列表信息
                $.ajax({
                    url: 'http://139.199.192.48:9090/api/getbaicaijiaproduct',
                    data: {
                        titleid: titleId
                    },
                    success: function (list) {
                        // 请求成功后渲染模板
                        var htmlStr = template('bcj_list_info', list);
                        // console.log(htmlStr);
                        $('.bcj_list').html(htmlStr);

                        
                    }
                })
            })

            // 获取li的宽度 , 赋值给ul
            var ulWidth = 0;
            lis.each(function(i,li){
                // console.log(i,li);
                // console.log(li.offsetWidth);
                ulWidth += li.offsetWidth;
                
            });
            // 给导航栏的ul增加属性宽度
            $('.nav_bar_menu').css('width',(ulWidth+200)+'px');


            // 注册手指触摸划动弹簧事件

            


            touchScroll();

            function touchScroll() {
                // 获取目标元素
                var menu = document.querySelector('.nav_bar_menu');

                // 手指按下坐标
                var startX;
                // 一共移动了的距离
                var totalDistance = 0;
                // 弹簧
                var springs = 50;
                // 左滑最大的距离  左滑的距离是负数
                var maxLeftDis = -( ulWidth  - menu.parentNode.offsetLeft);
                

                //绑定手指按下事件
                menu.addEventListener("touchstart", function (e) {
                    // 验证手指个数
                    if (e.targetTouches.length > 1) {
                        return;
                    }

                    // 记录坐标
                    startX = e.targetTouches[0].clientX;
                    // 清除过渡
                    this.style.transition = "none";

                });

                // 绑定手指移动事件
                menu.addEventListener("touchmove", function (e) {
                    // 验证手指的个数
                    if (e.targetTouches.length > 1) {
                        return;
                    }

                    // 移动的坐标
                    var moveX = e.targetTouches[0].clientX;
                    // 移动的距离   要加上上一次移动的距离
                    var tmpDistance = moveX - startX + totalDistance;


                    // 设置位移
                    this.style.transform = "translateX(" + tmpDistance + "px)";
                });

                // 触屏结束
                menu.addEventListener("touchend", function (e) {
                    // 判断手指的个数
                    if (e.changedTouches.length > 1) {
                        return;
                    }

                    // 记录上一次移动的距离  手指离开时需要加上自己上一次移动的距离
                    totalDistance += e.changedTouches[0].clientX - startX;

                    // 判断是否满足反弹的条件
                    if (totalDistance > 0) {
                        // 反弹
                        totalDistance = 0;
                        
                        this.style.transition = "all .3s";
                        this.style.transform = "translateX(" + totalDistance + "px)";
                    } else if (totalDistance <  (maxLeftDis/2-springs)) {
                        // 松开的时候 反弹 -只要超出最大左滑的距离的一点点的话 都要反弹
                        totalDistance = (maxLeftDis/2-springs);
                        
                        this.style.transition = "all .3s";
                        this.style.transform = "translateX(" + totalDistance + "px)";
                    }

                });




            }
        }




    })


})