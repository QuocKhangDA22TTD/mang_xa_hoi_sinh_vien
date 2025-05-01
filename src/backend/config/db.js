const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'db',
    user: 'myuser',
    password: 'mypassword',
    database: 'MXHSV'
});
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected');
});
module.exports = db;