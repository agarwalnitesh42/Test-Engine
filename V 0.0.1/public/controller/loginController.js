app.controller('loginController', function($scope,loginFactory,$location){
    $scope.login = function() {
        console.log("Login Call...");
        //loginFactory.postJSON($scope.email,$scope.password)
        var promise = loginFactory.postJSON($scope.email, $scope.password);
        promise.then(function (object) {
            console.log(object);
            $scope.val = object.msg;
            console.log("Promise Call"),
                function (reason) {
                    //alert('Failed: ' + reason);
                    $scope.result = reason;
                }
        });
        $scope.result = "Dynamic Values from Controller";
    }
});