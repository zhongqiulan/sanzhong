$(function(){
    //产品列表请求
    $.ajax({
        url: config.getUrl('/api/getbrandproductlist'),
        dataType: 'JSON',
        type: 'get',
        data: {
            brandtitleid: o.queryString().id
            // pagesize: 10
        },
        success: function(data){
            console.log(data);
            data.pages = Math.ceil(data.totalCount / data.pagesize);

            var tplHtml = template('temp_product_list',data);
            $('.product-content').html(tplHtml);
        },
        error: function(error){
            console.log('请求错误');
        }
    });


    //上一页
    $('.product-content').on('click','#prev',function(){
        var totalPage = parseInt($('#selectPage').attr('data-pages'));
        var index = parseInt($('#selectPage').attr('data-index'));

        --index;
        console.log(index);
        if(!index) {
            alert('已经是第一页了');
            return;
        }

        $('#selectPage option').prop('selected',false);
        $('#selectPage option[value='+index+']').prop('selected',true);
    });

    //下一页
    $('.product-content').on('click','#next',function(){
        var totalPage = parseInt($('#selectPage').attr('data-pages'));
        var index = parseInt($('#selectPage').attr('data-index'));

        ++index;
        console.log(index);
        if(index > totalPage) {
            alert('最后一页了');
            return;
        }

        $('#selectPage option').prop('selected',false);
        $('#selectPage option[value='+index+']').prop('selected',true);
    });

    //下拉选项分页
    // $('.selectPage').change(function(){

    // });

});