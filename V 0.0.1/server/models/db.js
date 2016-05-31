var mongoose = require("mongoose");
var options={server:{poolSize:5}}; //
var db = mongoose.connect("mongodb://localhost:27017/lmsData2");
//var db = mongoose.connect("mongodb://<vsvaibhav2016>:<8802494091vishu>@ds015770.mlab.com:15770/lmsdata");
module.exports=db;