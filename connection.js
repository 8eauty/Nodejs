var mysql=require("mysql");
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"collage"
})
module.exports=con;