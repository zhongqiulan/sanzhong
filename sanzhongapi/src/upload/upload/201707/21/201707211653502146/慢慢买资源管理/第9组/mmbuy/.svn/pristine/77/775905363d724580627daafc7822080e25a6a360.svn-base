
var search = location.search;
var search = search.slice(1);
var arr = search.split("&");
var obj={};
for(var i=0;i<arr.length;i++){
  var arrNew = arr[i].split("=");
  obj[arrNew[0]]=arrNew[1];
}
 console.log(obj.productid);
id=obj.productid;
// 模板一
$.ajax({
  url:'http://157.122.54.189:9090/api/getproduct',
  type:'get',
  data:{
   productid:Number(id),
  },
  success:function(info){
    console.log(info);
    var htmlStr = template('shop_tpl',info.result[0]);
    // var htmlStr = template('shop_tpl',info);
    $('#mbyi').html(htmlStr);
  }

});

// 模板二
$.ajax({
  url:'http://157.122.54.189:9090/api/getproductcom',
  type:'get',
  data:{
   productid:Number(id),
  },
  success:function(info){
    console.log(info);
    var htmlStr = template('comment_tpl',info);
    // var htmlStr = template('shop_tpl',info);
    $('.comment_mber').html(htmlStr);
  }

});