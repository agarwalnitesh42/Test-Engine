//var app=angular.module("myApp",["ngRoute"]);


app.config(function($routeProvider){
    $routeProvider/*.when("/login",{
            templateUrl: "login.html",
            controller:"loginController"

        })*/
        .when("/login",{
            templateUrl: "login.html"

        })
        .when("/testStart/:testName",{
            templateUrl: "teststart.html",
            controller:"testCtrl"

        })
    .when("/signUp",{
            templateUrl: "signUp.html",
        controller:"registerController"
        })
        .when("/uploadquestion", {
            templateUrl:'uploadquestion.html',
            controller:'uploadQuestionCtrl'
        })
        .otherwise({
            redirectTo: "/"
        })
})