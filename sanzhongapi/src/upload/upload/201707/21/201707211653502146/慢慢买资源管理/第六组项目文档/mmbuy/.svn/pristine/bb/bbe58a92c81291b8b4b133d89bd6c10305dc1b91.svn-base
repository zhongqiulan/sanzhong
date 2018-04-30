/**
 * author:kuanglq
 * date:2017-7-18
 */

/**
 * 思路:通过发送ajax请求获取数据,渲染模版
 */

define([
  'jquery',
  'template'
], function($, template) {
  $(function(){
  //发送ajax请求数据
    $.ajax({
      url:'http://139.199.192.48:9090/api/getsitenav',
      type:'get',
      dataType:'JSON',
      success:function(data){
        var htmlStr = template("getsitenav_tpl",data);
        $('#sitennav_link').html(htmlStr);
      }
    })
  })
  
});
