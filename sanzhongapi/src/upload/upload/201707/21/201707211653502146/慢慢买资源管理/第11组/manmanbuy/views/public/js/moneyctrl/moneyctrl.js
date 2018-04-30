define(['jquery','template'],function($,template){
    var currentPage = 1;
var totalPage;

function getData() {
    $.ajax({
        url: 'http://157.122.54.189:9090/api/getmoneyctrl',
        dataType: 'JSON',
        type: "GET",
        data: {
            pageid:currentPage ,

        },
        success: function (data) {
            console.log(data);
            var html = template('pc-lsis-tpl', data);
            $('.m-pc-ls').html(html);

            // currentPage = data.pageid;
            totalPage = Math.ceil(data.totalCount / data.pagesize);
            // var htmlstr = '';
            // for (var i = 1; i <= totalPage; i++) {
            //     htmlstr += "<option>" + i + "/" + totalPage + "</option>"
            // }
            // $('#currentTotal').html(htmlstr);
            $("#currentTotal span").html(currentPage+"/"+totalPage)
           $('.m-pc-ls').on('click','li',function(){
               var id = $(this).attr('data-id');
            //    console.log(id);
            location.href = '/views/moneyctrl/moneyctrl-message?productId='+id;
            return false;
           })

        }
    })
}

getData();

$('.down-page').on('click', function () {
    currentPage++;
    if (currentPage >= totalPage) {
       currentPage =totalPage;
    //    return;
    } 
    getData();
})


$('.up-page').on('click', function () {
    console.log(currentPage)
    currentPage--;
    if (currentPage <= 1) {
       currentPage=1
    //    return;
    } 
    getData();
})
})
    
