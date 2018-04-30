//点击当前的商品,显示当前商品对应的详情页
var search = location.search;
var id = search.split('=')[1];
$.ajax({
    url: 'http://139.199.192.48:9090/api/getmoneyctrlproduct?' + id,
    // url: 'http://192.168.50.2:9090/api/getmoneyctrlproduct?' + id,
    type: 'get',
    dataType: 'JSON',
    data: {
        productid: id
    },
    success: function (info) {
        console.log(info)
        var htmlStr = template('pro_center_tpl', info);
        $('#main').html(htmlStr);
    }
})

// 评论
// 用户名
var arr = ["窜天猴", "猴赛雷", "飞天猪", "打地鼠", "你愁啥", "瞅你咋地", "你咋不上天", "啦啦啦德玛西亚","皮皮虾"];
// 日期
var times = ["2222/2/33 14:66:80", "2522/2/33 04:76:110", "1222/12/53 14:86:00", "2282/6/43 14:66:89", "22/2/33 14:66:80",]
// 头像
var imgs = ["http://bbs.manmanbuy.com/images/face/none.gif","../../images/user/1.jpg","../../images/user/2.jpg","../../images/user/3.gif","../../images/user/4.gif","../../images/user/5.gif","../../images/user/6.gif","../../images/user/7.gif","../../images/user/8.jpg","../../images/user/9.jpg","../../images/user/10.jpg","../../images/user/12.jpg","../../images/user/14.jpg","../../images/user/15.jpg","../../images/user/16.jpg"]
$("#main").on("click", ".evabtn", function () {
    var txt = $("textarea").val();
    if (txt == "") {
        return alert("你想说啥~~");
    }
    var data = {
        img: imgs[Math.floor(Math.random() * imgs.length)],
        name: arr[Math.floor(Math.random() * arr.length)],
        time: times[Math.floor(Math.random() * times.length)],
        infos: txt
    }
    alert("搞定,走你~");
    var htmls = template("evas", data);
    $("textarea").val('');
    $(".comment .list").append(htmls);
})
