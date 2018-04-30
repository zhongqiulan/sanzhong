var config = {
  // http://157.122.54.189:9090/api/getbrandtitle
  //外:157.122.54.189
  //外:139.199.192.48
  //内:192.168.50.2
  // host: '192.168.50.2',
  host: '157.122.54.189',
  // host: '139.199.192.48',
  port: ':9090/',
  prefix: 'http://',
  getUrl: function (api) {
    if (api.indexOf('/') != 0) {

      return this.prefix + this.host + this.port + api;
    }
    return this.prefix + this.host + this.port + api.substring(1, api.length);

  }

}