function modeladmin(application) {
  var conection = require("../../../config/dbConnection");
  this._conection = conection();
}
modeladmin.prototype.buscarservicopf = function (callback) {
  this._conection.query("select *, DATE_FORMAT(dataconclusao,'%d/%m/%Y') AS niceDate  from servicopf", callback);
};

modeladmin.prototype.buscarservicopj = function (callback) {
  this._conection.query("select *, DATE_FORMAT(dataconclusao,'%d/%m/%Y') AS niceDate from servicopj", callback);
};

modeladmin.prototype.buscarservicopfdesatualizado = function (callback) {
  this._conection.query(
    " select *, DATE_FORMAT(ser.dataconclusao,'%d/%m/%Y') AS niceDate from servicopf as ser inner join clientes as cli on ser.idclientepf = cli.cpf where ser.dataconclusao > ( CURDATE() + INTERVAL 180 DAY )",
    callback
  );
};

modeladmin.prototype.buscarservicopjdesatualizado = function (callback) {
  this._conection.query(
    "select *, DATE_FORMAT(ser.dataconclusao,'%d/%m/%Y') AS niceDate from servicopj as ser inner join clientespj as cli on ser.idclientepj = cli.cnpj where ser.dataconclusao > ( CURDATE() + INTERVAL 180 DAY )",
    callback
  );
};

modeladmin.prototype.criarservicopf = function (cpf, callback) {
  this._conection.query('insert into servicopf set idclientepf="' + cpf + '"', callback);
};

modeladmin.prototype.criarservicopj = function (cnpj, callback) {
  this._conection.query('insert into servicopj set idclientepj="' + cnpj + '"', callback);
};

modeladmin.prototype.concluirpj = function (idservicopj, data, callback) {
  this._conection.query('update servicopj set dataconclusao =STR_TO_DATE("' + data + '","%d/%m/%Y"), status= "Concluido" where idservicopj = ' + idservicopj, callback);
};

modeladmin.prototype.deletepj = function (idservicopj, callback) {
  this._conection.query("delete from servicopj where idservicopj = " + idservicopj, callback);
};

modeladmin.prototype.boletopj = function (idservicopj, boletopj, valorpj, vencimentopj, callback) {
  this._conection.query('update servicopj set boleto = "' + boletopj + '", valor = "' + valorpj + '", vencimento = "' + vencimentopj + '" where idservicopj = ' + idservicopj, callback);
};

modeladmin.prototype.concluirpf = function (idservicopf, data, callback) {
  this._conection.query('update servicopf set dataconclusao =STR_TO_DATE("' + data + '","%d/%m/%Y"), status= "Concluido" where idservicopf = ' + idservicopf, callback);
};

modeladmin.prototype.deletepf = function (idservicopf, callback) {
  this._conection.query("delete from servicopf where idservicopf = " + idservicopf, callback);
};

modeladmin.prototype.boletopf = function (idservicopf, boletopf, valorpf, vencimentopf, callback) {
  this._conection.query('update servicopf set boleto = "' + boletopf + '", valor = "' + valorpf + '", vencimento = "' + vencimentopf + '" where idservicopf = ' + idservicopf, callback);
};

module.exports = function () {
  return modeladmin;
};
