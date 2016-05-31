var mongoose = require("mongoose");
var db = require("./db");

var Schema = mongoose.Schema;
console.log("question schema called");
//var questionSchema= new Schema({"questionNumber":String, "question":String, "optionA":String, "optionB":String, "optionC":String, "optionD":String});
var questionSchema= new Schema({testName:String,questions:[{"questionNumber":String, "question":String, "optionA":String, "optionB":String, "optionC":String, "optionD":String,"answer":String}]});

var questionSchemaModel = mongoose.model("questions",questionSchema);
module.exports=questionSchemaModel;