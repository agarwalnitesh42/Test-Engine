
app.factory('testSubmitFactory', function($http, $q){
    return{
        postJSON: function(submit,testName){
            var object ;
            var defered = $q.defer();
            var data = {
                "submitTest": submit,
                "testName":testName
            };
            console.log(data);
            $http.post('submitTest', data)
                .success(function(data){
                    object = data;
                    //scope.object = data;
                    console.log("result in factory variable data"+data);
                    defered.resolve(object);
                })
                .error(function(err){
                    defered.reject('Test Submitted successfully...');
                });
            return defered.promise;
        }
    }
});


