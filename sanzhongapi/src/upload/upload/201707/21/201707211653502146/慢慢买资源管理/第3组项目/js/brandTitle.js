/**
 * Created by Administrator on 2017/7/18.
 *
 * Author:吴工
 */

$(function(){
    $.ajax({
        url:'http://139.199.192.48:9090/api/getbrandtitle',
        dataType:'jsonp',
        success:function(data){
            //console.log(data);
            var htmlStr=template('tmpl_rkList',data);
            $('.rkList').html(htmlStr);
            $('.rkList').on('click','li>a',function(){
                //console.log();
                var text=$(this).text();
                //字符串截取
                text=text.slice(0,-4);
                //console.log(text);
                $.cookie('info',text,{expires:1});
                $(this).attr('href',href);
            })
        }
    })

    /*点击链接截取字符串*/


})







