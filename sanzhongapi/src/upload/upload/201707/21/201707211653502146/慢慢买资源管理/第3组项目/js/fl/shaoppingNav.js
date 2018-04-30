
    $.ajax({
        url:"http://139.199.192.48:9090/api/getsitenav",
        dataType:"json",
        type:"get",
        success:function(info) {
            // console.log(info);
            var str=template("linkTemplate",info);
            $(".mainContainer").html(str);
            water();
        }
    })

    function water() {
        var a=$(".linkList");
        var arrH=[];
        var height=40;
        var pad=15;
        for (var i=0;i<a.length;i++) {
            if(i<10) {
                var width=a.eq(i).width();
                arrH.push(width);
                $(a[i]).css({
                    top:(height+pad)*i
                })
            }else {
                var min=Math.min(...arrH);
                var index=arrH.indexOf(min);
                $(a[i]).css({
                    top:(height+pad)*index,
                    left:min+pad*3
                })
                arrH[index]+=$(a[i]).width()+pad*3;
            }   
        }
        var maxW=Math.max(...arrH);
        console.log(maxW);
    }

        $('.glyphicon').on('click',function(){
            history.back();
        })