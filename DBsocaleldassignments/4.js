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
// con.query('insert into location (area,pincode)location values (?,?),(?,?),(? ,?);', 
// [AreraHills,462011,Arwaliya,462038,VallabhBhawan,462004] );

app.get("/getItem",(req,resp)=>{
    let output ={
        status : false,
        itemdetails : { area:"xyz"},
    };
    let input={
        x:req.query.x,

    }
    con.query("select area  from location where pincode = ?",[input.x],(error,rows) =>{
        if(error){
            console.log(error);
        }else{
            if(rows.length > 0){

                output.status = true;
                output.itemdetails.area =rows[0].area;
                console.log(output);
                
            }
            else
            console.log("no area found with ");
            
        }
        resp.send(output); 
        
        
    });
});
app.listen(900, function () {
    console.log("server listening at port 900...");
    
  });