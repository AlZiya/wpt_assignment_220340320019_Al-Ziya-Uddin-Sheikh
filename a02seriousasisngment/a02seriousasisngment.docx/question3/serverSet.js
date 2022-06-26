const http = require('http');
let url = require("url");

http.createServer((req,res)=>{


    var q = url.parse(req.url, true).query;
        console.log('call back funtion');
        res.write("diameter = " + 2*q.radius);
        res.end();


}).listen(800);

//to see output write tis in google chrome/*  localhost:800/?radius=4  */ 