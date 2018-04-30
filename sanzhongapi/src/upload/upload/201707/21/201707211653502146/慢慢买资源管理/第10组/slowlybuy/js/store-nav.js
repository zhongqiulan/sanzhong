  $(function () {
        $.ajax({
            url:"http://139.199.192.48:9090/api/getsitenav",
            type:"GET",
            dtatType: "json",
            success:function (info) {
                var tplStr = template('tpl',info);
                $(".content").html(tplStr);  
            }
            
        })
    })