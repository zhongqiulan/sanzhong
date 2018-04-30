$(function () {

    //导航列表点击
    (function() {
        var now = null;
        var sId = 0;
        var aId = 0;

        function clickToggle(e) {
            if (now != $(e.currentTarget).parent().index()) {
                now = $(e.currentTarget).parent().index();

                $(e.currentTarget).parent().siblings().find('i.icon-xiasanjiao').removeClass('icon-xiasanjiao').addClass('icon-shangsanjiao');
                $(e.currentTarget).find('i').removeClass('icon-shangsanjiao').addClass('icon-xiasanjiao');

                $('.popup>div').eq(now).addClass('active').siblings().removeClass('active');
            } else if (now == $(e.currentTarget).parent().index()) {
                $(e.currentTarget).find('i').removeClass('icon-xiasanjiao').addClass('icon-shangsanjiao');
                $('.popup>div').eq(now).removeClass('active');

                now = null;
            }
        }

        function clickChangeTitle(e) {
            $('.nav-sel>ul>li>a').eq(now).html($(e.currentTarget).text() + `<i class="iconfont icon-xiasanjiao"></i>`);
            $(e.currentTarget).next('i').addClass('active');
            $(e.currentTarget).parent().siblings().find('i').removeClass('active');
            $(e.liveFired).removeClass('active');

            $($('.nav-sel>ul>li').eq(now)).find('i').removeClass('icon-xiasanjiao').addClass('icon-shangsanjiao');
            now = null;
        }

        $('.nav-sel>ul').on('click','a',function(e){
            if($(e.currentTarget).parent().hasClass('search')) return;
            clickToggle(e);
        });
        $('.popup>div').on('click','a',function(e){
            if($(e.liveFired).hasClass('shop')){
                sId = $(e.currentTarget).attr('data-id');
            };
            if($(e.liveFired).hasClass('area')){
                aId = $(e.currentTarget).attr('data-id');
            }

            listRender(sId,aId);
            clickChangeTitle(e);
        });
    })();

    //店铺模板渲染
    $.ajax({
        url: 'http://157.122.54.189:9090/api/getgsshop',
        dataType: 'jsonp',
        success: function (res) {
            var htmlStr = template('tpl-shop', res);
            $('.shop').html(htmlStr);

            $($('.shop>ul>li').find('i').eq(0)).addClass('active');
        }
    });

    //地区模板渲染
    $.ajax({
        url: 'http://157.122.54.189:9090/api/getgsshoparea',
        dataType: 'jsonp',
        success: function (res) {
            var htmlStr = template('tpl-area', res);
            $('.area').html(htmlStr);

            $($('.area>ul>li').find('i').eq(0)).addClass('active');
        }
    });

    function listRender(sId,aId){
        $.ajax({
            url: 'http://157.122.54.189:9090/api/getgsproduct',
            dataType: 'jsonp',
            data: {
                shopid: sId,
                areaid: aId
            },
            success: function (res) {
                var htmlStr = template('tpl-list', res);
                $('#list').html(htmlStr);
            }
        })
    }
    listRender(0,0);
});