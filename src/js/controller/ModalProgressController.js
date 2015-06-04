app.controller('ModalProgressCtrl',
['$scope', 'progressService', '$interval',
    function($scope, progressService, $interval) {
        var stop;
        $scope.start = function (speed) {
            $scope.progress = 0;
            if (angular.isDefined(stop)) return;
            stop = $interval(function() {
                if ($scope.progress < 100) {
                    $scope.progress++;
                } else {
                    $scope.stopFight();
                }
            }, speed);
        };

        $scope.stopFight = function() {
            if (angular.isDefined(stop)) {
                $interval.cancel(stop);
                stop = undefined;
            }
        };
        $scope.reset = function () {
            $scope.error = undefined;
            $scope.stopFight();
            progressService.getSpeed().$promise.then(function (result) {
                if (result && result.data && result.data.speed) {
                    $scope.start(result.data.speed);
                }else
                {
                    $scope.error = "Please check the data format of data.json";
                }
            }, function(error) {
                $scope.error = "Cross origin requests are only supported for HTTP. Please put this application on the server";
            });
        };
        $scope.reset();
    }
]);