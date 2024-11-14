module.exports.servico = function (application, session, perfil, req, res) {
  var modelservico = new application.app.model.servico.modelservico(application);
  var user = session.usuario;

  modelservico.buscarservicopf(function (error, resultado) {
    modelservico.buscarservicopj(function (error, resultados) {
      res.render("./servico", { id: user, perfil: perfil, resultado: resultado, resultados: resultados });
    });
  });
};

module.exports.concluirpj = function (application, session, req, res) {
  var modelservico = new application.app.model.servico.modelservico(application);
  var user = session.usuario;
  var idservicopj = req.body.idservicopj;
  var perfil = req.body.perfil;
  const now = new Date();
  var data = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();

  modelservico.buscarservicopf(function (error, resultado) {
    modelservico.buscarservicopj(function (error, resultados) {
      modelservico.concluirpj(idservicopj, data, function (error, resultad) {
        res.redirect("./servico?perfil=" + perfil);
      });
    });
  });
};

module.exports.deletepj = function (application, session, req, res) {
  var modelservico = new application.app.model.servico.modelservico(application);
  var user = session.usuario;
  var iddeletepj = req.body.iddeletepj;
  var perfil = req.body.perfil;

  modelservico.buscarservicopf(function (error, resultado) {
    modelservico.buscarservicopj(function (error, resultados) {
      modelservico.deletepj(iddeletepj, function (error, resultad) {
        res.redirect("./servico?perfil=" + perfil);
      });
    });
  });
};

module.exports.boletopj = function (application, session, req, res) {
  var modelservico = new application.app.model.servico.modelservico(application);
  var user = session.usuario;
  var idboletopj = req.body.idboletopj;
  var boletopj = req.body.boletopj;
  var valorpj = req.body.valorpj;
  var vencimentopj = req.body.vencimentopj;
  var perfil = req.body.perfil;
  modelservico.buscarservicopf(function (error, resultado) {
    modelservico.buscarservicopj(function (error, resultados) {
      modelservico.boletopj(idboletopj, boletopj, valorpj, vencimentopj, function (error, resultad) {
        res.redirect("./servico?perfil=" + perfil);
      });
    });
  });
};

module.exports.concluirpf = function (application, session, req, res) {
  var modelservico = new application.app.model.servico.modelservico(application);
  var user = session.usuario;
  var idservicopf = req.body.idservicopf;
  var perfil = req.body.perfil;
  const now = new Date();

  var data = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();

  modelservico.buscarservicopf(function (error, resultado) {
    modelservico.buscarservicopj(function (error, resultados) {
      modelservico.concluirpf(idservicopf, data, function (error, resultad) {
        res.redirect("./servico?perfil=" + perfil);
      });
    });
  });
};

module.exports.deletepf = function (application, session, req, res) {
  var modelservico = new application.app.model.servico.modelservico(application);
  var user = session.usuario;
  var iddeletepf = req.body.iddeletepf;
  var perfil = req.body.perfil;

  modelservico.buscarservicopf(function (error, resultado) {
    modelservico.buscarservicopj(function (error, resultados) {
      modelservico.deletepf(iddeletepf, function (error, resultad) {
        res.redirect("./servico?perfil=" + perfil);
      });
    });
  });
};

module.exports.boletopf = function (application, session, req, res) {
  var modelservico = new application.app.model.servico.modelservico(application);
  var user = session.usuario;
  var idboletopf = req.body.idboletopf;
  var boletopf = req.body.boletopf;
  var valorpf = req.body.valorpf;
  var vencimentopf = req.body.vencimentopf;
  var perfil = req.body.perfil;
  modelservico.buscarservicopf(function (error, resultado) {
    modelservico.buscarservicopj(function (error, resultados) {
      modelservico.boletopf(idboletopf, boletopf, valorpf, vencimentopf, function (error, resultad) {
        res.redirect("./servico?perfil=" + perfil);
      });
    });
  });
};
