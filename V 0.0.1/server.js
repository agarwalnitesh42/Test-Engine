var express = require("express");
var loginCheck = require("./server/controller/login");
var register=require("./server/controller/signUp");
var questionOperation = require("./server/controller/test");
var testName = require("./server/controller/home");
var uploadQuestions=require("./server/controller/uploadQuestionOperation");
var submitTest=require("./server/controller/submitTest");
var bodyParser=require("body-parser");
var sendMail=require("./server/controller/mailing");
var app = express();

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.post("/login",loginCheck);
//app.get("/login",loginCheck);
app.post('/register', register);

//app.post('/home',loginCheckNew);
/*app.post("/home",function(request,response){
    //response.header("Content-Type", "text/html");
    console.log("Url hitted");
    response.writeHead(310,{"Content-Type":"text/html"});
    response.sendFile('home.html');
    response.end();

});*/
app.post("/questionList",questionOperation);


app.post('/submitTest', submitTest);
app.post('/uploadQuestions',uploadQuestions);
app.post('/testlist',testName);

app.post('/sendMail',sendMail);
app.listen(12345,function(){
    console.log("Server Start...");
});
