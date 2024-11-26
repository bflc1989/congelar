/* importar o módulo do framework express */
var express = require("express");

/* importar o módulo do consign */
var consign = require("consign");

/* importar o módulo do body-parser */
var bodyParser = require("body-parser");

/* importar o módulo do cors */
const cors = require("cors");

/* importar o módulo do session */
var session = require("cookie-session");

/* iniciar o objeto do express */
var app = express();

/* setar as variáveis 'view engine' e 'views' do express */
app.set("view engine", "ejs");
app.set("views", "./app/views");

/*configurando cors*/
app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

/* configurar o middleware express.static */
app.use(express.static("./app/public"));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({ extended: true }));

consign({
  verbose: process.env.APP_DEBUG === "true",
});
/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign().include("app/routes").then("config/dbConnection.js").then("app/model").then("app/controllers").into(app);

/* exportar o objeto app */
module.exports = app;
