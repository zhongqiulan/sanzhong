/*优惠列表js*/
var search = location.search;//  ?tc_id=14&name=zhangsan&age=20
search = search.slice(1); //第一个参数是从哪里开始截取，第二个参数是截取到哪里，如果不写默认是截取到最后
// console.log(search);
var searchArr = search.split('&');  //searchArr是一个数组
 console.log(searchArr);
var obj = {};  //定义一个空对象 ，用来存储数据
for (var i = 0; i < searchArr.length; i++) {
    var arr = searchArr[i].split(',');
    for (var j = 0; j < arr.length; j++) {
        var temp = arr[j].split('='); //temp也是一个数组
        // console.log(temp);
        obj[temp[0]] = temp[1];
        console.log(temp);
    }

}
var id = obj.couponId;
var title = decodeURI(obj.couponTitle);
console.log(title);
document.querySelector('#title').innerHTML = title + '优惠券';
document.querySelector('.linkBtn').innerHTML = title + '优惠券';
$.ajax({
    url: 'http://139.199.192.48:9090/api/getcouponproduct',
    type: 'get',
    data: {couponid: id},
    dataType: 'JSON',
    success: function (info) {
        console.log(info);
        //渲染模板
        var htmlStr = template('product_tpl',info);
        $('.row').html(htmlStr);
    }
});

$('.row').on('click','.thumbnail',function(){
    var img = $(this).attr('data-img');
    document.querySelector('.product-mask').style.visibility = 'visible';
    document.querySelector('.product-mask').innerHTML = img;
    return false;
});
$('.product-mask').on('click',function(){
    document.querySelector('.product-mask').style.visibility = 'hidden';
})