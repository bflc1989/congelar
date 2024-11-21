var mysql = require("mysql");

/*const pool = mysql.createPool({
  connectionLimit: 25,
  host: "localhost",
  user: "root",
  password: "",
  database: "congelarDB",
});*/

const pool = mysql.createPool({
  connectionLimit: 1000,
  host: "congelardb.mysql.uhserver.com",
  user: "usercongelar",
  password: "Congelar@2024",
  database: "congelardb",
});

process.on("SIGINT", () =>
  pool.end((err) => {
    if (err) return console.log(err);
    process.exit(0);
  })
);

(pool) => (req, res, next) => {
  pool.getConnection((err, connection) => {
    if (err) return next(err);
    // adicionou a conexão na requisição
    req.connection = connection;
    // passa a requisição o próximo middleware
    next();
    // devolve a conexão para o pool no final da resposta
    res.on("finish", () => req.connection.release());
  });
};
module.exports = function () {
  return pool;
};
