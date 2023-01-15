const mysql = require("mysql");

// const mysqlConf = {
//   connectionLimit: 10,
//   host: "127.0.0.1",
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_ROOT_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   port: process.env.MYSQL_PORT,
// };

const mysqlConf = {
  connectionLimit: 10,
  host: "172.21.0.1",
  user: "root",
  password: "2222",
  database: "myapp",
};

console.log(mysqlConf);

const pool = mysql.createPool(mysqlConf);
exports.pool = pool;
