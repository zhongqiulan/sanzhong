
var obj={};
var search=location.search;
search=search.slice(1);
var searcharry=search.split('&');
for(var i=0;i<searcharry.length;i++){
       var tempinfo=searcharry[i].split('=');
       obj[tempinfo[0]]=tempinfo[1];
 }
 //console.log(obj.categoryid);

//发送ajax请求三级分类数据
$.ajax({
    url:"http://139.199.192.48:9090/api/getcategorybyid",
    type:"get",
    data:{
        categoryid:obj.categoryid
    },
    success:function (info) {
        //console.log(info);
        var htmlstr=template("threetypetpl",info.result[0]);
        $(".nav").html(htmlstr);
    }
})

// 渲染商品信息-------------

//console.log(obj.productid);
$.ajax({
    url:"http://139.199.192.48:9090/api/getproduct",
    type:"get",
    data:{productid:obj.productid},
    success:function (datas) {
        //console.log(datas);
        var htmlstr=template("goodtpl",datas);
       // console.log(htmlstr);
        $(".show").html(htmlstr);
    }
});



// 渲染评价模块------------------------
$.ajax({
    url:"http://139.199.192.48:9090/api/getproductcom",
    type:"get",
    data:{productid:obj.productid},
    success:function (info) {
        console.log(info);
        var htmlstr=template("compareprice",info);
        $('.good_pj').html(htmlstr);
    }
})

// 点击 进行切换--------------

$(".show").on("click",'.table-nav ul li',function () {
    var indexs=$(this).attr('data_id');
    $(".threeangle").css("left",15+(indexs-1)*35+"%");
    if(indexs==1){
      $(".compareprice").show();
      $(".good_pj").show();
      $(".productdata").hide();
  }
  if(indexs==2){
      $(".compareprice").hide();
      $(".good_pj").hide();
      $(".productdata").show();
  }
  if(indexs==3){
      $(".compareprice").hide();
      $(".good_pj").show();
      $(".productdata").hide();
  }
})