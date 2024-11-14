module.exports = function (application) {
  application.get("/servico?:perfil", function (req, res) {
    if (req.session.loggedin) {
      const perfil = req.query.perfil;
      application.app.controllers.servico.controllerservico.servico(application, req.session, perfil, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/concluirpj", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.servico.controllerservico.concluirpj(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/deleteservicopj", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.servico.controllerservico.deletepj(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/boletopj", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.servico.controllerservico.boletopj(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/concluirpf", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.servico.controllerservico.concluirpf(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/deleteservicopf", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.servico.controllerservico.deletepf(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/boletopf", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.servico.controllerservico.boletopf(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });
};
