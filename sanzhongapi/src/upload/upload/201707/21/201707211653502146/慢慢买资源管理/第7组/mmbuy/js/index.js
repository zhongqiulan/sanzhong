$(function () {
    var url = config.getUrl('/api/getindexmenu');
    // console.log(url);
    $.ajax({
        url: url,
        dataType: 'JSON',
        type: "GET",
        success: function (data) {
            // console.log(data);
            var html = template('temp', data);
            $('.menu').html(html);
        }
    })
    //    <!--超级折扣推荐-->
 var url2 = config2.getUrl('/api/getmoneyctrl');
            // console.log(url2);
            $.ajax({
                url: url2,
                dataType: 'JSON',
                type: "GET",
                success: function (data) {
                //    console.log(data);
                    var html2 = template('temp2', data);
                    $('.cjtj').html(html2);
                }
            })


})


