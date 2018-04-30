define(function () {
    var o = {
        queryString: function () {
            var search = location.search;
            search = search.slice(1);
            var arr = search.split("&");
            var obj = {};
            for (var i = 0; i < arr.length; i++) {
                var arr1 = arr[i].split("=");
                obj[arr1[0]] = arr1[1];
            }
            return obj;
        }
    }
    return o;
})