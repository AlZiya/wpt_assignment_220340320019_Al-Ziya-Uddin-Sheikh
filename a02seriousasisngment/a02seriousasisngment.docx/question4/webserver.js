const express = require('express');
const app = express();
app.use(express.static("cp"));

app.get("/updateItem",(req,resp)=> {
    resp.send("update item needs to be done");

});
app.get("/addItem",(req,resp)=>{
// to see output in browser -->http://localhost:900/login
    resp.send("add item needs to be done");
    let input = req.query.x;// to see output in terminal-->http://localhost:900/login/?x=4
    console.log(input);
});

app.listen(900, function () {
    console.log("server listening at port 900...");
});