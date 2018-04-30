      //获取categoryId
        var search = location.search;
         search =  search.slice(1);
        var arr =  search.split('&');
        var obj = {};
        for(var i=0;i<arr.length;i++){
            var tempArr = arr[i].split('=');
            obj[tempArr[0]] = tempArr[1];
        }
        console.log(obj);

        //通过titleId请求分类列表数据
        $.ajax({
            url:'http://139.199.192.48:9090/api/getcategorybyid',
            data:{categoryid:obj.categoryId},
            success:function(d){
            }
        });
        //商品列表数据获取并渲染
        function doAjax(p){
            
            $.ajax({
                url:'http://139.199.192.48:9090/api/getproductlist',
                data:{categoryid:obj.categoryId,pageid:p},
                success:function(d){
                    //计算总页数
                    pages = Math.ceil(d.totalCount/d.pagesize);

                    d.pages = pages;
                    // decodeURI() 将url码转换成中文
                    d.category = decodeURI(obj.category);
                    var htmlStr = template('product_list_tpl',d);
                    $('.main').html(htmlStr);
                    $('.btn_page select option').attr('selected',false);
                    $('.btn_page select option').eq(p-1).attr('selected',true);
                    // console.log($(this).val());
                    // console.log(pages);
                }
            });
        }
        getPage();
        function getPage(){
            var pages;
            var p = 1;
            doAjax(p);
            $('.main').on('click','.btn_page .prev',function(){
                p--;
                if(p<1){
                    p=1;
                    return;
                }
                // $('.btn_page select option').eq(p-1).attr('selected',true);
                doAjax(p);

                // $('.btn_page select option').prop('selected',false);
                // $('.btn_page select option').eq(p-1).prop('selected',true);
                // console.log(p);
                
            });
            $('.main').on('change','.btn_page select',function(){
                p = $(this).val();
                doAjax(p);
            });
            $('.main').on('click','.btn_page .next',function(){
                p++;
                 if(p>=pages){
                     p=pages;
                    return ;
                }
                // $('.btn_page select option').eq(p-1).attr('selected',true);
                doAjax(p);
                // $('.btn_page select option').attr('selected',false);
                // $('.btn_page select option').eq(p-1).attr('selected',true);
                // console.log(p);
            });
            
        } 

        //产品点击事件
        $('.main').on('click','.commodity_list li',function(){
            //获取data-productId
            var productId = $(this).attr('data-productId');
            var category = $(this).attr('data-category');
            //跳转到商品详情页面
            location.href = 'price_search.2.html?productId='+productId+'&category='+category;

        });
     