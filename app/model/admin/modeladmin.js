function modeladmin(application) {
  var conection = require("../../../config/dbConnection");
  this._conection = conection();
}

modeladmin.prototype.login = function (usuario, senha, req, res) {
  var usuario = usuario;
  var senha = senha;

  if (usuario && senha) {
    this._conection.query("SELECT * FROM usuarios WHERE usuario = ? AND senha = ?", [usuario, senha], function (error, results, fields) {
      console.log(error);
      if (results.length > 0) {
        if (results[0].perfil != "Colaborador") {
          req.session.loggedin = true;
          req.session.usuario = results[0].nome;
          req.sessionID = results[0].idusers;
          var perfil = results[0].perfil;
          res.redirect("./principal?perfil=" + perfil);
        } else {
          req.session.loggedin = true;
          req.session.usuario = results[0].nome;
          req.sessionID = results[0].idusers;
          var perfil = results[0].perfil;
          res.redirect("./servico?perfil=" + perfil);
        }
      } else {
        var mensage = "Usuario ou senha incorreto";
        res.render("./login", { msg: mensage });
      }
      res.end();
    });
  } else {
    var mensage = "Por favor entre com usuario e senha";
    res.render("./login", { msg: mensage });
  }
};

modeladmin.prototype.cadastrarusuario = function (nome, sobrenome, funcao, perfil, usuario, senha, user, perfilusuario, req, res) {
  var nome = nome;
  var sobrenome = sobrenome;
  var funcao = funcao;
  var perfil = perfil;
  var usuario = usuario;
  var senha = senha;
  var user = user;

  this._conection.query(
    'insert into usuarios set nome="' + nome + '", sobrenome="' + sobrenome + '", funcao="' + funcao + '",perfil="' + perfil + '", usuario="' + usuario + '", senha="' + senha + '"',
    function (error, result) {
      res.redirect("./administrativo?perfil=" + perfilusuario);
    }
  );
};

modeladmin.prototype.editarusuario = function (iduser, nome, sobrenome, funcao, perfil, usuario, senha, user, perfilusuario, req, res) {
  var iduser = iduser;
  var nome = nome;
  var sobrenome = sobrenome;
  var funcao = funcao;
  var perfil = perfil;
  var usuario = usuario;
  var senha = senha;
  var user = user;

  this._conection.query(
    'update usuarios set nome="' +
      nome +
      '", sobrenome="' +
      sobrenome +
      '", funcao="' +
      funcao +
      '", perfil="' +
      perfil +
      '", usuario="' +
      usuario +
      '", senha="' +
      senha +
      '" where idusers="' +
      iduser +
      '"',
    function (error, result) {
      res.redirect("./administrativo?perfil=" + perfilusuario);
    }
  );
};

modeladmin.prototype.deleteusuario = function (idusers, user, perfilusuario, req, res) {
  var idusers = idusers;
  var user = user;
  this._conection.query('delete from usuarios  where idusers="' + idusers + '"', function (error, result) {
    res.redirect("./administrativo?perfil=" + perfilusuario);
  });
};

modeladmin.prototype.usuarios = function (callback) {
  this._conection.query("select * from usuarios", callback);
};

modeladmin.prototype.usuariosunico = function (usuario, callback) {
  this._conection.query('select * from usuarios where usuario ="' + usuario + '"', callback);
};
/*
modeladmin.prototype.buscarusuarioeditavel = function(id, callback){
	
	this._conection.query('select * from usuarios where id_usuario = ' + id, callback);
}

modeladmin.prototype.buscarusuario = function(id, callback){
	
	this._conection.query('select * from usuarios where id_usuario = ' + id.id, callback);
}

modeladmin.prototype.buscarusuarioporid = function(id, callback){

	this._conection.query('select * from usuarios where id_usuario = ' + id, callback);
}

*/
module.exports = function () {
  return modeladmin;
};
