var config = {
    // http://157.122.54.189:9090/api/getindexmenu

    host: '157.122.54.189',
    port: ':9090/',
    prefix: 'http://',
    getUrl: function(api) {
        if (api.indexOf('/') != 0) {

            return this.prefix + this.host + this.port + api;
        }
        return this.prefix + this.host + this.port + api.substring(1, api.length);

    }

}