require.config({
    baseUrl: '/',
    paths: {
        'template': 'lib/artTemplate/template',
        'jquery': 'lib/jquery/jquery',
        'bootstrap': 'lib/bootstrap/js/bootstrap',
        'cookie': 'lib/jquery-cookie/jquery.cookie',
        'form': 'lib/jquery-form/jquery.form',
        'p_search': 'js/Parity-search/search',
        'p_list': 'js/Parity-search/list',
        'index': 'js/dashboard/index',
        'baicai': '/js/baicai/baicai',
        'inlandDiscount': 'js/inlandDiscount/inlandDiscount',
        'inlandDisListinfo': 'js/inlandDiscount/inlandDisListinfo',
        'money': 'js/money/money',
        'iscroll': 'lib/iscroll/iscroll',
        'demoUtils': 'lib/iscroll/demoUtils',
        'product': 'js/Parity-search/product',
        'zhekou': 'js/money/zhekou',
        'brandTitle': 'js/brandTitle/brandTitle',
        'getbrand': 'js/brandTitle/getbrand',
        'coupons': 'js/coupons/coupons',
        'lists': 'js/coupons/lists'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'iscroll': {
            exports: 'IScroll'
        },
        'demoUtils': {
            exports: 'isPassive'
        }
    }
})