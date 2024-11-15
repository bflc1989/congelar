/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');

/* importar o módulo do body-parser */
var bodyParser = require('body-parser');

/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* importar o módulo do cors */
const cors = require('cors');

/* importar o módulo do session */
var session = require('cookie-session');

/* iniciar o objeto do express */
var app = express();

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*configurando cors*/
var corsOptions = {
	origin: '*',
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: false
}));

/* configurar o middleware express.static */
app.use(express.static('./app/public'));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* configurar o middleware express-validator */
/*app.use(expressValidator());*/

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/model')
	.then('app/controllers')
	.into(app);

/* exportar o objeto app */
module.exports = app;