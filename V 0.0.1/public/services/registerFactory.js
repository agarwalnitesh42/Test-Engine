

app.factory('registerFactory', function($http, $q){
    return{
        postJSON: function(email,password){
            var defered = $q.defer();
            var data = {
                "email": email,
                "password": password
            };
            console.log(data);
            $http.post('register', data)
                .success(function(data){
                })
                .error(function(err){
                    defered.reject('Registeration Error...');
                });
            return defered.promise;
        }
    }
});
