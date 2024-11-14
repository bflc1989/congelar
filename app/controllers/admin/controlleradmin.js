module.exports.index = function (application, req, res) {
  res.render("./login", { msg: {} });
};

module.exports.login = function (application, req, res) {
  var usuario = req.body.usuario;
  var senha = req.body.password;

  var modeladmin = new application.app.model.admin.modeladmin(application);
  modeladmin.login(usuario, senha, req, res);
};

module.exports.cadastrarusuario = function (application, session, req, res) {
  var nome = req.body.nome;
  var sobrenome = req.body.sobrenome;
  var funcao = req.body.funcao;
  var perfil = req.body.perfil;
  var usuario = req.body.usuario;
  var senha = req.body.senha;
  var perfilusuario = req.body.perfilusuario;
  var user = session.usuario;

  var modeladmin = new application.app.model.admin.modeladmin(application);
  modeladmin.usuariosunico(usuario, function (error, resultadouserunico) {
    if (resultadouserunico != "") {
      modeladmin.usuarios(function (error, resultadouser) {
        var user = session.usuario;
        var mensage = "Nome de usuario ja cadastrado";
        res.render("./administrativo", { id: user, resultadouser: resultadouser, perfil: perfilusuario, msg: mensage });
      });
    } else {
      modeladmin.cadastrarusuario(nome, sobrenome, funcao, perfil, usuario, senha, user, perfilusuario, req, res);
    }
  });
};

module.exports.editarusuario = function (application, session, req, res) {
  var iduser = req.body.idedituser;
  var nome = req.body.nomeedituser;
  var sobrenome = req.body.sobrenomeedituser;
  var funcao = req.body.funcaoedituser;
  var perfil = req.body.editperfil;
  var usuario = req.body.usuarioedituser;
  var senha = req.body.senhaedituser;
  var user = session.usuario;
  var perfilusuario = req.body.perfilusuario;

  var modeladmin = new application.app.model.admin.modeladmin(application);
  modeladmin.editarusuario(iduser, nome, sobrenome, funcao, perfil, usuario, senha, user, perfilusuario, req, res);
};

module.exports.deleteusuario = function (application, session, req, res) {
  var iddeleteuser = req.body.iddeleteuser;
  var user = session.usuario;
  var perfilusuario = req.body.perfilusuario;
  var modeladmin = new application.app.model.admin.modeladmin(application);

  modeladmin.deleteusuario(iddeleteuser, user, perfilusuario, req, res);
};
module.exports.principal = function (application, session, perfil, req, res) {
  var modelservico = new application.app.model.servico.modelservico(application);
  var user = session.usuario;

  modelservico.buscarservicopfdesatualizado(function (error, resultado) {
    modelservico.buscarservicopjdesatualizado(function (error, resultados) {
      res.render("./principal", { id: user, perfil: perfil, resultado: resultado, resultados: resultados });
    });
  });
};

module.exports.administrativo = function (application, session, perfil, req, res) {
  var modeladmin = new application.app.model.admin.modeladmin(application);
  modeladmin.usuarios(function (error, resultadouser) {
    var user = session.usuario;
    res.render("./administrativo", { id: user, resultadouser: resultadouser, perfil: perfil, msg: {} });
  });
};

module.exports.orcamentos = function (application, session, perfil, req, res) {
  var user = session.usuario;

  res.render("./orcamentos", { id: user, perfil: perfil });
};

module.exports.servico = function (application, session, perfil, req, res) {
  var user = session.usuario;
  res.render("./servico", { id: user, perfil: perfil });
};
