const url="";
let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'pleasework',
	port:3306
}; // change port to 3306 that may be the port mostly.


const mysql = require('mysql2');
const con=mysql.createConnection(dbparams);

//------------------------
const express = require("express");
const app = express();

app.use(express.static("sf"));
// con.query('Create  table  location ( pincode integer primary key, area varchar(15));', 
// [] );
con.query('insert into location (area,pincode) values (?,?),(?,?),(? ,?);', 
["AreraHills",462011,"Arwaliya",462038,"VallabhBhawan",462004] ,
(err, res1) => {
if (err) {
    console.log("error has occured let us see");
  } else {
    console.log(res1.affectedRows);
  }
});