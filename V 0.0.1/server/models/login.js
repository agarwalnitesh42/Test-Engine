var mongoose = require("mongoose");
var db = require("./db");

var Schema = mongoose.Schema;
console.log("login schema called");
var loginSchema= new Schema({"loginType":String,"credential":{"uname":String, "password":String},"personalDetails":{"email":String,"phone":String,"address":String}});
var User = mongoose.model("userDetails",loginSchema,"userDetails");
module.exports=User;