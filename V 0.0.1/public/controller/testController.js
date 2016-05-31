app.controller('testCtrl', function ($scope,$rootScope, $routeParams,TestFactory,testSubmitFactory) {
        // console.log($routeParams.country);
    //$scope.selectedTest=$rootScope.selectedTest;
        //$scope.selectedTest=$rootScope.testName;
    $scope.selectedTest=$routeParams.testName;
    console.log("selected test :"+$scope.selectedTest);
        $scope.resultShow=false;
        console.log("test Ctrl called");
        var promise = TestFactory.getJSON($scope.selectedTest);

        promise.then(function(object) {
            //alert('************* Success: ' + object);
            console.log("data in object :"+object[0]);
            localStorage.questionList=JSON.stringify(object[0].questions);
            $scope.questionList=JSON.parse(localStorage.getItem("questionList"));
            for(i=0;i<$scope.questionList.length;i++){
                $scope.questionList[i].answer="";
            }
            //$scope.questionList= object;
            console.log("Questions"+$scope.questionList);
            $scope.nextQ();
        }, function(reason) {
            //alert('Failed: ' + reason);
            $scope.result=reason;
        });
        $scope.result = "Dynamic Values from Controller";

        count=-1;
        $scope.nextQ=function(){
            console.log("next called");
            count++;
            $scope.questionNumber=$scope.questionList[count].questionNumber;
            $scope.question=$scope.questionList[count].question;
            $scope.optionA=$scope.questionList[count].optionA;
            $scope.optionB=$scope.questionList[count].optionB;
            $scope.optionC=$scope.questionList[count].optionC;
            $scope.optionD=$scope.questionList[count].optionD;

        };
        $scope.previousQ=function(){
            console.log("previous called");
            count--;
            $scope.questionNumber=$scope.questionList[count].questionNumber;
            $scope.question=$scope.questionList[count].question;
            $scope.optionA=$scope.questionList[count].optionA;
            $scope.optionB=$scope.questionList[count].optionB;
            $scope.optionC=$scope.questionList[count].optionC;
            $scope.optionD=$scope.questionList[count].optionD;

        };
        $scope.answered=function(val){
            $scope.questionList[count].answer=val;
            console.log($scope.questionList[count].answer);
        };
        $scope.submit=function(){
            console.log("submit called");
            var promise = testSubmitFactory.postJSON(JSON.stringify($scope.questionList),$scope.selectedTest);

            promise.then(function(object) {
                //alert('************* Success: ' + object);
                //$scope.testResults =JSON.parse(object);
                $scope.testResult =object;
                console.log("Result in controller object"+$scope.testResult);
                //localStorage.result = JSON.stringify(object);
                //$scope.testResult = JSON.parse(localStorage.getItem("result"));
                $scope.resultShow=true;
            });
        }
    }
);