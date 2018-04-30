


$(function () {
  myTouck();
  function myTouck() {
    var startX;
    var Distance = 0;
    var MaxX = -($('.naver').width() - $(".box").width());
    $('.naver').on('touchstart', function (e) {
      if (e.originalEvent.targetTouches.length > 1) {
        return;
      }
      var _touch = e.originalEvent.targetTouches[0];
      startX = _touch.clientX;
      $(this).css("transition","none");
    });

    $('.naver').on('touchmove', function (e) {
      if (e.originalEvent.targetTouches.length > 1) {
        return; 
      }
      var _touch = e.originalEvent.targetTouches[0];
      var moveX = _touch.clientX;

      
      var moveDistance = moveX - startX + Distance;
      if (moveDistance > 50) {
        moveDistance = 50;
      } else if (moveDistance < MaxX - 50) {
        moveDistance = MaxX - 50;
      }

      $(this).css("transform", "translateX(" + moveDistance + "px)");

    });

    $('.naver').on('touchend', function (e) {
      if (e.originalEvent.changedTouches.length > 1) {
        return;
      }
      Distance += e.originalEvent.changedTouches[0].clientX - startX;

      if(Distance > 0 ){
        Distance = 0;
        $(this).css("transition","all .5s");
        $(this).css("transform","translateX(" + Distance + "px)")
      }else if(Distance < MaxX){
        Distance = MaxX;
        $(this).css("transition","all .5s");
        $(this).css("transform","translateX(" + Distance + "px)")
      }
    })
  }
})

