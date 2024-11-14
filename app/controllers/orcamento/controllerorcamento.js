module.exports.orcamentos = function (application, session, perfil, req, res) {
  var modelorcamento = new application.app.model.orcamento.modelorcamento(application);
  var user = session.usuario;
  modelorcamento.buscarorcamento(function (error, resultado) {
    modelorcamento.buscarorcamentopj(function (error, resultados) {
      res.render("./orcamentos", { id: user, perfil: perfil, resultado: resultado, resultados: resultados });
    });
  });
};

module.exports.editorcamentopf = function (application, session, perfil, cpf, req, res) {
  var modelorcamento = new application.app.model.orcamento.modelorcamento(application);

  var user = session.usuario;
  modelorcamento.editorcamentopf(cpf, function (error, resultado) {
    res.render("./editorcamentopf", { id: user, perfil: perfil, resultado: resultado });
  });
};

module.exports.editorcamentopj = function (application, session, perfil, cpf, req, res) {
  var modelorcamento = new application.app.model.orcamento.modelorcamento(application);

  var user = session.usuario;
  modelorcamento.editorcamentopj(cpf, function (error, resultado) {
    res.render("./editorcamentopj", { id: user, perfil: perfil, resultado: resultado });
  });
};

module.exports.adicionarlinha = function (application, session, perfil, req, res) {
  var modelorcamento = new application.app.model.orcamento.modelorcamento(application);
  var user = session.usuario;
  modelorcamento.criartabelapf(id, qtd, desc, val, parc, function (error, resultado) {
    res.render("./editorcamento", { id: user, perfil: perfil, resultado: resultado });
  });
};

module.exports.buscarcliente = function (application, session, req, res) {
  var modelorcamento = new application.app.model.orcamento.modelorcamento(application);
  var valor = req.query.cpf;
  modelorcamento.buscarclientepf(valor, function (error, resultado) {
    res.send(resultado);
  });
};

module.exports.buscarclientepj = function (application, session, req, res) {
  var modelorcamento = new application.app.model.orcamento.modelorcamento(application);
  var valor = req.query.cnpj;
  modelorcamento.buscarclientepj(valor, function (error, resultado) {
    res.send(resultado);
  });
};

module.exports.criarOrcamento = function (application, session, req, res) {
  var modelorcamento = new application.app.model.orcamento.modelorcamento(application);
  var cpf = req.body.cpf;
  var cnpj = req.body.cnpj;
  var nomeempresa = req.body.nomeempresa;
  var representante = req.body.representante;
  var telefonepj = req.body.telefonepj;
  var emailpj = req.body.emailpj;
  var enderecopj = req.body.enderecopj;
  var nomepf = req.body.nomepf;
  var telefonepf = req.body.telefonepf;
  var enderecopf = req.body.enderecopf;
  var emailpf = req.body.emailpf;
  var principal = req.body.principal;
  var principal2 = req.body.principal2;
  var tabela = req.body.linhaTabela;
  var CONDIÇÕES = req.body.CONDIÇÕES;
  var EXECUÇÃO = req.body.EXECUÇÃO;
  var GARANTIA = req.body.GARANTIA;
  var PROPOSTA = req.body.PROPOSTA;
  var perfil = req.body.perfil;
  if (cpf != "") {
    modelorcamento.buscarorcamentopfunico(cpf, function (req, resul) {
      if (resul.length > 0) {
        var msg = "Cliente com orçcamento pendente";
        res.send(msg);
      } else {
        if (principal == undefined && principal2 == undefined) {
          res.send("Adicionar Escopo");
        } else {
          modelorcamento.criarOrcamentopf(cpf, nomepf, telefonepf, enderecopf, emailpf, CONDIÇÕES, EXECUÇÃO, GARANTIA, PROPOSTA, function (error, resultado) {
            var idinsert = JSON.parse(JSON.stringify(resultado));
            modelorcamento.criarescopoclientepf(idinsert.insertId, principal2, function (error, result) {
              modelorcamento.criarescopocongelarpf(idinsert.insertId, principal, function (error, results) {
                var arr = [];
                var max = 4;
                for (var i = 0; i < tabela.length; i = i + max) {
                  arr.push(tabela.slice(i, i + max));
                }
                for (var j = 0; j < arr.length; j++) {
                  var qtd = arr[j][0];
                  var desc = arr[j][1];
                  var val = arr[j][2];
                  var parc = arr[j][3];
                  modelorcamento.criartabelapf(idinsert.insertId, qtd, desc, val, parc);
                }

                res.send(perfil);
              });
            });
          });
        }
      }
    });
  } else {
    modelorcamento.buscarorcamentopjunico(cnpj, function (req, resuls) {
      if (resul.length > 0) {
        var msg = "Cliente com orçcamento pendente";
        res.send(msg);
      } else {
        if (principal == undefined && principal2 == undefined) {
          res.send("Adicionar Escopo");
        } else {
          modelorcamento.criarOrcamentopj(cnpj, nomeempresa, representante, telefonepj, emailpj, enderecopj, CONDIÇÕES, EXECUÇÃO, GARANTIA, PROPOSTA, function (error, resultadoinsert) {
            var idinsert = JSON.parse(JSON.stringify(resultadoinsert));

            modelorcamento.criarescopoclientepj(idinsert.insertId, principal2, function (error, result) {
              modelorcamento.criarescopocongelarpj(idinsert.insertId, principal, function (error, results) {
                var arr = [];
                var max = 4;
                for (var i = 0; i < tabela.length; i = i + max) {
                  arr.push(tabela.slice(i, i + max));
                }
                for (var j = 0; j < arr.length; j++) {
                  var qtd = arr[j][0];
                  var desc = arr[j][1];
                  var val = arr[j][2];
                  var parc = arr[j][3];
                  modelorcamento.criartabelapj(idinsert.insertId, qtd, desc, val, parc);
                }
                res.send(perfil);
              });
            });
          });
        }
      }
    });
  }
};

