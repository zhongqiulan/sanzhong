
function getUrl() {
  var o = {
    queryString: function () {
      var search = location.search;
      search = search.slice(1);
      var searchArr = search.split('&');
      var obj = {};
      for (var i = 0; i < searchArr.length; i++) {
        var temp = searchArr[i].split('=');
        obj[temp[0]] = temp[1];

      }
      return obj;
    }
  }
  return o;
}
var obj = getUrl();
var id = obj.queryString().productId;
console.log(id);
$.ajax({
  url: 'http://139.199.192.48:9090/api/getdiscountproduct',
  type: 'get',
  data: {
    productid: id
  },
  beforeSend: function () {
    $('.loading').show();
  },
  success: function (info) {
    $('.loading').hide();
    var html = template('comment_info_tpl', info);
    $('.zhekou_content').html(html);
    $('.reply .form textarea').addClass('input_area');

    // 注册点击事件,添加评论到最新评论下面
    var obj2 = {};
    $('.zhekou_content').on('click', '#ctl00_ContentBody_Button1', function () {
      var submitInfo = $('#ctl00_ContentBody_txt_nr').val();
      obj2.user_name = $('.reply .form input').prop('value');
      var time = new Date();
      time = time.toLocaleDateString() + ' ' + time.toTimeString().slice(0, 8);
      obj2.time = time;
      obj2.text = submitInfo;
      // 判断输入内容的字数
      if (obj2.text == '') {
        alert('请输入评论!');
        return;
      } else if (obj2.text.length < 6) {
        alert('评论不能少于6字!');
        return;
      } else {
        alert('评论成功!');
      }

      // 渲染追加评论模板
      var appendComment = template('submitInfo_tpl', obj2);
      $('.newcomment').prepend(appendComment);
      $('#ctl00_ContentBody_txt_nr').val('');
    })
  }
});
