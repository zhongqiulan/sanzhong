function Dian() {
    // 店铺渲染
    this.DP = function () {
        $.ajax({
            url: 'http://139.199.192.48:9090/api/getgsshop',
            type: 'get',
            datatype: 'json',
            success: function (info) {
                var htmlStr = template('dian', info);
                $('.l1>ul').html(htmlStr);
            }
        })
        
         $('.l1>ul').on('click','.dp',function(){
            $(this).parent().parent().hide();
            $(this).css('color','red').siblings().css('color','black');
            $('.ona>.topNav>i').html($(this).text());
        })
    }
    // 地区渲染
    this.DQ = function () {
        $.ajax({
            url: 'http://139.199.192.48:9090/api/getgsshoparea',
            type: 'get',
            datatype: 'json',
            success: function (info) {
                var htmlStr = template('diqu', info);
                $('.l2>ul').html(htmlStr);
            }
        })

        $('.l2>ul').on('click','.dq',function(){
            $(this).parent().parent().hide();
             $(this).css('color','red').siblings().css('color','black');
             $('.onb>.topNav>i').html($(this).text().substr(0,2));
        })
    }
    // 商品渲染
    this.dian = function () {
        $.ajax({
            url: "http://139.199.192.48:9090/api/getgsproduct",
            type: 'get',
            datatype: 'json',
            data: {
                shopid: 0,
                areaid: 0
            },
            success: function (info) {
                var htmlStr = template('dqlist', info);
                $('.gasSP').html(htmlStr);
            }
        })
        $('.list>ul').on('click', '.dp', function () {
            var id = $(this).attr('data-shopId');
            console.log(id);
            $.ajax({
                url: "http://139.199.192.48:9090/api/getgsproduct",
                type: 'get',
                datatype: 'json',
                data: {
                    shopid: id,
                    areaid: 0
                },
                success: function (info) {
                    console.log(info);
                    var htmlStr = template('dplist', info);
                    $('.gasSP').html(htmlStr);
                }
            })
        })

        $('.list>ul').on('click', '.dq', function () {
            var id = $(this).attr('data-areaId');
            console.log(id);
            $.ajax({
                url: "http://139.199.192.48:9090/api/getgsproduct",
                type: 'get',
                datatype: 'json',
                data: {
                    shopid: 0,
                    areaid: id
                },
                success: function (info) {
                    console.log(info);
                    var htmlStr = template('dqlist', info);
                    $('.gasSP').html(htmlStr);
                }
            })
        })
    }



}



// 点击事件
function Dj() {
    // 店铺
    this.dian = function () {

        var flag = true;
        $('.ona').on('click', function () {

            if (flag) {
                $('.l1').show();
                flag = false;
            } else {
                $('.l1').hide();
                flag = true;
            }
        });
    }
    // 地区
    this.diqu = function () {
        var flag = true;

        $('.onb').on('click', function () {
            if (flag) {
                $('.l2').show();
                flag = false;
            }
            else {
                $('.l2').hide();
                flag = true;
            }
        })
    }
    // 价格
    this.jiage = function () {
        var flag = true;

        $('.onc').on('click', function () {
            if (flag) {
                $('.l3').show();
                flag = false;
            }
            else {
                $('.l3').hide();
                flag = true;
            }
        })
    }
    // 点击搜索
    this.sou = function(){
        var flag = true;

        $('.search').on('click', function () {
            if (flag) {
                $('.zhtai').show();
                flag = false;
            }
            else {
                $('.zhtai').hide();
                flag = true;
            }
        })
    }


    // 判断点击这个隐藏其他
    this.yi = function(){
        
    }
}

window.onload = function () {
    var d = new Dian();
    d.DP();
    d.DQ();
    d.dian();
    
    var dj = new Dj();
    dj.dian();
    dj.diqu();
    dj.jiage();
    dj.sou();
    dj.yi();
}