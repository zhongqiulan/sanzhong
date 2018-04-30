

// ************************************初始化页面**************************************
var pageid=1;
var pages;
getAjax(pageid);


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
        url:"http://139.199.192.48:9090/api/getmoneyctrl",
        type:"get",
        dataType:"JSON",
        data:{
            pageid:pageid
        },
        success:function(data){
            console.log(data)
            var htmlStr = template("content_tpl",data);
            $(".content").html(htmlStr);
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