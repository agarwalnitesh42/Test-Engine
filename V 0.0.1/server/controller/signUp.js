/*var fs = require("fs");
 var path=require("path");*/
var mongoose = require("mongoose");
var register = require("../models/login");


function signUp(req,res) {
    var user = new register({loginType:"User",credential:{
        uname: req.body.userName,
        password: req.body.password
    },personalDetails:{
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address
    }});
    user.save(function(err,doc){
        console.log('Server side: Email... ' + user.email + " Password..." + user.password);
        if(err){
            console.log("Cannot Save...");
            res.redirect("/index.html#/signUp?error=failed to signUp");

        }
        else{

            //res.json();
            console.log('CREDS Saved in DB...');
            res.redirect("home.html");
        }
    });
}
module.exports =signUp;
