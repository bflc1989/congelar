function modeladmin(application) {
  var conection = require("../../../config/dbConnection");
  this._conection = conection();
}

modeladmin.prototype.buscarorcamento = function (callback) {
  this._conection.query("select * from orcamentopf ORDER BY aprovacao ASC", callback);
};

modeladmin.prototype.gerarpjpdf = function (valor, callback) {
  this._conection.query(
    'select * from orcamentopj as o inner join escopoclientepj as pj on o.idorcamentopj = pj.idorcamento inner join escopocongelarpj as copj on o.idorcamentopj = copj.idorcamento inner join tabelapj as tpj on o.idorcamentopj = tpj.idorcamento where o.idorcamentopj ="' +
      valor +
      '"',
    callback
  );
};

modeladmin.prototype.gerarpfpdf = function (valor, callback) {
  this._conection.query(
    'select * from orcamentopf as o inner join escopoclientepf as pf on o.idorcamentopf = pf.idorcamento inner join escopocongelarpf as copf on o.idorcamentopf = copf.idorcamento inner join tabelapf as tpf on o.idorcamentopf = tpf.idorcamento where o.idorcamentopf ="' +
      valor +
      '"',
    callback
  );
};
modeladmin.prototype.buscarorcamentopj = function (callback) {
  this._conection.query("select * from  orcamentopj ORDER BY aprovacao ASC", callback);
};

modeladmin.prototype.editorcamentopf = function (valor2, callback) {
  this._conection.query(
    'select * from orcamentopf as o inner join escopoclientepf as pf on o.idorcamentopf = pf.idorcamento inner join escopocongelarpf as copf on o.idorcamentopf = copf.idorcamento inner join tabelapf as tpf on o.idorcamentopf = tpf.idorcamento where o.cpf ="' +
      valor2 +
      '"',
    callback
  );
};

modeladmin.prototype.editorcamentopj = function (valor2, callback) {
  this._conection.query(
    'select * from orcamentopj as o inner join escopoclientepj as pj on o.idorcamentopj = pj.idorcamento inner join escopocongelarpj as copj on o.idorcamentopj = copj.idorcamento inner join tabelapj as tpj on o.idorcamentopj = tpj.idorcamento where o.cnpj ="' +
      valor2 +
      '"',
    callback
  );
};

modeladmin.prototype.buscarclientepf = function (valor, callback) {
  this._conection.query('select * from clientes where cpf = "' + valor + '"', callback);
};

modeladmin.prototype.buscarclientepj = function (valor, callback) {
  this._conection.query('select * from clientespj where cnpj = "' + valor + '"', callback);
};

modeladmin.prototype.criarOrcamentopf = function (cpf, nomepf, telefonepf, enderecopf, emailpf, CONDIÇÕES, EXECUÇÃO, GARANTIA, PROPOSTA, callback) {
  const now = new Date();
  var mes = now.getMonth() + 1;
  var data = now.getDate() + "/" + mes + "/" + now.getFullYear();

  this._conection.query(
    'insert into orcamentopf set datapf ="' +
      data +
      '", cpf="' +
      cpf +
      '", nomepf="' +
      nomepf +
      '", telefonepf="' +
      telefonepf +
      '", enderecopf="' +
      enderecopf +
      '", emailpf="' +
      emailpf +
      '", condicoes="' +
      CONDIÇÕES +
      '", execucao="' +
      EXECUÇÃO +
      '", garantia="' +
      GARANTIA +
      '", proposta="' +
      PROPOSTA +
      '"',
    callback
  );
};

modeladmin.prototype.criarOrcamentopj = function (cnpj, nomeempresa, representante, telefonepj, emailpj, enderecopj, CONDIÇÕES, EXECUÇÃO, GARANTIA, PROPOSTA, callback) {
  const now = new Date();
  var mes = now.getMonth() + 1;
  var data = now.getDate() + "/" + mes + "/" + now.getFullYear();

  this._conection.query(
    'insert into orcamentopj set datapj ="' +
      data +
      '", cnpj="' +
      cnpj +
      '", nomeempresa="' +
      nomeempresa +
      '", representante="' +
      representante +
      '", telefonepj="' +
      telefonepj +
      '", emailpj="' +
      emailpj +
      '",enderecopj="' +
      enderecopj +
      '", condicoes="' +
      CONDIÇÕES +
      '", execucao="' +
      EXECUÇÃO +
      '", garantia="' +
      GARANTIA +
      '", proposta="' +
      PROPOSTA +
      '"',
    callback
  );
};
modeladmin.prototype.criarescopoclientepf = function (id, principal, callback) {
  this._conection.query('insert into escopoclientepf set escopocliente="' + principal + '", idorcamento="' + id + '"', callback);
};

