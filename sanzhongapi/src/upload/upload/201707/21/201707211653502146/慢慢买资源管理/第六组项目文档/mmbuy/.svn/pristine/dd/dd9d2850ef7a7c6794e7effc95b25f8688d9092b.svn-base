/**
 *     author:郑伟雄
      data:2017/7/19;
 */
define([
    'jquery',
    'template'
], function($, template) {
    function getId() {
  var search = location.search
  search = search.slice(1);
  var searchArr = search.split('&');
  var obj = {};
  for (var i = 0; i < searchArr.length; i++) {
    var temp = searchArr[i].split('='); 
   
    obj[temp[0]] = temp[1];
  }
  return obj;
 }

    var productid  = getId().productid ;

    $.ajax({
        url:'http://139.199.192.48:9090/api/getproductcom',
        type:'get',
        data:{productid:productid },
        success:function(info){
            var str = template('tpl_comment',info) ;
            $(".content").html(str)
        }
    })

});