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



//-----------------------------------------------------------------------------
app.get("/getItem",(req,resp)=>{
    let input = req.query.x;
    console.log(input);
 

    con.query("select * from resource where resourceid  = ?",[input],(error,rows) =>{
        if(rows.length >0){
            
            let itemscontents = "";
            for (let i = 0; i < rows.length; i++) {
              itemscontents +=
                
                rows[i].resourceid +
                "  " +
                rows[i].resourcename +
                "  " +
                rows[i].status ;
            }
            console.log(itemscontents);
      
         }
        
    });

});
//-------------------------------------------------------------
app.get("/addItem",(req,resp) => {
    var x=req.query.x;
        var y = req.query.y;
        var z = req.query.z;
        if(z=="true"){z=1}else{z=0}
    let input ={
        resourceid:x,
        resourcename:y,
        status:z,
          

    };
 
    console.log("add item successfull "+input);
    let output = false;

    con.query(
        "insert into resource(resourceid,resourcename,status) values (?,?,?)",
        [input.resourceid,input.resourcename,input.status],
        (error,whathappenedtoinsert) =>{
            if(error){
                console.log(error)
            }
            else if(whathappenedtoinsert.affectedRows>0){
                output = true;
            }
           
        }
    );


});
//--------------------------------------------------------------------------------------------------
app.get("/updateitem",(req,resp)=>{
    var x=req.query.x;
    var y = req.query.y;
    var z = req.query.z;
    if(z=="true"){z=1}else{z=0}
let input ={
    resourceid:x,
    resourcename:y,
    status:z,
      

};
    let output =false;
 
    console.log(input);
    con.query(
    "update resource  set resourcename   = ? , status  = ?  where resourceid =? ",
    [input.resourcename,input.status,input.resourceid],
    (error,whathappenedtoinsert) =>{
        if(error){
            console.log(error);
        }
        else if(whathappenedtoinsert.affectedRows>0)
            output = true;
            console.log(output);
    }
    );
});

//--------------------------------------------------------------------------------------------------
 app.get("/getAllItems",(req,resp) => {
    con.query("select * from resource", [], (error, rows) => {
       console.log(rows);

    });
 });

 //-------------------------------------------------------------------------------------------------
 app.listen(900, function () {
    console.log("server listening at port 900...");
    
  });