module.exports.editarorcamento = function (application, session, req, resposta) {
  var modelorcamento = new application.app.model.orcamento.modelorcamento(application);
  var cpf = req.body.cpf;
  var idorcamentopf = req.body.idorcamentopf;
  var idorcamentopj = req.body.idorcamentopj;
  var cnpj = req.body.cnpj;
  var nomeempresa = req.body.nomeempresa;
  var representante = req.body.representante;
  var telefonepj = req.body.telefonepj;
  var emailpj = req.body.emailpj;
  var enderecopj = req.body.enderecopj;
  var nomepf = req.body.nomepf;
  var telefonepf = req.body.telefonepf;
  var enderecopf = req.body.enderecopf;
  var emailpf = req.body.emailpf;
  var principal = req.body.principal;
  var principal2 = req.body.principal2;
  var tabela = req.body.linhaTabela;
  var tabelanova = req.body.linhaTabela1;
  var CONDIÇÕES = req.body.CONDIÇÕES;
  var EXECUÇÃO = req.body.EXECUÇÃO;
  var GARANTIA = req.body.GARANTIA;
  var PROPOSTA = req.body.PROPOSTA;
  var perfil = req.body.perfil;
  var user = session.usuario;

  if (cpf != "") {
    if ((principal == undefined && principal2 == undefined) || (principal == "" && principal2 == "")) {
      resposta.send("Adicionar Escopo");
    }
    if (tabela == undefined || tabela == "") {
      resposta.send("Adicionar linha tabela");
    } else {
      modelorcamento.editarorcamentopf(idorcamentopf, cpf, nomepf, telefonepf, enderecopf, emailpf, CONDIÇÕES, EXECUÇÃO, GARANTIA, PROPOSTA, function (error, resultado) {
        modelorcamento.editarescopoclientepf(idorcamentopf, principal2, function (error, result) {
          modelorcamento.editarescopocongelarpf(idorcamentopf, principal, function (error, ress) {
            var arr = [];
            var max = 5;

            for (var i = 0; i < tabela.length; i = i + max) {
              arr.push(tabela.slice(i, i + max));
            }

            for (var q = 0; q < arr.length; q++) {
              var idtabela = arr[q][0];
              var qtd = arr[q][1];
              var desc = arr[q][2];
              var val = arr[q][3];
              var parc = arr[q][4];

              modelorcamento.editartabelapf(idorcamentopf, idtabela, qtd, desc, val, parc);
            }
            var arrinsert = [];
            var maxinsert = 5;
            if (tabelanova == undefined) {
            } else {
              for (var h = 0; h < tabelanova.length; h = h + maxinsert) {
                arrinsert.push(tabelanova.slice(h, h + maxinsert));
              }

              for (var w = 0; w < arrinsert.length; w++) {
                var qtd = arrinsert[w][1];
                var desc = arrinsert[w][2];
                var val = arrinsert[w][3];
                var parc = arrinsert[w][4];

                modelorcamento.criartabelapf(idorcamentopf, qtd, desc, val, parc);
              }
            }
          });
        });
        resposta.send(resultado);
      });
    }
  } else {
    if ((principal == undefined && principal2 == undefined) || (principal == "" && principal2 == "")) {
      resposta.send("Adicionar Escopo");
    }
    if (tabela == undefined || tabela == "") {
      resposta.send("Adicionar linha tabela");
    } else {
      modelorcamento.editarorcamentopj(idorcamentopj, cnpj, nomeempresa, representante, telefonepj, emailpj, enderecopj, CONDIÇÕES, EXECUÇÃO, GARANTIA, PROPOSTA, function (error, resultado) {
        modelorcamento.editarescopoclientepj(idorcamentopj, principal2, function (error, result) {
          modelorcamento.editarescopocongelarpj(idorcamentopj, principal, function (error, ress) {
            var arr = [];
            var max = 5;

            for (var i = 0; i < tabela.length; i = i + max) {
              arr.push(tabela.slice(i, i + max));
            }

            for (var q = 0; q < arr.length; q++) {
              var idtabela = arr[q][0];
              var qtd = arr[q][1];
              var desc = arr[q][2];
              var val = arr[q][3];
              var parc = arr[q][4];

              modelorcamento.editartabelapj(idorcamentopj, idtabela, qtd, desc, val, parc);
            }
            var arrinsert = [];
            var maxinsert = 5;
            if (tabelanova == undefined) {
            } else {
              for (var h = 0; h < tabelanova.length; h = h + maxinsert) {
                arrinsert.push(tabelanova.slice(h, h + maxinsert));
              }

              for (var w = 0; w < arrinsert.length; w++) {
                var qtd = arrinsert[w][1];
                var desc = arrinsert[w][2];
                var val = arrinsert[w][3];
                var parc = arrinsert[w][4];

                modelorcamento.criartabelapj(idorcamentopj, qtd, desc, val, parc);
              }
            }
          });
        });
        resposta.send(resultado);
      });
    }
  }
};

