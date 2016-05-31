app.controller('homeCtrl', function ($scope,$rootScope, $routeParams,homeFactory) {
        // console.log($routeParams.country);

    $rootScope.testName=$scope.selectedTest;

    //$rootScope.testName="JAVA2";

        var promise = homeFactory.getJSON($scope);
        //console.log("selected test "+$scope.selectedTest);

        promise.then(function(object) {
            //alert('************* Success: ' + object);
            console.log("data in home object :"+object[0]);
            localStorage.testList=JSON.stringify(object);
            $scope.testList=JSON.parse(localStorage.getItem("testList"));

            console.log("tests"+$scope.testList);

        }, function(reason) {
            //alert('Failed: ' + reason);
            $scope.result=reason;
        });
    }
);
