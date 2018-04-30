define(['jquery','template'],function($,template){
    var currentPage = 1;
var pagesize = 10;
var totalPage;

function getData(page) {
    $.ajax({
        url: 'http://157.122.54.189:9090/api/getmoneyctrl',
        dataType: 'JSON',
        type: "GET",
        data: {
            pageid: page,
            pagesize: pagesize

        },
        success: function (data) {
            console.log(data);
            var html = template('pc-lsis-tpl', data);
            $('.m-pc-ls').html(html);

            currentPage = data.pageid;
            totalPage = Math.ceil(data.totalCount / pagesize);
            var htmlstr = '';
            for (var i = 1; i <= totalPage; i++) {
                htmlstr += "<option>" + i + "/" + totalPage + "</option>"
            }
            $('#currentTotal').html(htmlstr);
           $('.m-pc-ls').on('click','li',function(){
               var id = $(this).attr('data-id');
            //    console.log(id);
            location.href = '/views/haitao/haitao-message?productId='+id;
            return false;
           })

        }
    })
}

getData(currentPage);

$('.down-page').on('click', function () {
    if (currentPage >= totalPage) {
        alert("已经是最后一页了...");
       return;
    } else {
        currentPage++;
    }

    getData(currentPage);
})


$('.up-page').on('click', function () {
    if (currentPage >= 1) {       
       return;
    } else {
        currentPage--;
    }

    getData(currentPage);
})
})
    
