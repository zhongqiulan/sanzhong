var tool = {
    getUrl: function(api) {
        var obj = {
            price: 'http://',
            realm: '139.199.192.48',
            // realm: '192.168.50.2',
            port: ':9090',
        }
        if (api.indexOf('/') != -1) {
            return obj.price + obj.realm + obj.port + "/" + api;
        }
        return obj.price + obj.realm + obj.port + api;
    },
    getSearch: function() {
        var search = location.search;
        search = search.slice(1);
        var arr = search.split("&");
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            var tem = arr[i].split("=");
            obj[tem[0]] = tem[1];
        }
        return obj;
    }
}