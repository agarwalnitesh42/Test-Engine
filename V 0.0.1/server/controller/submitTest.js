/*var fs = require("fs");
 var path=require("path");*/
var mongoose = require("mongoose");
var question = require("../models/question");
function result(req,res){
        var answeredList=req.body.submitTest;
    console.log("submit test selected test :"+req.body.testName);
   question.find({"testName":req.body.testName}, function (error, data2) {
        if (error) {
            console.log("Can't Add Error Occured ", error);
        }
        else {
            if(data2[0]){
                //console.log("test questions fetched "+data2);
                //questionList=JSON.parse(data2);
                //data2=JSON.parse(data2);
                //res.send(questionList);
               // res.json(data2);
                calcResult(data2[0].questions,answeredList,res);
                //console.log("data2 in server answered is "+serverAnswer);
            }
            else{
                console.log("in else "+data2);
                //res.send({"error":"Data not found"});
            }
        }
    });
            //mongoose.connection.close();
}
function calcResult(data,answeredList,res){
     data2=JSON.stringify(data);
    //data2="["+data2+"]";
    data2=JSON.parse(data2);
    var result=[];
    console.log("data in data2 : "+data2);
    answeredList=JSON.parse(answeredList);
    for(i=0;i<data2.length;i++){
        if(answeredList[i].answer==""){
            //console.log("empty Answer "+answeredList[i].answer);
            var testRes=new qResult(answeredList[i].questionNumber,"Not Answered");
            result.push(testRes);
        }
        else if(answeredList[i].answer==data2[i].answer){
            //console.log("Correct Answer "+answeredList[i].answer);
            var testRes=new qResult(answeredList[i].questionNumber,"Correct Answer");
            result.push(testRes);
            //result[i]="Correct Answer";
        }
        else if(answeredList[i].answer!=data2[i].answer){
            //console.log("Wrong Answer "+answeredList[i].answer+" compared"+data2[i].answer);
            var testRes=new qResult(answeredList[i].questionNumber,"Wrong Answer");
            result.push(testRes);
            //result[i]="Wrong Answer";
        }
    }
    //res.json(JSON.stringify(result));
    res.json(result);
    console.log("data in result :"+result);
}
function qResult(qno,res){
    this.qno=qno;
    this.res=res;
}
module.exports =result;
