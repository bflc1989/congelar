module.exports = function (application) {
  application.get("/orcamentos?:perfil", function (req, res) {
    if (req.session.loggedin) {
      const perfil = req.query.perfil;
      application.app.controllers.orcamento.controllerorcamento.orcamentos(application, req.session, perfil, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.get("/editorcamentopf", function (req, res) {
    if (req.session.loggedin) {
      const perfil = req.query.perfil;
      const cpf = req.query.cpf;

      application.app.controllers.orcamento.controllerorcamento.editorcamentopf(application, req.session, perfil, cpf, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.get("/editorcamentopj", function (req, res) {
    if (req.session.loggedin) {
      const perfil = req.query.perfil;
      const cnpj = req.query.cnpj;

      application.app.controllers.orcamento.controllerorcamento.editorcamentopj(application, req.session, perfil, cnpj, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.get("/buscarcliente", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.orcamento.controllerorcamento.buscarcliente(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });
  application.get("/buscarclientepj", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.orcamento.controllerorcamento.buscarclientepj(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/criarOrcamento", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.orcamento.controllerorcamento.criarOrcamento(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/adicionarlinha", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.orcamento.controllerorcamento.adicionarlinha(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });
  application.post("/editarorcamento", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.orcamento.controllerorcamento.editarorcamento(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/aprovarorcamentopf", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.orcamento.controllerorcamento.aprovarorcamentopf(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/aprovarorcamentopj", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.orcamento.controllerorcamento.aprovarorcamentopj(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });
  application.get("/deletelinha", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.orcamento.controllerorcamento.deletelinha(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.get("/deletelinhapj", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.orcamento.controllerorcamento.deletelinhapj(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.get("/deleteorcamentopf", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.orcamento.controllerorcamento.deleteorcamentopf(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.get("/deleteorcamentopj", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.orcamento.controllerorcamento.deleteorcamentopj(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });
};
