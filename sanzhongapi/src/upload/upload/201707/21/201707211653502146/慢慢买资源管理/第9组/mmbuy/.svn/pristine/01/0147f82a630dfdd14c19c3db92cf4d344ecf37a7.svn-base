$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

// 标签页函数
function Scroll(dom) {
    this.dom = dom;
    this.startX = 0;
    this.oldX = 0;
    this.max = -(dom.offsetWidth - dom.parentNode.offsetWidth);
    this.init();
}
// 标签页函数原型
Scroll.prototype = {
    constructor: Scroll,
    init: function () {
        this.swiper();
        this.tap();
    },
    swiper: function () {
        var _this = this;
        _this.dom.addEventListener("touchstart", function (e) {
            if (e.targetTouches.length > 1) {
                return;
            }
            _this.startX = e.targetTouches[0].clientX;
        });
        _this.dom.addEventListener("touchmove", function (e) {
            if (e.targetTouches.length > 1) {
                return;
            }
            // 样式初始化
            // for (var i = 0; i < this.children.length; i++) {
            //     this.children[i].children[0].style.color = "#000";
            // }


            var moveX = e.targetTouches[0].clientX - _this.startX + _this.oldX;
            if (moveX >= 50) {
                moveX = 50;
            } else if (moveX <= _this.max - 50) {
                moveX = _this.max - 50;
            }
            this.style.transition = "none";
            this.style.transform = "translateX(" + moveX + "px)";
        });
        _this.dom.addEventListener("touchend", function (e) {
            if (e.changedTouches.length > 1) {
                return;
            }


            _this.oldX += e.changedTouches[0].clientX - _this.startX;
            // console.log(oldX);
            if (_this.oldX >= 0) {
                _this.oldX = 0;
                this.style.transition = "all 0.3s";
                this.style.transform = "translateX(0px)";
            } else if (_this.oldX <= _this.max) {
                _this.oldX = _this.max;
                this.style.transition = "all 0.3s";
                this.style.transform = "translateX(" + _this.max + "px)";
            }


        });
    },
    tap: function () {
        var _this = this;
        var startX, startY;
        var startTime;
        _this.dom.addEventListener("touchstart", function (e) {
            if (e.targetTouches.length > 1) {
                return;
            }
            startX = e.targetTouches[0].clientX;
            startY = e.targetTouches[0].clientY;
            startTime = Date.now();
        });
        _this.dom.addEventListener("touchend", function (e) {
            if (e.changedTouches.length > 1) {
                return;
            }
            var endX = e.changedTouches[0].clientX;
            var endY = e.changedTouches[0].clientY;
            if (Math.abs(endX - startX) > 5) {
                return;
            }
            if (Math.abs(endY - startY) > 5) {
                return;
            }
            var endTime = Date.now();
            if (endTime - startTime > 500) {
                return;
            }
            _this.handleFN(e);
        });
    },
    handleFN: function (e) {
        var _this = this;
        if (e.target.nodeName == "A") {
            var clickLeft = e.target.parentNode.offsetLeft;
            if (-clickLeft < _this.max) {
                clickLeft = -_this.max;
            }
            _this.oldX = -clickLeft;
            _this.dom.style.transition = "all 0.3s";
            _this.dom.style.transform = "translateX(-" + clickLeft + "px)";
            var lis = e.target.parentNode.parentNode.children;
            for (var i = 0; i < lis.length; i++) {
                lis[i].children[0].style.color = "#000";
            }
            e.target.style.color = "red";
        }
    }
}


$('#myTabs a[href="#profile"]').tab('show') // Select tab by name
$('#myTabs a:first').tab('show') // Select first tab
$('#myTabs a:last').tab('show') // Select last tab
$('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)
// var myScroll = new IScroll("#wrapper", {scrollX: true, scrollY: false});





var titleId = 0
// 第一次ajax请求，渲染商品标签
$.ajax({
    url: 'http://157.122.54.189:9090/api/getbaicaijiatitle',
    dataType: 'Json',
    type: 'get',
    success: function (info) {
        console.log(info);
        var htmlStr = template('bc_tit_tpl', info);
        $('.nav-tabs').html(htmlStr);
        $('#bc_tit_ul .bc_tit_li').eq(0).addClass('active');
        $('#bc_tit_ul .bc_tit_li').eq(0).children().css({color:"#f00"});
        // 创建scroll事件
        var navScroll = new Scroll(document.querySelector("#bc_tit_ul"));
         //  第二次发送Ajax请求，渲染商品列表
            $.ajax({
                url: 'http://157.122.54.189:9090/api/getbaicaijiaproduct',
                dataType: 'Json',
                type: 'get',
                data: {
                    titleid: titleId
                },
                success: function (info) {
                    var htmlStr = template('bc_goods_tpl', info)
                    $('.bc_goods_lists').html(htmlStr);
                    var w=60;
                    var lis=document.querySelector("#bc_tit_ul").children
                    for(var i =0;i<lis.length;i++){
                        w+=parseInt(window.getComputedStyle(lis[i]).width)
                    }
                    $('.nav-tabs').css("width",w);
                }

            })
        console.log(titleId);
        $('#bc_tit_ul').on('click', '.bc_tit_li', function () {
            titleId = $(this).attr('data-id');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            //  第二次发送Ajax请求，渲染商品列表
            $.ajax({
                url: 'http://157.122.54.189:9090/api/getbaicaijiaproduct',
                dataType: 'Json',
                type: 'get',
                data: {
                    titleid: titleId
                },
                success: function (info) {
                    console.log(info);
                    var htmlStr = template('bc_goods_tpl', info)
                    $('.bc_goods_lists').html(htmlStr);
                }

            })
        })

    }
})



$("#top").on("click",function () {
    window.scrollTo(0,0);
    return false;
})
