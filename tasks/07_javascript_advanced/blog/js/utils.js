(function (window) {

    var DEFAULT_URL = "http://localhost:3050/api/v1";
    var DAY_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function Utils() {
    }

    Utils.prototype.sendRequest = function (params, callback) {
        var request = new XMLHttpRequest();
        var data, error, body;

        if (params.body) {
            body = JSON.stringify(params.body);
        }

        request.open(params.method, DEFAULT_URL + params.url, params.async);

        if ((params.method === 'PUT' || params.method === 'POST')) {
            request.setRequestHeader('Content-Type', 'application/' + params.dataType)

        }

        request.onload = function () {
            if (request.status == 200 || request.status == 304) {
                data = JSON.parse(request.responseText);
                callback(null, data);
            } else {
                error = request.statusText;
                callback(error, null);
            }
        };

        request.onerror = function (data) {
            callback(data, null)
        };

        request.send(body);
    };


    Utils.prototype.isLoading = function (isLoad, element) {
        var spinner = document.getElementById(element);
        spinner.style.display = isLoad ? 'block' : 'none';
    };

    Utils.prototype.formatDate = function (rawDate) {
        var date = new Date(rawDate);
        return DAY_OF_WEEK[date.getDay()] + ' ' + date.getDate() + ' ' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    };

    Utils.prototype.formatArticleText = function (text) {
        if (text.length > 200) {
            return text.substring(0, 200) + "..."
        }

        return text;
    };


    window.blog = window.blog || {};
    window.blog.Utils = new Utils()

})(window);
