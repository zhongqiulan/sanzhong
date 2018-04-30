define(['jquery','template','utils'], function ($,template,utils) {
    var id = utils.queryString().productId;
    console.log(id);
    $.ajax({
        url: 'http://157.122.54.189:9090/api/getmoneyctrlproduct',
        dataType: 'JSON',
        type: "GET",
        data: {
            productid: id,
        },
        success: function (data) {
            console.log(data);
              var html = template('m-mes',data);
              $('.main').html(html);

              
        }
    })

   
})