
$(function () {

  // 获取当前url中的brandtitleid
  var search = location.search;//  ?brandtitleid=0
  search = search.slice(1); //第一个参数是从哪里开始截取，第二个参数是截取到哪里，如果不写默认是截取到最后
  // console.log(search);
  var searchArr = search.split('&');  //searchArr是一个数组
  // console.log(searchArr);
  var obj = {};  //定义一个空对象 ，用来存储数据
  for (var i = 0; i < searchArr.length; i++) {
    var temp = searchArr[i].split('='); //temp也是一个数组
    // console.log(temp);
    obj[temp[0]] = temp[1];
    // console.log(obj);
    var id = obj.brandtitleid;
    // console.log(id);
  }

  var url = config.getUrl('/api/getbrand');
  // console.log(url);
  $.ajax({
    url: url,
    dataType: 'JSON',
    type: "get",
    data: {
      brandtitleid: id
    },
    success: function (data) {
      // console.log(data);

      var htmlStr = template('rk_list_tpl', data);
      // if (data.result[index].brandId >= 10) {
      //   
      // }
      // var arr = [];
      // for (var i = 0; i < data.result.length; i++) {



        // console.log(data.result[i].brandId);
        // arr.push(data.result[i].brandId % 10);
        //  console.log(data.result[i].brandId );
        // for (var j = 0; j < arr.length; j++) {
        //   
        //   data.result[i].vid = arr[j];
        // }
        //  data.result[i].vid = arr[i];
        //  data.result[i].brandId =data.result[i].vid
      // }
     
      // console.log(data);
      // console.log(arr);









      // console.log(data.result[index].brandId);

      // console.log(htmlStr);
      $('.bz_brans').html(htmlStr);
    }
  })
});
// 品牌排行模板-------------------------------




// 品牌销量模板-------------------------------
$(function () {

  var search = location.search;//  ?brandtitleid=0
  search = search.slice(1); //第一个参数是从哪里开始截取，第二个参数是截取到哪里，如果不写默认是截取到最后
  // console.log(search);
  var searchArr = search.split('&');  //searchArr是一个数组
  // console.log(searchArr);
  var obj = {};  //定义一个空对象 ，用来存储数据
  for (var i = 0; i < searchArr.length; i++) {
    var temp = searchArr[i].split('='); //temp也是一个数组
    // console.log(temp);
    obj[temp[0]] = temp[1];
    // console.log(obj);
    var id = obj.brandtitleid;
    // console.log(id);
  }
  var url = config.getUrl('/api/getbrandproductlist');
  // console.log(url);
  $.ajax({
    url: url,
    dataType: 'JSON',
    type: "get",
    data: {
      brandtitleid: id
    },
    success: function (data) {
      var htmlStr = template('bz_sales_tpl', data);
      // console.log(htmlStr);
      $('.bz_sales').html(htmlStr);
      // console.log(data.result.productId);

    }
  })

  // 品牌销量模板-------------------------------



  // 用户评论-------------------------------


  var url = config.getUrl('/api/getproductcom');
  // console.log(url);


  $.ajax({
    url: url,
    dataType: 'JSON',
    type: "get",
    data: {
      productid: id
    },
    success: function (data) {
      var htmlStr = template('bz_comment_tpl', data);
      // console.log(htmlStr);
      $('.bz_comment').html(htmlStr);
    }
  })
})
