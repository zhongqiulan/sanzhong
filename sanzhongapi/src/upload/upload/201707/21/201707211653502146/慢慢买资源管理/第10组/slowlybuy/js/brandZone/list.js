$(function () {
  var url = config.getUrl('/api/getbrandtitle');
  // console.log(url);

  // $('form').ajaxSubmit({
  $.ajax({
    url: url,
    // dataType: 'JSON',
    type: 'get',
    success: function (data) {
    
        var htmlStr = template('bz_list_tpl', data);
        // console.log(htmlStr);
        $('.bz_brans').html(htmlStr);
        // $('.rankingBtn').on('click',function () {
        //   location.href='ranking.html?brandtitleid='+data.result.brandTitleId
        // })
      
    }
  })
})//入口

$(".up,.top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
});