const mysql = require("mysql")
const con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "hostel1",
    port: 3306
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected");
});

module.exports.con = con;