module.exports.deletelinha = function (application, session, req, res) {
  var modelorcamento = new application.app.model.orcamento.modelorcamento(application);
  var idlinha = req.query.id;

  modelorcamento.deletelinha(idlinha, function (error, resultado) {
    res.send(resultado);
  });
};

module.exports.deletelinhapj = function (application, session, req, res) {
  var modelorcamento = new application.app.model.orcamento.modelorcamento(application);
  var idlinha = req.query.id;

  modelorcamento.deletelinhapj(idlinha, function (error, resultado) {
    res.send(resultado);
  });
};

module.exports.deleteorcamentopf = function (application, session, req, res) {
  var modelorcamento = new application.app.model.orcamento.modelorcamento(application);
  var idorcamento = req.query.valor;

  modelorcamento.deleteorcamentopf(idorcamento, function (error, resultado1) {
    modelorcamento.deleteescopocongelarpf(idorcamento, function (error, resultado2) {
      modelorcamento.deleteescopoclientepf(idorcamento, function (error, resultado3) {
        modelorcamento.deletetabelapf(idorcamento, function (error, resultado) {
          res.send(resultado);
        });
      });
    });
  });
};

module.exports.deleteorcamentopj = function (application, session, req, res) {
  var modelorcamento = new application.app.model.orcamento.modelorcamento(application);
  var idorcamento = req.query.valor;

  modelorcamento.deleteorcamentopj(idorcamento, function (error, resultado1) {
    modelorcamento.deleteescopocongelarpj(idorcamento, function (error, resultado2) {
      modelorcamento.deleteescopoclientepj(idorcamento, function (error, resultado3) {
        modelorcamento.deletetabelapj(idorcamento, function (error, resultado) {
          res.send(resultado);
        });
      });
    });
  });
};

module.exports.aprovarorcamentopf = function (application, session, req, res) {
  var modelorcamento = new application.app.model.orcamento.modelorcamento(application);
  var modelservico = new application.app.model.servico.modelservico(application);
  var idorcamento = req.body.idorcamentopfaprovar;
  var status = req.body.inputaprovacaopf;
  var cpf = req.body.idclientepfaprovar;
  var perfil = req.body.perfil;

  modelorcamento.aprovarorcamentopf(idorcamento, status, function (error, resultado) {
    if (status == "Aprovado") {
      modelservico.criarservicopf(cpf, function (error, resultado) {
        var user = session.usuario;
        modelorcamento.buscarorcamento(function (error, resultado) {
          modelorcamento.buscarorcamentopj(function (error, resultados) {
            res.render("./orcamentos", { id: user, perfil: perfil, resultado: resultado, resultados: resultados });
          });
        });
      });
    } else {
      var user = session.usuario;
      modelorcamento.buscarorcamento(function (error, resultado) {
        modelorcamento.buscarorcamentopj(function (error, resultados) {
          res.render("./orcamentos", { id: user, perfil: perfil, resultado: resultado, resultados: resultados });
        });
      });
    }
  });
};

module.exports.aprovarorcamentopj = function (application, session, req, res) {
  var modelorcamento = new application.app.model.orcamento.modelorcamento(application);
  var modelservico = new application.app.model.servico.modelservico(application);
  var idorcamento = req.body.idorcamentopjaprovar;
  var status = req.body.inputaprovacaopj;
  var cnpj = req.body.idclientepjaprovar;
  var perfil = req.body.perfil;

  if (status == "Aprovado") {
    modelorcamento.aprovarorcamentopj(idorcamento, status, function (error, resultado) {
      modelservico.criarservicopj(cnpj, function (error, resultad) {
        var user = session.usuario;
        modelorcamento.buscarorcamento(function (error, resultado) {
          modelorcamento.buscarorcamentopj(function (error, resultados) {
            res.render("./orcamentos", { id: user, perfil: perfil, resultado: resultado, resultados: resultados });
          });
        });
      });
    });
  } else {
    modelorcamento.aprovarorcamentopj(idorcamento, status, function (error, resultado) {
      var user = session.usuario;
      modelorcamento.buscarorcamento(function (error, resultado) {
        modelorcamento.buscarorcamentopj(function (error, resultados) {
          res.render("./orcamentos", { id: user, perfil: perfil, resultado: resultado, resultados: resultados });
        });
      });
    });
  }
};
