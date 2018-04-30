
    // 获取url上面的值，渲染页面
    var id = utils().queryString().categoryId;
    id = parseInt(id);
    console.log(id);
    var category = utils().queryString().category;
    category = decodeURIComponent(category)
    console.log(category);
    // 初始化页面
    var pageid = 1;
    var pages;
    getAjax(pageid);


    //渲染产品页面
    function init() {

        $.ajax({
            url: 'http://139.199.192.48:9090/api/getproductlist',

            data: {
                categoryid: id,
                pageid: 1
            },
            success: function (data) {
                data.category = category;
                var html = template('catalog_tpl', data);
                $('.cataloglist >.catalist').html(html);
            }
        });
    }
    //初始化数据
    init();
    // **************************************跳转页面**************************************
 $("#pageSize").on("change",function(){
     pageid=this.value;
     console.log(pageid)
     getAjax(pageid);
 })




// ***************************************上一页***************************************
$(".last-page").on("click",function(){
    if(pageid<=1){
        alert("第一页啦！");
        return;
    }
    pageid--;
    console.log(pageid)
    getAjax(pageid);
})




// ***************************************下一页***************************************
$(".next-page").on("click",function(){
    if(pageid>=pages){
        alert("已经是最后一页啦！")
        return;
    }
    pageid++;
    console.log(pageid);
    getAjax(pageid);
})




// **************************************封装ajax**************************************
function getAjax(pageid){
    $.ajax({
        url:"http://139.199.192.48:9090/api/getproductlist",
    
        data:{
             categoryid: id,
            pageid:pageid
        },
        success:function(data){
            console.log(data)
            var htmlStr = template("catalog_tpl",data);
            $(".cataloglist >.catalist").html(htmlStr);
            pages = Math.ceil(data.totalCount/data.pagesize);
            var pageStr = "";
            for(var i=1;i<=pages;i++){
                pageStr += "<option value='"+i+"'>"+i+"/"+pages+"</option>"; 
            }
            $("#pageSize").html(pageStr);
            
            //下拉框选中的页数
            $('#pageSize option').attr('selected', false);
            $('#pageSize option[value=' + pageid + ']').prop('selected', true);
                    
        },
    
    })
}
