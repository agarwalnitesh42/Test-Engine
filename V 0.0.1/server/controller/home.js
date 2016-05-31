
var mongoose = require("mongoose");
var question = require("../models/question");
function getTestName(req,res){
    question.find({}, function (error, data) {
        if (error) {
            console.log("Can't Add Error Occured ", error);
        }
        else {
            if(data){
                //console.log("test questions fetched "+data);
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
module.exports =getTestName;
