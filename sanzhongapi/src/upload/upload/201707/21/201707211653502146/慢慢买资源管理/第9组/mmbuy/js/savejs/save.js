//第一步 封装ajax
function ajaxsave(id) {//这里要给形参
    $.ajax({
        url: "http://139.199.192.48:9090/api/getmoneyctrl",
        dataType: 'JSON',
        type: "GET",
        data: {
            pageid: id,
        },
        success: function (data) {
            console.log(123);
            console.log(data);
            console.log(data.result);
            var htmlstr = template("save_list_tmp", data);
            $(".save_list").html(htmlstr);
        }
    });
}

//通过点击a标签获取id;
$.ajax({
    url: "http://139.199.192.48:9090/api/getmoneyctrl",
    dataType: 'JSON',
    type: "GET",
    success: function (data) {
        console.log(123);
        console.log(data);                 
        var htmlstr = template("save_list_tmp", data);
        $(".save_list").html(htmlstr);
        $(".save_list").on("click",".save_list_a",function (){         
                var id=$(this).attr("data-value");           
                location.href="discount.html?productid="+id;                 
            }
        )     
    }
})
//第四步.获取option的value值
$("select#status").change(function () {
    var id = $(this).val();
    console.log(id);
    ajaxsave(id);
});

var id="";
//第五步,点击上一页
$(".top_page_word").click(function () {
    id = $("select").find("option:selected").attr('value')  
    if (id == 1) {
        alert("已经是第一页了");
    } else if (1 < id < 13) {
        id=Number(id)-1;
        $("select").find("option:selected").attr('value',id); 
          $("select").find("option:selected").html(id+'/14');      
       ajaxsave(id);
    }
})
//第六步,点击下一步  
$(".last_page_word").click(function () {
    id = $("select").find("option:selected").attr('value')
    console.log(id);     
    if (id == 14) {
        alert("已经是最后一页了");
    } else if (1 <= id < 13) {
        id=Number(id)+1;
        $("select").find("option:selected").attr('value',id);   
          $("select").find("option:selected").html(id+'/14');    
       ajaxsave(id);
    }
})
//第七步  上下滑动
    var backToTop = document.querySelector("#backToTop");
    var screenh = document.body.clientHeight;
    window.onscroll = function () {
        var scrolltop = document.body.scrollTop;
    }
    backToTop.onclick = function () {
        document.body.scrollTop = 0;
    }
//第八步  跳转到主页
    function back_to_main(dom) {
        dom.on("click",function(){
            location.href="../../index.html";
        })
    }
    back_to_main( $(".to_save_word"));
    back_to_main($(".back_main"));

