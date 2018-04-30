/**
 * Created by Administrator on 2017/7/19.
 */
$(function(){

    //j接受url传入进来的参数
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
    console.log(o.getSearch().brandtitleid);
    //发出ajax请求
    $.ajax({
        url:'http://139.199.192.48:9090/api/getbrand',
        dataType:'jsonp',
        type:'get',
        data:{
            brandtitleid: o.getSearch().brandtitleid,
        },
        success:function(data){
            console.log(data);
        }
    })

})