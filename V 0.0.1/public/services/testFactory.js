
app.factory("TestFactory",function($http,$q){         //$q is a promise object
    return {

        getJSON:function(scope){
            console.log("test factory called");
            var object ;
            var defered = $q.defer();
            var data = {
                "selectedTest": scope
            };
            console.log("factory test selected"+scope);
                          //defered(delay time and response us promise) ?(what is the promise status)   // $window ?
            //$http.get('Questions.json').success(function(data){
            $http.post('questionList',data).success(function(data){
                //alert("Data is "+data);
                object = data;
                //scope.object = data;
                defered.resolve(object);
            }).error(function(er){
                //alert("Error is ",er);
                defered.reject("No Data Found...");
            });
            console.log("test factory finished");
            return defered.promise ;
            // return object;
        }
    }
});
