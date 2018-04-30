
    // 渲染商品标题
$.ajax({
    url: 'http://157.122.54.189:9090/api/getcategorytitle',
    type: 'get',
    success: function (data) {
        var html = template('title_tpl', data);
        $('.panel-group').html(html);
    }
})
// 点击标题获取目录，并渲染列表
$('.panel-group').on('click', '.panel-heading', function () {
    var $this = $(this);
    var isGet = $this.attr('data-isGet');
    // console.log(isGet);
    var id = $this.attr('href');
    var titleid = $this.attr('data-id');
    //    console.log(titleid);
    //    id=id.substr(1,id.length);
    //    console.log(typeof id);
     
    if (isGet == 'true') {
        $.ajax({
            url: 'http://157.122.54.189:9090/api/getcategory',
            type: 'get',
            data: {
                titleid: titleid
            },
            success: function (data) {
                // console.log(data);
                var html = template('list_tpl', data);
                console.log(data);
                console.log(html);
                $(id).find('.good_list').html(html);
                $this.attr('data-isGet',false);
            }
        })
    }

})


