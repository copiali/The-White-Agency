app.controller('AppCtrl', ['$scope','$modal',function ($scope, $modal) {
    $scope.open = function () {
        $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalProgressCtrl',
            backdrop: 'static'
        });
    };
    $scope.open();
}]);