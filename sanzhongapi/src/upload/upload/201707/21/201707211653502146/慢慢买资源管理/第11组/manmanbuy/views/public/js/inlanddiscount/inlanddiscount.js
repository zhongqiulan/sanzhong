define(['jquery','template'], function ($,template) {
    $(function () {
        $.ajax({
            url: "http://157.122.54.189:9090/api/getinlanddiscount",
            type: "GET",
            dataType: "JSON",
            success: function (data) {
                console.log(data);
                var html = template("discountProductTmp", data);
                $('.discount-list').html(html);

                $('.discount-list').on('click','li',function(){
               var id = $(this).attr('data-id');
            //    console.log(id);
            location.href = '/views/inlanddiscount/productdetails?productId='+id;
            return false;
           })
            }
        })

    })
})

