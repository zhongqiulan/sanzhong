~function(){
    document.title="品牌大全";
    $.ajax({
        url: config.getUrl('/api/getbrandtitle'),
        type:"get",
        success:function(data){
            var tplStr=template("bt_tpl",data);
            $(".brand-ul").html(tplStr);
            $(".brand-ul").on("click","li",function(){
                var id=$(this).attr("data-id");
                var title=$(this).attr("data-title");
                title=title.slice(0,-4);
                // title=encodeURI(title)
                location.href='../pages/brand/list.html?brandTitleId='+id+"&title="+title;
                return false;
            })
        }
    })
    $(".back").on("click",function(){
    location.href="../index.html"
})
    
}()