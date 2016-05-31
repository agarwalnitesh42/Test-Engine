/*var fs = require("fs");
 var path=require("path");*/
var mongoose = require("mongoose");
var question = require("../models/question");


function questionUpload(req,res) {

    var data=req.body.questions;
     //console.log("question list : "+req.body.questions);
    /* data.questions[questions].forEach(function(objv){
     delete objv.$$hashKey;
     });*/

    console.log("question list in data : "+data);

    //var questionList = new question(req.body.questions);
    var questionList = new question(data);
    questionList.save(function(err,doc){
        //console.log('Server side: Email... ' + user.email + " Password..." + user.password);
        if(err){
            console.log("Cannot Save...");
        }
        else{
            res.json({msg:"Questions uploaded successfully"});
            console.log('Questions uploaded successfully...');
        }
    });

}
module.exports =questionUpload;
