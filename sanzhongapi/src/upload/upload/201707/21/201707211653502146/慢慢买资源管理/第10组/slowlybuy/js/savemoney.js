var currentPage = 1;
var pages;
// //总页数
function getUse(pageid) {
    //    alert(123);
    //每页的数量
    //当前的页数
    currentPage = pageid || 1;
    pages = 0;
    var pageArr = [];
    var url = config.getUrl('/api/getmoneyctrl');
    $.ajax({
        // url: 'http://139.199.192.48:9090/api/getmoneyctrl',
        url: url,
        dataType: 'JSON',
        type: 'get',
        data: {
            pageid: currentPage
        },
        success: function (info) {
            // console.log(info);

            var htmlStr = template('saveMoney', info);
            $('.serialList').html(htmlStr);
            // //总页数=总条数/每页的数量
            pages = Math.ceil(info.totalCount / info.pagesize);
            //遍历页数，将数据存入数组中
            var pageStr = '';
            for (var i = 1; i <= pages; i++) {
                if (i == currentPage) {
                    pageStr += '<option selected="selected" value=' + i + '>' + i + '/' + pages + '</option>'
                } else {
                    pageStr += '<option value=' + i + '>' + i + '/' + pages + '</option>'
                }
            }
            $('#selectPages').html(pageStr);
        }
    })//ajax
}//geturl

getUse();
//下一页
$('.next').on('click', function () {
    if (currentPage >= pages) {
        alert('已经是最后一页了')
    } else {
        currentPage++
        $('#selectPages option').val(currentPage)
    }
    getUse(currentPage)
})

//上一页
$('.prev').on('click', function () {
    if (currentPage >1) {
           currentPage--;
        $('#selectPages option').val(currentPage)
       
    } else {
      alert('当前已经是第一页');
    }
    getUse(currentPage)
})
//点击option跳转对应的页面
$('#selectPages').change(function(){
    //获取当前页数的id
    var id= $(this).val();
    getUse(id);
    
})

//返回顶部
$(".back-top").on('click', function () {
    $("html,body").animate({ scrollTop: 0 }, 100);
});
                                                                                                
//列表跳转
$('.serialList').on('click', '.media', function () {
    var id = $(this).attr('data-id');
    location.href = '../pages/savemoney_step.html?productid=' + id;

})