
/**
 *   author:郑伟雄
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


var page = getId().brandtitleid;
$.ajax({
    url: 'http://139.199.192.48:9090/api/getbrandproductlist',
    type: 'get',
    data: {
        brandtitleid: page,
    },
    success: function (info) {
        var nameStr = template('tpl_branNam',info);
        $(".branName").html(nameStr);
        var str = template('tpl_sales',info);
        $(".show ul").html(str)
    }
})

 $(".show  ul").on("click","#shou_produt",function(){
     var productid = $(this).attr("data-produ") ;
     var  numbe = $(this).attr("data-index")
     location.href = 'criticism.html?productid='+productid +"&numbe=" +numbe +"&page="+page ;
 })
});