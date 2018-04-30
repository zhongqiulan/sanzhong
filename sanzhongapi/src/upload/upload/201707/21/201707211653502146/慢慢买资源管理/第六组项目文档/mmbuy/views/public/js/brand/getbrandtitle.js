function queryString() {
  var search = location.search
  search = search.slice(1);
  var searchArr = search.split('&');
  var obj = {};
  for (var i = 0; i < searchArr.length; i++) {
    var temp = searchArr[i].split('='); //temp也是一个数组
    // console.log(temp);
    obj[temp[0]] = temp[1];
  }
  return obj;
}


$.ajax({
    url: 'http://139.199.192.48:9090/api/getbrandtitle',
    type: 'get',
    success: function (info) {
        var str = template('tpl_brand', info);
        $(".content  ul").html(str)
    }
})

$(".content ul").on("click", '#brand_Title', function () {
    var res = $(this).attr('brandTitle');
    location.href = 'getbrand.html?brandtitleid=' + res
})
