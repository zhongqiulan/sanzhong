var search = location.search;
var search = search.slice(1);
var arr = search.split("&");
var obj = {};
for (var i = 0; i < arr.length; i++) {
  var arrNew = arr[i].split("=");
  obj[arrNew[0]] = arrNew[1];
}
//渲染分类名称
$.ajax({
  url: "http://157.122.54.189:9090/api/getcategorybyid",
  dataType: 'json',
  type: 'get',
  data: {
    categoryid: Number(obj.categoryId)
  },
  success: function (info) {
    var htmlStr = template('info_top_tpl', info.result[0]);
    $('.info_top').html(htmlStr);
  }
});
//封装ajax获取数据渲染模板
function renderAjax(pageid) {
  $.ajax({
    url: 'http://157.122.54.189:9090/api/getproductlist',
    type: 'get',
    dataType: 'Json',
    data: {
      categoryid: Number(obj.categoryId),
      pageid: i
    },
    success: function (info) {
      var page = Math.ceil(info.totalCount / info.pagesize);
      if (i > page) {
        $('.next').attr('disabled', 'disabled');
        i--;
        alert('已经是最后一页了');
        return;
      } else {
        $('.next').removeAttr('disabled');
        var htmlStr = template('prolist_tpl', info);
        $('#tab_content').html(htmlStr);
        $('#sel').val(i);
        $('body,html').animate({scrollTop:0},0);
      }
    }
  });
}
//渲染下拉选项框
$.ajax({
  url: 'http://157.122.54.189:9090/api/getproductlist',
  type: 'get',
  dataType: 'Json',
  data: {
    categoryid: Number(obj.categoryId),
    pageid: i
  },
  success: function (info) {
    var page = Math.ceil(info.totalCount / info.pagesize);
    var arr = [];
    for (var j = 1; j <= page; j++) {
      var obj = {};
      obj['index'] = j;
      arr[arr.length] = obj;
    }
    var htmlStr = template('list_btn_tpl', {
      temp: arr
    });
    $('#sel').html(htmlStr);
     var pageIndex = $('#sel').val();
  }
});

var i = 1
//上下反野功能
renderAjax(i); 
$('.next').on('click', function () {
  i++
  renderAjax(i);
})
$('.prev').on('click', function () {
  if (i == 1) {
    alert('已经是第一页了');
    return;
  }
  i--;
  renderAjax(i)
  
})

//选择页数翻页
$('#sel').change(function(){
  i = Number($(this).val())
  renderAjax(i);
})

//返回顶部
$('.f_top').animate({scrollTop:0},0);