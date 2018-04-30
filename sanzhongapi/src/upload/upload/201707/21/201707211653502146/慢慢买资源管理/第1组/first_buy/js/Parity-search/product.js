define(['jquery', 'template', ], function($, template) {
    product_render();

    $.ajax({
        url: tool.getUrl('api/getcategorybyid'),
        type: 'get',
        data: {
            categoryid: tool.getSearch().categoryId
        },
        success: function(info) {
            $("#a_creat").html(info.result[0]['category']).prop("href", "/Parity-search/list?id=" + tool.getSearch().categoryId);
        }

    })


    function product_render() {
        $.ajax({
            url: tool.getUrl('api/getproduct'),
            type: 'get',
            data: {
                productid: tool.getSearch().id
            },
            dataType: 'Json',
            success: function(info) {
                var html = template("product_tpl", info);
                $('.products').html(html);
            }
        })

        $.ajax({
            url: tool.getUrl('api/getproductcom'),
            type: 'get',
            data: {
                productid: tool.getSearch().id
            },
            dataType: 'Json',
            success: function(info) {
                var html = template("comment_tpl", info);
                $('.comments').html(html);
            }
        })
    }
})