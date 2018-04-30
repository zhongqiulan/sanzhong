//返回上一个页面
$('.return').on('click',function(){
  history.back();
});

//发送ajax获取数据

var url = config.getUrl('/api/getdiscountproduct');

function renderSearch() {
  var search = location.search;
  search = search.slice(1); 
  var searchArr = search.split('&'); 
  var obj = {};
  for (var i = 0; i < searchArr.length; i++) {
    var temp = searchArr[i].split('=');
    obj[temp[0]] = temp[1];
  }
  return Number(obj.id);
}
var id = renderSearch();


$.ajax({
  url: url,
  dataType: 'json',
  type: 'get',
  data: {
    productid: id
  },
  success: function (info) {
    var htmlStr = template('pro_tpl', info.result[0]);
    $(".views").html(htmlStr);
    // var htmlStr1 = template('title_tpl', info.result[0]);
    // $("title").html(htmlStr1);
    var titleStr = info.result[0].productName;
    $('title').html(titleStr);
  }
});

