//	Insert
const url = "";
let dbparams = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "pleasework",
  port: 3306,
}; // change port to 3306 that may be the port mostly.

const mysql = require("mysql2");
const con = mysql.createConnection(dbparams);

let userid = "y"; //assume this came from http request
let password = "z"; //assume this came from http request
con.query(
  "insert into cusers(userid,password) values (?,?)",
  [userid, password],
  (err, res1) => {
    if (err) {
      console.log("error has occured let us see"+err);
    } else {
      console.log(res1.affectedRows);
    }
  }
);
