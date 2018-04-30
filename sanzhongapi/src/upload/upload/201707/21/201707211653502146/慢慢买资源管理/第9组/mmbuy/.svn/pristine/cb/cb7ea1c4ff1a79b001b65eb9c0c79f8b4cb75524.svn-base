$(function(){
    // alert(123);
    $.ajax({
        url:'http://139.199.192.48:9090/api/getcoupon',
        type:'get',
        dataType:'JSON',
        success:function(info){    
            // console.log()     
            //     console.log(info);
                var htmlStr = template('coupon_tab',info);
                $('.coupon-box').html(htmlStr); 
        }
    })
})