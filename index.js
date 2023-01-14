const express=require('express');
var con=require('./connection')
const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/',function(req,res){
res.sendFile(__dirname+'/home.html')
})
app.post('/',function(req,res){
var name=req.body.name;
var email=req.body.email;
var mobile=req.body.mobile;
con.connect(function(error){
  if(error)throw error;
  var sql="INSERT into student(name, email, mobile)VALUES ('"+name+"','"+email+"','"+mobile+"')"
  con.query(sql,function(error,result){
if(error) throw error;
res.send("Successfully Registered");
  })
})
})
app.listen(6500)

