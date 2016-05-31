app.factory('uploadQuestionFactory', function($http, $q){
    return{
        postJSON:function(submitQuestion){
            var object ;
            var defered = $q.defer();
            var data = {
                "questions": submitQuestion
            };
            console.log(data);
            $http.post('uploadQuestions', data)
                .success(function(data){
                    object = data;
                    //scope.object = data;
                    console.log("result in factory variable data"+data);
                    defered.resolve(object);
                })
                .error(function(err){
                    defered.reject('Sumthing Wrong happened');
                });
            return defered.promise;
        }
    }
});