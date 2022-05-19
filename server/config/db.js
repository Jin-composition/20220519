const mysql = require('mysql');
 
const db = mysql.createPool({
    host : "183.98.83.30",
    user : "root",
    password : "Whgdmstodrkr@&098",
    database : "TEST2"
});
 
module.exports = db;