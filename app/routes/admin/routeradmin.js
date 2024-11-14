module.exports = function (application) {
  application.get("/", function (req, res) {
    application.app.controllers.admin.controlleradmin.index(application, req, res);
  });

  application.get("/sair", function (req, res) {
    if (req.session.loggedin) {
      req.session = null;
      var mensage = "Você saiu!!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/login", function (req, res) {
    application.app.controllers.admin.controlleradmin.login(application, req, res);
  });

  application.get("/principal?:perfil", function (req, res) {
    if (req.session.loggedin) {
      const perfil = req.query.perfil;
      application.app.controllers.admin.controlleradmin.principal(application, req.session, perfil, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/cadastrarusuario", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.admin.controlleradmin.cadastrarusuario(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/editarusuario", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.admin.controlleradmin.editarusuario(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.post("/deleteusuario", function (req, res) {
    if (req.session.loggedin) {
      application.app.controllers.admin.controlleradmin.deleteusuario(application, req.session, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });

  application.get("/administrativo?:perfil", function (req, res) {
    if (req.session.loggedin) {
      const perfil = req.query.perfil;
      application.app.controllers.admin.controlleradmin.administrativo(application, req.session, perfil, req, res);
    } else {
      var mensage = "Faça login!!";
      res.render("./login", { msg: mensage });
    }
  });
};
