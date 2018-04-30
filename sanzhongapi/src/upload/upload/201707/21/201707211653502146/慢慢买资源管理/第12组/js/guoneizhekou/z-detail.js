$(function () {

    function utils (){
    var o = {
    queryString: function () {
      // 获取当前url中的tc_id
      var search = location.search;
    //   console.log(search);
      // 截取字符串
      search = search.slice(1);
      // 分割字符串
      var searchArr = search.split("&");
      // console.log(searchArr);
      var obj = {};
      // 遍历数组
      for (var i = 0; i < searchArr.length; i++) {
        // 分割字符串
        var temp = searchArr[i].split("=");
        // console.log(temp);
        // 存入对象中
        obj[temp[0]] = temp[1];
      }
      return obj; //要把对象返回值
    }
  }
  return o;
}
    var id = utils().queryString().id;

    console.log(id);
    $.ajax({
            url: "http://157.122.54.189:9090/api/getdiscountproduct",
            type: 'get',
            dataType: 'Json',
            data: {
                productid: id
            },
            success: function (data) {
                console.log(data);
                var htmlStr = template("xq_detail", data.result[0]);
                $("#xq_shopping").html(htmlStr);
                // location.href = 'http://localhost/mmb/ChildPage/D-discount/detail.html?id=' + id
            }
        })
})