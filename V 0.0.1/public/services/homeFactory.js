
app.factory("homeFactory",function($http,$q){         //$q is a promise object
    return {

        getJSON:function(scope){
            console.log("home factory called");
            var object ;
            var defered = $q.defer();               //defered(delay time and response us promise) ?(what is the promise status)   // $window ?
            //$http.get('Questions.json').success(function(data){
            $http.post('testlist').success(function(data){
                //alert("Data is "+data);
                object = data;
                //scope.object = data;
                defered.resolve(object);
            }).error(function(er){
                //alert("Error is ",er);
                defered.reject("No Data Found...");
            });
            console.log("home factory end called");
            return defered.promise ;
            // return object;
        }
    }
});
