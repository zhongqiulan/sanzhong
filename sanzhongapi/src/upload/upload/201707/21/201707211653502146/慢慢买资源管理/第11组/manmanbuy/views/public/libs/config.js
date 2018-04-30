    // <script src="/views/public/assets/jquery/jquery.js"></script>
    // <script src="/views/public/assets/bootstrap/js/bootstrap.js"></script>
    // <script src="/views/public/assets/zepto/zepto.js"></script>
    // <script src="/views/public/assets/zepto/event.js"></script>
    // <script src="/views/public/assets/zepto/touch.js"></script>
    // <script src="/views/public/assets/artTemplate/template.js"></script>
    require.config({
        baseUrl: "/views/public",
        paths: {
            "jquery": "assets/jquery/jquery",
            "bootstrap": "assets/bootstrap/js/bootstrap",
            "zepto": "assets/zepto/zepto",
            "event": "assets/zepto/event",
            "touch": "assets/zepto/touch",
            "template": "assets/artTemplate/template",
            "utils": "js/utils/utils",
            "iscroll":"assets/iscroll/iscroll"
        },
        shim: {
            "event": {
                deps: ["zepto"]
            },
            "touch": {
                deps: ["zepto"]
            },
            "bootstrap": {
                deps: ["jquery"]
            }
        },
        "bootstrap":{
            deps:['jquery']
        }

    })