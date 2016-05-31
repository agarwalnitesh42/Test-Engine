/*var fs = require("fs");
 var path=require("path");*/
var mongoose = require("mongoose");
var question = require("../models/question");

function getQuestions(req,res){
    console.log("Test name is :"+req.body.selectedTest);
    //testName:req.body.testName;
    question.find({testName:req.body.selectedTest}, function (error, data) {
        if (error) {
            console.log("Can't Add Error Occured ", error);
        }
        else {
            if(data){
                console.log("test questions fetched "+data);
                //questionList=JSON.parse(data);
                //res.send(questionList);
                res.json(data);
            }
            else{
                res.send({"error":"Data not found"});
            }
        }
    });
}
module.exports =getQuestions;
