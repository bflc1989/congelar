module.exports = function (application) {
  application.post("/cadastrapf", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.clientes.controllercliente.cadastrapf(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/cadastrapj", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.clientes.controllercliente.cadastrapj(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/editarpf", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.clientes.controllercliente.editarpf(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/editarpj", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.clientes.controllercliente.editarpj(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/deletepf", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.clientes.controllercliente.deletepf(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/deletepj", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.clientes.controllercliente.deletepj(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });
  application.get("/clientes?:perfil", function (req, res) {
    if (req.session.loggedin) {
      const perfil = req.query.perfil;
      application.app.controllers.clientes.controllercliente.clientes(application, req.session, perfil, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });
};
