/*var fs = require("fs");
 var path=require("path");*/
var mongoose = require("mongoose");
var User = require("../models/login");
function connect(req,res){
    //userCheck.find({"userId":"","password":""}, function (error, data) {

    //User.find({"userId":userName,"password":password}, function (error, data) {
    //User.find({"id":userName,"pwd":password}, function (error, data) {

    console.log("login type"+req.body.loginType);
    User.find({"loginType":req.body.loginType,"credential":{"uname":req.body.userName,"password":req.body.password}}, function (error, data) {
        if (error) {
            console.log("Can't Add Error Occured ", error);
        }

        else {
            //console.log("Data " + data[0]);
            //console.log(req.body.email+ " " +req.body.password);
            if(data[0]){
                if(req.body.loginType=="Admin"){
                    res.redirect("/adminhome.html");
                }
                else if(req.body.loginType=="User") {
                    res.redirect("/home.html");
                }

                //res.writeHead(301,{Location:'home.html'});
                //window.location.href("home.html");
                //res.end();
                //res.send("Correct Password");
            }
            else{
                res.redirect("/index.html#/login?error=incorrect user Id and Password");
                //res.json({"msg":"Incorrect Credentials"});
                //res.send("Incorrect Credentials");
            }
        }
    });
}
module.exports =connect;
