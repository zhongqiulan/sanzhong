
// 进入比价搜索 开始渲染页面---------------
$.ajax({
    url:'http://139.199.192.48:9090/api/getcategorytitle',
    type:'get',
    datatype:'json',
    success:function (info) {
        var htmlstr=template("productlists",info);
        $(".seach_wl").html(htmlstr);

        // 渲染完成后点击商品分类 显示下拉框------------
        $('.headall').on("click",function () {
            var id=parseInt($(this).attr('data_id'));
            var _this=$(this);
            $.ajax({
                url:"http://139.199.192.48:9090/api/getcategory?titleid="+id,
                type:"get",
                datatype:'json',
                success:function (info) {
                      //console.log(info);
                      $(".tableall").hide();
                     // 请求成功显示表格----
                           var htmlstr=template("pdlist",info);
                          _this.next().html(htmlstr);
                          $(".xiajian").removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
                          _this.next().slideToggle();
                          _this.children().eq(1).toggleClass('glyphicon-menu-up');

                           // 点击商品名 跳转到相应的商品列表页-------
                         $(".table_wl a").on("click",function () {
                             //console.log(this);
                             var goodid=parseInt($(this).attr('data-goodid'));
                             //console.log(goodid);
                             location.href='list.html?categoryid='+goodid;
                             return false;
                         }) 
                }
            })
            return false;
        });
    }
})




