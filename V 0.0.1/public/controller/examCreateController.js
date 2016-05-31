
app.controller('uploadQuestionCtrl', function($scope,uploadQuestionFactory){



    function submit(testName,questions){
        this.testName=testName;
        this.questions=questions;
    }
        var questionNumber=0;
    $scope.questionListUpload=[];
    $scope. submit= function(){
        console.log('UploadQuestionCtrl Submit Call...');
        questionNumber++;
        var questionObj=new Question(questionNumber,$scope.question,$scope.optionA,$scope.optionB,$scope.optionC,$scope.optionD,$scope.answer);
        //$scope.questionListUpload.push({questionNumber:$scope.questionNumber,question:$scope.question,optionA:$scope.optionA,optionB:$scope.optionB,optionC:$scope.optionC,optionD:$scope.optionD,answer:$scope.answer});
        $scope.questionListUpload.push(questionObj);
    }
    $scope. upload= function(){
        console.log('UploadQuestionCtrl Upload Call...');
        var dataSubmit=new submit($scope.testName,$scope.questionListUpload)
        var promise =uploadQuestionFactory.postJSON(dataSubmit);

        promise.then(function(object) {
            $scope.resultMsg =object;
            console.log("Result in controller object"+$scope.resultMsg);

        });
    }
    function Question(questionNumber,question,optionA,optionB,optionC,optionD,answer){
        this.questionNumber=questionNumber;
        this.question=question;
        this.optionA=optionA;
        this.optionB=optionB;
        this.optionC=optionC;
        this.optionD=optionD;
        this.answer=answer;
    }



    /*
     $scope.questionListUpload=[];
     $scope. submit= function(){
     console.log('UploadQuestionCtrl Submit Call...');
     var questionObj=new Question($scope.questionNumber,$scope.question,$scope.optionA,$scope.optionB,$scope.optionC,$scope.optionD,$scope.answer);
     //$scope.questionListUpload.push({questionNumber:$scope.questionNumber,question:$scope.question,optionA:$scope.optionA,optionB:$scope.optionB,optionC:$scope.optionC,optionD:$scope.optionD,answer:$scope.answer});
     $scope.questionListUpload.push(questionObj);
     }
     $scope. upload= function(){
     console.log('UploadQuestionCtrl Upload Call...');
     var promise =uploadQuestionFactory.postJSON(JSON.stringify($scope.questionListUpload));

     promise.then(function(object) {
     $scope.resultMsg =object;
     console.log("Result in controller object"+$scope.resultMsg);

     });
     }
     function Question(questionNumber,question,optionA,optionB,optionC,optionD,answer){
     this.questionNumber=questionNumber;
     this.question=question;
     this.optionA=optionA;
     this.optionB=optionB;
     this.optionC=optionC;
     this.optionD=optionD;
     this.answer=answer;
     }
     */
});