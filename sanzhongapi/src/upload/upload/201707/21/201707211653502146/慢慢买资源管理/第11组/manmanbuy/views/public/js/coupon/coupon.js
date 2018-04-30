

    define([
        'jquery',
        'template',
        'utils',
        'bootstrap'
    ], function($, template,utils) {
        

        $('.carousel').carousel('pause');
        $('.contain').on('click','li' ,function () {
            var index=$(this).index();
            // console.log(index);
            $('.carousel').carousel(index);
            $('.cover').fadeIn();
            return false;
        })

        $('.cover').on('click', function (e) {
            $(this).fadeOut();

        })

        var arows = $('.arows');
        arows.hover(function () {
            $(this).addClass('mouseover');
        }, function () {
            $(this).removeClass('mouseover');
        })


        var id=utils.queryString().id;
        var name=utils.queryString().name;
        name=decodeURI(name);
        
        $.ajax({
            url:'http://157.122.54.189:9090/api/getcouponproduct',
            type:'get',
            data:{couponid:id},
            success:function(rel){
                // console.log(rel);
                rel.name=name;
                var temp=template('info',rel);
                $('.contain').html(temp);


                var tel=template('mod',rel);
                $('.box .carousel-inner').html(tel);

                var head=template('head',rel);
                $('header').html(head);

                var back=template('back',rel);
                $('.youhui').html(back);

                var item=$('.item').eq(0);
                item.addClass('active');

               
            }
        })

          $('.box').on('click','.left', function (e) {
            e.stopPropagation();
            $('.carousel').carousel('prev');

        })

    $('.box').on('click','.right', function (e) {
        e.stopPropagation();
        $('.carousel').carousel('next');
    })
        

        $('header').on('click','.goBack',function(){
            location.href='/coupon/coupon';
        })

    });