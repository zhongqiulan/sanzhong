$(function(){
    var fontSize = $(document).width()/640*100;
    var listAjax = null;
    
    //渲染tab
    $.ajax({
        url:'http://157.122.54.189:9090/api/getbaicaijiatitle',
        type:'get',
        dataType:'jsonp',
        success:function(res){
            var htmlStr = template('tpl-tab-list',res);
            $(".navs-wrap>ul").html(htmlStr);

            //计算ul宽度 并 生成相应li数量的列表盒子
            var width = 0;
            $('.navs-wrap>ul>li').each(function(i,v){
                width += $(v).outerWidth(true);

                var id = $(v).children().attr('data-id');
                var box = document.createElement('div');
                $(box).appendTo($('#list'));
                $(box).attr('data-tabid',id);
            });

            //初始化列表
            $('.navs-wrap>ul>li')[0].classList.add('active');
            $('.navs-wrap ul').css({'width':width});

        }
    });

    listAjax = (function(){
        function list(id){
            //渲染商品列表
            $.ajax({
                url:'http://157.122.54.189:9090/api/getbaicaijiaproduct',
                data:{
                    titleid:id
                },
                dataType:'jsonp',
                type:'get',
                success:function(res){
                    var htmlStr = template('tpl-list',res);
                    $('#list>div[data-tabid="'+ id +'"]').html(htmlStr);
                }
            });
        }

        return list;
    })();
    listAjax(0);

    //点击渲染
    $('.navs').on('click','.navs-wrap>ul>li>a',function(ev){
        var id = $(ev.currentTarget).attr('data-id');

        //列表已经加载过不再发送ajax渲染
        if( !$(ev.currentTarget).attr('data-isload') ){
            $(ev.currentTarget).attr('data-isload',true);
            listAjax(id);
        }

        $('#list>div[data-tabid="'+ id +'"]').show().siblings().hide();
    });

    //活动样式
    $('.navs-wrap').on('click','.navs-wrap>ul>li>a',function(ev){
        $(ev.currentTarget).parent().addClass('active').siblings().removeClass('active');
    });

    //搜索框
    $('.navs .search>a').on('click',function(){
        $('.s-input').toggleClass('active');
        $('.search i').toggleClass('icon-sousuo-liebiao icon-cha');
    });

    (function(){
        var touch = {
            scroll:function(obj){
                var startX = 0,
                    moveX = 0,
                    endX = 0;

                obj[0].addEventListener('touchstart',function(e){
                    if(e.targetTouches.length > 1) return;

                    this.style.transition = '';

                    var e = e||event;
                    startX = e.targetTouches[0].clientX;
                });

                obj[0].addEventListener('touchmove',function(e){
                    var e = e||event;

                    moveX = e.targetTouches[0].clientX - startX + endX;

                    /*if(moveX > 100){
                        moveX = 100;
                    }else if(moveX < -(obj.width()-$(window).width()+100) ){
                        moveX = -(obj.width()-$(window).width()+100);
                    }*/

                    if(Math.abs(moveX) > 5){
                        this.style.transform = `translate3d(${moveX-5}px,0,0)`;
                    }

                    event.preventDefault();
                });

                obj[0].addEventListener('touchend',function(e){
                    var e = e||event;

                    endX = obj.offset().left;

                    if( $(this).offset().left > 0 ){
                        endX = 0;
                        this.style.transition = `transform 0.5s`;
                        this.style.transform = `translate3d(0,0,0)`;
                    }else if( $(this).offset().left < -(obj.width() - $(window).width()) + $('.search').width() ){
                        endX = -(obj.width() - $(window).width() + $('.search').width());
                        this.style.transition = `transform 0.5s`;
                        this.style.transform = `translate3d(${endX}px,0,0)`;
                    };
                })
            }
        };

        touch.scroll($('#navs-list'));
    })();

    window.addEventListener('scroll',function(){
        if($(window).scrollTop() > 500){
            $('.to-top-btn').fadeIn();
        }else{
            $('.to-top-btn').fadeOut();
        }
    });
    $('.to-top-btn').on('click',function(){
        $('body').animate({scrollTop:0},500);
    });
    $('.to-top').on('click',function(){
        $('body').animate({scrollTop:0},500);
    });
});