modeladmin.prototype.criarescopoclientepj = function (id, principal, callback) {
  this._conection.query('insert into escopoclientepj set escopocliente="' + principal + '", idorcamento="' + id + '"', callback);
};

modeladmin.prototype.criarescopocongelarpf = function (id, principal, callback) {
  this._conection.query('insert into escopocongelarpf set escopocongelar="' + principal + '", idorcamento="' + id + '"', callback);
};

modeladmin.prototype.criarescopocongelarpj = function (id, principal, callback) {
  this._conection.query('insert into escopocongelarpj set escopocongelar="' + principal + '", idorcamento="' + id + '"', callback);
};

modeladmin.prototype.criartabelapf = function (id, qtd, desc, val, desconto, novval, parc, callback) {
  this._conection.query(
    'insert into tabelapf set tabelaqtd="' +
      qtd +
      '",tabeladescricao="' +
      desc +
      '",tabelavalor="' +
      val +
      '",tabeladesconto="' +
      desconto +
      '",tabelanovovalor="' +
      novval +
      '",tabelaparcela="' +
      parc +
      '", idorcamento="' +
      id +
      '"',
    callback
  );
};

modeladmin.prototype.criartabelapj = function (id, qtd, desc, val, desconto, novval, parc, callback) {
  this._conection.query(
    'insert into tabelapj set tabelaqtd="' +
      qtd +
      '",tabeladescricao="' +
      desc +
      '",tabelavalor="' +
      val +
      '",tabeladesconto="' +
      desconto +
      '",tabelanovovalor="' +
      novval +
      '",tabelaparcela="' +
      parc +
      '", idorcamento="' +
      id +
      '"',
    callback
  );
};

modeladmin.prototype.editarorcamentopf = function (idorcamentopf, cpf, nomepf, telefonepf, enderecopf, emailpf, CONDIÇÕES, EXECUÇÃO, GARANTIA, PROPOSTA, callback) {
  this._conection.query(
    'update orcamentopf set cpf="' +
      cpf +
      '", nomepf="' +
      nomepf +
      '", telefonepf="' +
      telefonepf +
      '", enderecopf="' +
      enderecopf +
      '", emailpf="' +
      emailpf +
      '", condicoes="' +
      CONDIÇÕES +
      '", execucao="' +
      EXECUÇÃO +
      '", garantia="' +
      GARANTIA +
      '", proposta="' +
      PROPOSTA +
      '" where idorcamentopf = ' +
      idorcamentopf,
    callback
  );
};

modeladmin.prototype.editarorcamentopj = function (idorcamentopj, cnpj, nomeempresa, representante, telefonepj, emailpj, enderecopj, CONDIÇÕES, EXECUÇÃO, GARANTIA, PROPOSTA, callback) {
  this._conection.query(
    'update orcamentopj set cnpj="' +
      cnpj +
      '", nomeempresa="' +
      nomeempresa +
      '", representante="' +
      representante +
      '", telefonepj="' +
      telefonepj +
      '", emailpj="' +
      emailpj +
      '",enderecopj="' +
      enderecopj +
      '", condicoes="' +
      CONDIÇÕES +
      '", execucao="' +
      EXECUÇÃO +
      '", garantia="' +
      GARANTIA +
      '", proposta="' +
      PROPOSTA +
      '" where idorcamentopj = ' +
      idorcamentopj,
    callback
  );
};
modeladmin.prototype.editarescopoclientepf = function (idorcamentopf, principal, callback) {
  this._conection.query('update escopoclientepf set escopocliente="' + principal + '" where idorcamento = ' + idorcamentopf, callback);
};

modeladmin.prototype.editarescopoclientepj = function (idorcamentopj, principal, callback) {
  this._conection.query('update escopoclientepj set escopocliente="' + principal + '" where idorcamento = ' + idorcamentopj, callback);
};

modeladmin.prototype.editarescopocongelarpf = function (idorcamentopf, principal, callback) {
  this._conection.query('update escopocongelarpf set escopocongelar="' + principal + '" where idorcamento = ' + idorcamentopf, callback);
};

