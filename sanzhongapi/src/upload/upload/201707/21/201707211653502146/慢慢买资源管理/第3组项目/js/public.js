$(function(){

    /* 回到顶部  带滑动效果 */
    $('#top').on('click',function(){
        var current=$("body").scrollTop();
        var target=0;
        var step=(current-target)/30;
        var timerId=setInterval(function(){
            current=current-step;
            $("body").scrollTop(current);
            if(current<=0){
                clearInterval(timerId);
            }
        },17)
    })


})