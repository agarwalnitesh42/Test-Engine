
app.controller('registerController', function($scope,registerFactory){
    $scope.register = function(){
        console.log('Register Call...');
        console.log($scope.email + " " + $scope.password);
        registerFactory.postJSON($scope.email, $scope.password);
    }
});

