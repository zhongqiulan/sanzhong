 $(function(){


var search = location.search;

search = search.slice(1);
// console.log(search);
var arr = search.split('=');
// console.log(arr);
var id = arr[1];
// console.log(id);

 
  $.ajax({
 url:'http://139.199.192.48:9090/api/getinlanddiscount?id=id',
 data:{
  productId:id
 },
 dataType:'JSON',
 success:function(data){
 console.log(data);
   var htmlStr=template('main-tpl',data.result[id]); 
     $('.content-top').html(htmlStr);
     document.title = data.result[id].productName;
 }
})
 })
