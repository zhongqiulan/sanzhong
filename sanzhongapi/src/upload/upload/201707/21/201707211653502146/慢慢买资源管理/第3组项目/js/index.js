﻿/**
 * Created by Administrator on 2017/7/18.
 */

//获取url
//console.log(url);
$(function(){
    //发送ajax请求
    $.ajax({
        url:'http://139.199.192.48:9090/api/getindexmenu',
        dataType:"jsonp",
        success:function(data){
            console.log(data);
            var htmlStr=template('controllerPanal',data);
            $('.controlpanel').html(htmlStr);
        }
    })
    //将大于7的data-id选择器
    //点击更多按钮触发
    $('.controlpanel').on('click','[data-id=7]',function(){
        //console.log(this);
        //console.log($('.alink'));
        if($('.alink').hasClass('hide')){
            $('.alink').show().removeClass('hide').addClass('show');
        }else{
            $('.alink').hide().removeClass('show').addClass('hide');
        }
    })
    $.ajax({
        url:'http://139.199.192.48:9090/api/getmoneyctrl',
        dataType:"jsonp",
        success:function(data){
            console.log(data);
            var htmlStr=template('midea_Tmpl',data);
            $('.supyh').append(htmlStr);
        }
    })




})








