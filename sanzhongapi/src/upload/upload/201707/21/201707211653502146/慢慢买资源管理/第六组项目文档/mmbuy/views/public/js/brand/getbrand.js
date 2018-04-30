/**
 *    author:郑伟雄
      data:2017/7/19;
 */
define([
    'jquery',
    'template'
], function($, template) {
    $(function(){
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
var id = getId().brandtitleid;
$.ajax({
    url: 'http://139.199.192.48:9090/api/getbrand',
    type: 'get',
    data: {
        brandtitleid: id
    },
    success: function (info) {
        var public = '';
        if(info.result[0].brandName.length==4){
            public = info.result[0].brandName.substr(-2)
        }else{
            public = info.result[0].brandName.substr(-4)
        }
        var objStr = template("tpl_head",{brand:public});
        $(".all_recomment").html(objStr) ;


        var str = template('tpl_brand_good', info);
        $(".content  ul").html(str)

    }
})
$(".content  ul").on("click", "#brand_good", function () {
    var res = $(this).parent().attr("brandtitleid") ;
    location.href = 'fptv.html?brandtitleid=' + res   ;
})
})
});