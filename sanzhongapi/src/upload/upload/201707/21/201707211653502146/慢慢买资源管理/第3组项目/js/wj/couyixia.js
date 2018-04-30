
// var btn = document.getElementById('btn');
// btn.onclick = function(){
//     location.href = 'wangjian.html';
// }

$(function(){
    //点击华北按钮弹出选择框
    var r =$('.view .content .wanglei .xia .r');
    r.on('click',function(){
        
        $('.view .content .wanglei .wangleiaa').toggleClass('on');
    });
    //点击选择框的一个选项会使其渲染到上面
    $('.view .content .wanglei .wangleiaa li').on('click',function(){
        $('.view .content .wanglei .wangleiaa').removeClass('on');
        var value = $(this).text();
        $('.view .content .wanglei .xia .r').text(value);
        console.log(value)
    });
    //点击头部左按钮返回到主页页面
    $('.view .header .head_left').on('click',function(){
        console.log("返回主页页面");
        location.href = '../../index.html';
    });
    //点击底部凑一下按钮返回凑单品页面
    $('.content .footer').on('click',function(){
        location.href = 'wangjian.html';
    });
});


