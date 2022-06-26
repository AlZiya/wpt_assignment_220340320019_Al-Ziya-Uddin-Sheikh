const url="";
let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'pleasework',
	port:3306
};


const mysql = require('mysql2');
const con=mysql.createConnection(dbparams);

//------------------------
const express = require("express");
const app = express();

app.use(express.static("sf"));
//--------------------------


 con.query('Create  table  whocares ( itemno integer primary key, itemname varchar(15), price integer, category varchar(15))', 
[] ,
(err,res1) => {
//     if (err) {
//         console.log("error has occured let us see "+err);  
//    }  else {
//     console.log("created" );
//     //     if(res1.affectedRows===0)
//     //     {
//     //         console.log("update failed");
//     //     } 
//     //     else
//     //        console.log("update suceeded");    
       
//      }
 }
 );
//-----------------------------------------------------------------------------
app.get("/getItem",(req,resp)=>{
    let input = req.query.x;
    console.log(input);
    let output ={
        itemnofoundstatus : false,
        itemdetails : { itemno:3,itemname:"cookies",price:350},
    };

    con.query("select * from item where itemno = ?",[input],(error,rows) =>{
        if(rows.length >0){
            output.itemnofoundstatus = true;
            output.itemdetails = rows[0];
        }
        resp.send(output);
    });

});
//-------------------------------------------------------------
app.get("/addItem",(req,resp) => {
    let input ={
        itemno:req.query.x,
        itemname:req.query.y,
        price:req.query.z,
        category:req.query.a,

    };
    console.log("add item successfull "+input);
    let output = false;

    con.query(
        "insert into item(itemno,itemname,price,category) values (?,?,?,?)",
        [input.itemno,input.itemname,input.price,input.category],
        (error,whathappenedtoinsert) =>{
            if(error){
                console.log(error)
            }
            else if(whathappenedtoinsert.affectedRows>0){
                output = true;
            }
            resp.send(output);
        }
    );


});
//--------------------------------------------------------------------------------------------------
app.get("/updateitem",(req,resp)=>{
    let output =false;
    let input ={
        itemno:req.query.itemno,
        itemname:req.query.itemname,
        price:req.query.price,
        category:req.query.category,
    };
    console.log(input);
    con.query(
    "update item set itemname = ? , price = ? , category = ? where itemno =? ",
    [input.itemname,input.price,input.category,input.itemno],
    (error,whathappenedtoinsert) =>{
        if(error){
            console.log(error);
        }
        else if(whathappenedtoinsert.affectedRows>0)
            output = true;
            resp.send(output);
    }
    );
});

//--------------------------------------------------------------------------------------------------
 app.get("/getAllItems",(req,resp) => {
    con.query("select * from item", [], (error, rows) => {
        resp.send(rows);

    });
 });

 //-------------------------------------------------------------------------------------------------
 app.listen(900, function () {
    console.log("server listening at port 900...");
    
  });