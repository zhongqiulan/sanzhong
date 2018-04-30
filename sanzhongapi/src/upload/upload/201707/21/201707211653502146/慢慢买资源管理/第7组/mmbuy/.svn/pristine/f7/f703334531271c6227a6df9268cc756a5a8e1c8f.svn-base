var config = {
    ports: ':9090',
    url: '139.199.192.48',
    //url:'192.168.50.2',
    protocol: 'http://',
    getUrl: function (api) {
        if (api.indexOf('/') == 0) {
            return this.protocol + this.url + this.ports + api;
        } else {
            return this.protocol + this.url + this.ports +"/"+ api;
        }
    }
}