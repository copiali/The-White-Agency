app.factory('progressService', ['$resource', function ($resource) {
    var _getSpeed = function () {
        return $resource('js/data.json').get();
    }
    return {
        getSpeed: _getSpeed
    }
}]);