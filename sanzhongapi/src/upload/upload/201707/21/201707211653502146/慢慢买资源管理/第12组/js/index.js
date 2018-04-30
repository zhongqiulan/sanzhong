

$( function (){
    getindexMenu();
    function getindexMenu() {
        $.ajax({
            url: "http://139.199.192.48:9090/api/getindexmenu",
            success: function(data) {
                var html = template("menuTmp", data);
                console.log(data);
                console.log(html);
                $('#menu').html(html)
                $("#menu > ul > li:nth-child(8)").on("click", function (){
                
                    $("#menu > ul > li:nth-last-child(-n+4)").toggle();
                    return false;
                })
            }
        })
    }
getrecommenTmp();
 function getrecommenTmp(){
    $.ajax({
        url:'http://139.199.192.48:9090/api/getmoneyctrl',
        success: function(data){
            // console.log(data);
          var html=template("recommenTmp",data);
        //   console.log(html);
          $(".recommen_content").html(html)
           
        }
        
    })
}   


})