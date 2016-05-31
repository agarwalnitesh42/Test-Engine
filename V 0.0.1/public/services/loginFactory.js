app.factory('loginFactory', function($http,$q){
    return{
        postJSON: function(email,password){
            var object;
            var defered = $q.defer();
            var data = {
                "email": email,
                "password": password
            };
            //console.log("login factory called data "+data);
            $http.post('login', data)
            //$http.get('login', data)
                .success(function(data){
                    object = data;
                    defered.resolve(object);
                })
                .error(function(err){
                    defered.reject('no data found');
                });
            return defered.promise;
        }
    }
});

