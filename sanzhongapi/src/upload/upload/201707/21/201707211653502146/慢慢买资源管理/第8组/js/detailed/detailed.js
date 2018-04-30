$(function () {
    var url = config.getUrl('/api/getdiscountproduct');
    var id = Number(config.queryString())  
    console.log(config.queryString()); 
    // console.log(typeof id);
    $.ajax({
        url: url,
        data:{productid:id},
        dataType: "JSON",
        type:'GET',
        success: function (info) {
            console.log(info);
            var htmlStr = template('detailed', info);
            $('.detailed_main').html(htmlStr);
        }
    })
    // $('.main>ul>li').on('click','li',function () {
    //     location.href = '../pages/detailed.html'
    // })
})