modeladmin.prototype.editarescopocongelarpj = function (idorcamentopj, principal, callback) {
  this._conection.query('update escopocongelarpj set escopocongelar="' + principal + '" where idorcamento = ' + idorcamentopj, callback);
};

modeladmin.prototype.editartabelapf = function (idorcamentopf, idtabela, qtd, desc, val, desconto, novval, parc, callback) {
  this._conection.query(
    'update tabelapf set tabelaqtd="' +
      qtd +
      '",tabeladescricao="' +
      desc +
      '",tabelavalor="' +
      val +
      '",tabeladesconto="' +
      desconto +
      '",tabelanovovalor="' +
      novval +
      '",tabelaparcela="' +
      parc +
      '",idorcamento="' +
      idorcamentopf +
      '" where idtabela =' +
      idtabela,
    callback
  );
};

modeladmin.prototype.editartabelapj = function (idorcamentopj, idtabela, qtd, desc, val, desconto, novval, parc, callback) {
  this._conection.query(
    'update tabelapj set tabelaqtd="' +
      qtd +
      '",tabeladescricao="' +
      desc +
      '",tabelavalor="' +
      val +
      '",tabeladesconto="' +
      desconto +
      '",tabelanovovalor="' +
      novval +
      '",tabelaparcela="' +
      parc +
      '",idorcamento="' +
      idorcamentopj +
      '" where idtabela ="' +
      idtabela +
      '"',
    callback
  );
};

modeladmin.prototype.deletelinha = function (idlinha, callback) {
  this._conection.query("delete from tabelapf where idtabela = " + idlinha, callback);
};

modeladmin.prototype.deletelinhapj = function (idlinha, callback) {
  this._conection.query("delete from tabelapj where idtabela = " + idlinha, callback);
};

modeladmin.prototype.deleteorcamentopf = function (idorcamento, callback) {
  this._conection.query("delete from orcamentopf where idorcamentopf = " + idorcamento, callback);
};
modeladmin.prototype.deleteescopocongelarpf = function (idorcamento, callback) {
  this._conection.query("delete from escopocongelarpf where idorcamento = " + idorcamento, callback);
};
modeladmin.prototype.deleteescopoclientepf = function (idorcamento, callback) {
  this._conection.query("delete from escopoclientepf where idorcamento = " + idorcamento, callback);
};
modeladmin.prototype.deletetabelapf = function (idorcamento, callback) {
  this._conection.query("delete from tabelapf where idorcamento = " + idorcamento, callback);
};
modeladmin.prototype.deleteorcamentopj = function (idorcamento, callback) {
  this._conection.query("delete from orcamentopj where idorcamentopj = " + idorcamento, callback);
};
modeladmin.prototype.deleteescopocongelarpj = function (idorcamento, callback) {
  this._conection.query("delete from escopocongelarpj where idorcamento = " + idorcamento, callback);
};
modeladmin.prototype.deleteescopoclientepj = function (idorcamento, callback) {
  this._conection.query("delete from escopoclientepj where idorcamento = " + idorcamento, callback);
};
modeladmin.prototype.deletetabelapj = function (idorcamento, callback) {
  this._conection.query("delete from tabelapj where idorcamento = " + idorcamento, callback);
};

modeladmin.prototype.aprovarorcamentopf = function (idorcamentopf, status, callback) {
  this._conection.query('update orcamentopf set aprovacao="' + status + '" where idorcamentopf = ' + idorcamentopf, callback);
};

modeladmin.prototype.aprovarorcamentopj = function (idorcamentopj, status, callback) {
  this._conection.query('update orcamentopj set aprovacao="' + status + '" where idorcamentopj = ' + idorcamentopj, callback);
};

modeladmin.prototype.buscarorcamentopfunico = function (cpf, callback) {
  this._conection.query('select * from orcamentopf where cpf = "' + cpf + '" && aprovacao = "Aguardando"', callback);
};

modeladmin.prototype.buscarorcamentopjunico = function (cnpj, callback) {
  this._conection.query('select * from orcamentopj where cnpj = "' + cnpj + '" && aprovacao = "Aguardando"', callback);
};

modeladmin.prototype.criarservicopf = function (cpf, callback) {
  this._conection.query('insert into servicopf set idclientepf="' + cpf + '"', callback);
};

modeladmin.prototype.criarservicopj = function (cnpj, callback) {
  this._conection.query('insert into servicopj set idclientepj="' + cnpj + '"', callback);
};
module.exports = function () {
  return modeladmin;
};
