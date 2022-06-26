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
// const express = require("express");
// const app = express();

//app.use(express.static("sf"));
// con.query('Create  table  location ( pincode integer primary key, area varchar(15));', 
// [] );
con.query('Create  table  resource ( resourceid integer primary key, resourcename  varchar(15) ,status boolean);', 
[] ,
(err, res1) => {
if (err) {
    console.log("error has occured let us see"+err);
  } else {
    console.log(res1.affectedRows);
  }
});