define(['jquery', 'template', 'bootstrap', 'iscroll', 'demoUtils'], function($, template, bootstrap, IScroll, isPassive) {

    titleRender();

    proRender(0);

    function titleRender() {
        $.ajax({
            url: tool.getUrl('api/getbaicaijiatitle'),
            type: 'get',
            dataType: 'Json',
            success: function(info) {
                var html = template('baicaijia_title', info);
                $('.baicai_title').html(html);
                var myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: true });
                document.addEventListener('touchmove', function(e) { e.preventDefault(); }, isPassive() ? {
                    capture: false,
                    passive: false
                } : false);
            }
        })
    }

    function proRender(id) {
        $.ajax({
            url: tool.getUrl('api/getbaicaijiaproduct'),
            data: {
                titleid: id
            },
            type: 'get',
            dataType: 'Json',
            success: function(info) {
                var html = template('pro_tpl', info);
                $('.products').html(html);
            }
        })
    }
    $('.baicai_title').on('click', 'li', function() {
        var $this = $(this);
        $this.find('span').addClass('titleVisited');
        $this.siblings().find('span').removeClass('titleVisited');
        var id = $this.attr('data-id');
        proRender(id);
    })
})