module.exports.cadastrapf = function (application, session, req, res) {
  var nome = req.body.nome;
  var cpf = req.body.cpf;
  var cep = req.body.cep;
  var endereco = req.body.endereco;
  var cidade = req.body.cidade;
  var estado = req.body.estado;
  var telefone = req.body.telefone;
  var email = req.body.email;
  var datanasc = req.body.datanasc;
  var banco = req.body.banco;
  var agencia = req.body.agencia;
  var contacorrente = req.body.contacorrente;
  var prazo = req.body.prazo;
  var user = session.usuario;
  var perfil = req.body.perfil;

  var modelcliente = new application.app.model.clientes.modelcliente(application);
  modelcliente.cadastrapf(nome, cpf, cep, endereco, cidade, estado, telefone, email, datanasc, banco, agencia, contacorrente, prazo, user, perfil, req, res);
};

module.exports.editarpf = function (application, session, req, res) {
  var idcliente = req.body.ideditpf;
  var nome = req.body.nomeeditpf;
  var cpf = req.body.cpfeditpf;
  var cep = req.body.cepeditpf;
  var endereco = req.body.enderecoeditpf;
  var cidade = req.body.cidadeeditpf;
  var estado = req.body.estadoeditpf;
  var telefone = req.body.telefoneeditpf;
  var email = req.body.emaileditpf;
  var datanasc = req.body.datanasceditpf;
  var banco = req.body.bancoeditpf;
  var agencia = req.body.agenciaeditpf;
  var contacorrente = req.body.contacorrenteeditpf;
  var prazo = req.body.prazoeditpf;
  var user = session.usuario;
  var perfil = req.body.perfil;

  var modelcliente = new application.app.model.clientes.modelcliente(application);
  modelcliente.editarpf(idcliente, nome, cpf, cep, endereco, cidade, estado, telefone, email, datanasc, banco, agencia, contacorrente, prazo, user, perfil, req, res);
};

module.exports.deletepf = function (application, session, req, res) {
  var idcliente = req.body.iddeletepf;
  var user = session.usuario;
  var perfil = req.body.perfil;
  var modelcliente = new application.app.model.clientes.modelcliente(application);
  modelcliente.deletepf(idcliente, user, perfil, req, res);
};

module.exports.cadastrapj = function (application, session, req, res) {
  var empresa = req.body.empresa;
  var fantasia = req.body.fantasia;
  var cnpj = req.body.cnpj;
  var estadual = req.body.estadual;
  var municipal = req.body.municipal;
  var nome = req.body.representante;
  var cargo = req.body.cargo;
  var telefone = req.body.telefone;
  var email = req.body.email;
  var faturamento = req.body.faturamento;
  var banco = req.body.banco;
  var agencia = req.body.agencia;
  var contacorrente = req.body.contacorrente;
  var prazo = req.body.prazo;
  var endereco = req.body.endereco;
  var user = session.usuario;
  var perfil = req.body.perfil;

  var modelcliente = new application.app.model.clientes.modelcliente(application);
  modelcliente.cadastrapj(empresa, fantasia, cnpj, estadual, municipal, nome, cargo, telefone, email, faturamento, banco, agencia, contacorrente, prazo, endereco, user, perfil, req, res);
};

module.exports.editarpj = function (application, session, req, res) {
  var idcliente = req.body.ideditpj;
  var empresa = req.body.empresaeditpj;
  var fantasia = req.body.fantasiaeditpj;
  var cnpj = req.body.cnpjeditpj;
  var estadual = req.body.estadualeditpj;
  var municipal = req.body.municipaleditpj;
  var nome = req.body.representanteeditpj;
  var cargo = req.body.cargoeditpj;
  var telefone = req.body.telefoneeditpj;
  var email = req.body.emaileditpj;
  var faturamento = req.body.faturamentoeditpj;
  var banco = req.body.bancoeditpj;
  var agencia = req.body.agenciaeditpj;
  var contacorrente = req.body.contacorrenteeditpj;
  var prazo = req.body.prazoeditpj;
  var endereco = req.body.enderecoeditpj;
  var user = session.usuario;
  var perfil = req.body.perfil;

  var modelcliente = new application.app.model.clientes.modelcliente(application);
  modelcliente.editarpj(idcliente, empresa, fantasia, cnpj, estadual, municipal, nome, cargo, telefone, email, faturamento, banco, agencia, contacorrente, prazo, endereco, user, perfil, req, res);
};

module.exports.deletepj = function (application, session, req, res) {
  var idcliente = req.body.iddeletepj;
  var user = session.usuario;
  var perfil = req.body.perfil;
  var modelcliente = new application.app.model.clientes.modelcliente(application);
  modelcliente.deletepj(idcliente, user, perfil, req, res);
};

module.exports.clientes = function (application, session, perfil, req, res) {
  var modelcliente = new application.app.model.clientes.modelcliente(application);

  modelcliente.clientes(function (error, resultado) {
    modelcliente.clientespj(function (error, resultadopj) {
      var user = session.usuario;
      res.render("./clientes", { id: user, resultado: resultado, resultadopj: resultadopj, perfil: perfil });
    });
  });
};
