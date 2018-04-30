$(function () {
    var url = config.getUrl('/api/getinlanddiscount');
    var url1 = config.getUrl('/api/getmoneyctrlproduct');
    $.ajax({
        url: url,
        dataType: "JSON",
        type: 'GET',
        success: function (info) {
            console.log(info);
            // id = info.result.v.productId
            var htmlStr = template('discount', info);
            $('.main>ul').html(htmlStr);
        }
    })
    $('.main>ul').on('click', 'li', function () {
        location.href = '../../dashboard/detailed.html'
    })
})