$(".navbar").on("click","li",function () {
    $("li").children().removeClass('active_wl');
    $(this).children().addClass('active_wl');
});

// 点击筛选 弹出----------
$("#choice_wl").on("click",function () {
     $(".asidecontent").css("display","block");
    //$(".content").show(1000);
    $(".content").css('left',0);
});

$(".close_wl").on("click",function () {
     $(".asidecontent").css("display","none");
     $(".content").css('left','-80%');
})

// 筛选弹窗 点击下键 显示所有品牌-------
$(".bottombtn").on("click",function () {
    $(".rowbody .sixli").nextAll().slideToggle();
    $(this).toggleClass('glyphicon-menu-up');

})


var obj={};
var search=location.search;
search=search.slice(1);
var searcharry=search.split('&');
for(var i=0;i<searcharry.length;i++){
       var tempinfo=searcharry[i].split('=');
       obj[tempinfo[0]]=tempinfo[1];
 }


bingPage(1);
var nowpage=1;
var Allpage=0;

function bingPage(currentpage) {
    // 发送ajax-----------------------------------
$.ajax({
   url:"http://139.199.192.48:9090/api/getproductlist",
   type:'get',
   data:{
       categoryid:obj.categoryid,
       pageid :currentpage
   },
   success:function (info) {
     var arrpage=[];
    //上下页切换--------------
    // 获取总页数和当前页数
     var pagesall=Math.ceil(info.totalCount/info.pagesize);
     for(var i=1;i<=pagesall;i++){
         arrpage.push(i);
     }
    Allpage=pagesall;
    info.allpage=pagesall;
    info.arrpage=arrpage;
    info.currentpages=currentpage;
    //console.log(info.currentpages)
       var htmlstr=template("list_tpls",info);
       $(".navcontianer").html(htmlstr);

    // 切换页数
    $('#select option').eq(currentpage-1).prop("selected","selected");
    $(document).scrollTop(0);//刷新下一页 回到顶部
   }
})
}

// 注册事件
function lastpage() {
    if(nowpage==1){
        alert("没有上一页了");
        return;
    }
    nowpage--
    bingPage(nowpage);
}

function nextpage() {
    if(nowpage>=Allpage){
        alert("没有下一页了");
        return;
    }
    nowpage++;
    bingPage(nowpage);
}

$(".navcontianer").on('change','#select',function () {
    //alert(1);
    var index=parseInt($("option:selected").val());
    //console.log(index);
    nowpage=index+1;
    bingPage(nowpage);
})


