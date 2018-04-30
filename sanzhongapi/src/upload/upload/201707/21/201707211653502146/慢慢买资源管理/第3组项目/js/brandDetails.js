/**
 * Created by Administrator on 2017/7/19.
 */
$(function () {
    var o = {
        getSearch: function () {
            var search = location.search;
            search = search.slice('1');
            var arr = search.split('&');
            var objSer = {};
            for (var i = 0; i < arr.length; i++) {
                var newArr = arr[i].split('=');
                objSer[newArr[0]] = newArr[1];
            }
            return objSer;
        }
    }

    $.ajax({
        url: 'http://139.199.192.48:9090/api/getbrand',
        dataType: 'jsonp',
        data: {
            brandtitleid: o.getSearch().brandTitleId
        },
        success: function (data) {
            //console.log(data);
            //console.log(data);
            data.title = $.cookie('info');
            var htmlStr = template('tmpl_rkList', data);
            $('.datainfo').html(htmlStr);
        }
    });

    $.ajax({
        url: 'http://139.199.192.48:9090/api/getbrandproductlist',
        dataType:'jsonp',
        type: 'get',
        data: {
            brandtitleid: o.getSearch().brandTitleId,
            //pagesize: 4
        },
        success: function (data) {
            console.log(data);
            var htmlStr=template('tmpl_saves',data);
            $('.Sales_volume').html(htmlStr)
        }
    });


    $.ajax({
        url:"http://139.199.192.48:9090/api/getproductcom",
        dataType:'jsonp',
        type:'get',
        data:{
            productid:o.getSearch().brandTitleId
        },
        success:function(data){
            //console.log(data);
            data.title= $.cookie('info');
            var htmlStr=template('tmpl_comment',data);
            $('.comment').html(htmlStr);
        }
    })







})