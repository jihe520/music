const mysql = require("mysql");
const GenId = require("../utils/SnowFlake");

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "tp_music"
});

const genid = new GenId({ WorkerId: 1 });

db.async = {};

db.async.all = (sql, params) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, rows) => {
            resolve({ err, rows });
        });
    });
};

db.async.run = (sql, params) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, rows) => {
            resolve({ err, rows });
        });
    });
};

db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database');
});

module.exports = { db, genid }; // 确保正确导出 db 对象