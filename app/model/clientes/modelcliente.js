function modeladmin(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modeladmin.prototype.cadastrapf = function(nome,cpf,cep,endereco, cidade,estado,telefone,email,datanasc,banco,agencia,contacorrente,prazo,user,perfil, req, res){
	
	var nome = nome;
	var cpf = cpf;
	var cep = cep;
	var endereco = endereco;
	var cidade = cidade;
	var estado = estado;
	var telefone = telefone;
	var email = email;
	var datanasc = datanasc;
	var banco = banco;
	var agencia = agencia;
	var contacorrente = contacorrente;
	var prazo = prazo;
	var user = user
	
	this._conection.query('insert into clientes set nome="'+nome+'", cpf="'+cpf+'", cep="'+cep+'", endereco="'+endereco+'", cidade="'+cidade+'", estado="'+estado+'", telefone="'+telefone+'", email="'+email+'", nascimento="'+datanasc+'", banco="'+banco+'", agencia="'+agencia+'", corrente="'+contacorrente+'", prazo="'+prazo+'"', function(error, result){
		
		res.redirect("./clientes?perfil="+perfil);

	});
	
}

modeladmin.prototype.editarpf = function(idcliente, nome,cpf,cep,endereco, cidade,estado,telefone,email,datanasc,banco,agencia,contacorrente,prazo,user,perfil, req, res){
	
	var idcliente = idcliente;
	var nome = nome;
	var cpf = cpf;
	var cep = cep;
	var endereco = endereco;
	var cidade = cidade;
	var estado = estado;
	var telefone = telefone;
	var email = email;
	var datanasc = datanasc;
	var banco = banco;
	var agencia = agencia;
	var contacorrente = contacorrente;
	var prazo = prazo;
	var user = user
	
	this._conection.query('update clientes set nome="'+nome+'", cpf="'+cpf+'", cep="'+cep+'", endereco="'+endereco+'", cidade="'+cidade+'", estado="'+estado+'", telefone="'+telefone+'", email="'+email+'", nascimento="'+datanasc+'", banco="'+banco+'", agencia="'+agencia+'", corrente="'+contacorrente+'", prazo="'+prazo+'" where idclientes="'+idcliente+'"', function(error, result){
		
		res.redirect("./clientes?perfil="+perfil);

	});
	
}

modeladmin.prototype.deletepf = function(idcliente,user,perfil, req, res){
	
	var idcliente = idcliente;
	var user = user
	this._conection.query('delete from clientes  where idclientes="'+idcliente+'"', function(error, result){
		
		res.redirect("./clientes?perfil="+perfil);

	});
	
}

modeladmin.prototype.cadastrapj = function(empresa,fantasia,cnpj,estadual,municipal,nome,cargo,telefone,email,faturamento,banco,agencia,contacorrente,prazo,endereco,user,perfil, req, res){
	
	var empresa = empresa;
	var fantasia = fantasia;
	var cnpj = cnpj;
	var estadual = estadual;
	var municipal = municipal;
	var nome = nome;
	var cargo = cargo;
	var telefone = telefone;
	var email = email;
	var faturamento = faturamento;
	var banco = banco;
	var agencia = agencia;
	var contacorrente = contacorrente;
	var prazo = prazo;
	var endereco = endereco;
	var user = user
	
	this._conection.query('insert into clientespj set empresa="'+empresa+'", fantasia="'+fantasia+'", cnpj="'+cnpj+'", estadual="'+estadual+'", municipal="'+municipal+'", nome="'+nome+'",cargo="'+cargo+'", telefone="'+telefone+'", email="'+email+'", faturamento="'+faturamento+'", banco="'+banco+'", agencia="'+agencia+'", corrente="'+contacorrente+'", prazo="'+prazo+'", endereco="'+endereco+'"', function(error, result){
		
		res.redirect("./clientes?perfil="+perfil);

	});
	
}

modeladmin.prototype.editarpj = function(idcliente, empresa,fantasia,cnpj,estadual,municipal,nome,cargo,telefone,email,faturamento,banco,agencia,contacorrente,prazo,endereco,user,perfil, req, res){
	
	var idcliente = idcliente;
	var empresa = empresa;
	var fantasia = fantasia;
	var cnpj = cnpj;
	var estadual = estadual;
	var municipal = municipal;
	var nome = nome;
	var cargo = cargo;
	var telefone = telefone;
	var email = email;
	var faturamento = faturamento;
	var banco = banco;
	var agencia = agencia;
	var contacorrente = contacorrente;
	var prazo = prazo;
	var endereco = endereco;
	var user = user
	this._conection.query('update clientespj set empresa="'+empresa+'", fantasia="'+fantasia+'", cnpj="'+cnpj+'", estadual="'+estadual+'", municipal="'+municipal+'", nome="'+nome+'",cargo="'+cargo+'", telefone="'+telefone+'", email="'+email+'", faturamento="'+faturamento+'", banco="'+banco+'", agencia="'+agencia+'", corrente="'+contacorrente+'", prazo="'+prazo+'", endereco="'+endereco+'" where idclientespj="'+idcliente+'"', function(error, result){
		
		res.redirect("./clientes?perfil="+perfil);

	});

}

modeladmin.prototype.deletepj = function(idcliente, user,perfil, req, res){
	
	var idcliente = idcliente;
	var user = user

	this._conection.query('delete from clientespj where idclientespj="'+idcliente+'"', function(error, result){
		
		res.redirect("./clientes?perfil="+perfil);

	});
	
}

modeladmin.prototype.clientes = function(callback){
	
	this._conection.query('select *,  DATE_FORMAT(nascimento ,"%d/%m/%Y") as datanasci  from clientes', callback);
}

modeladmin.prototype.clientespj = function(callback){
	
	this._conection.query('select * from clientespj', callback);
}
/*
modeladmin.prototype.buscarusuario = function(id, callback){
	
	this._conection.query('select * from usuarios where id_usuario = ' + id.id, callback);
}

modeladmin.prototype.buscarusuarioporid = function(id, callback){

	this._conection.query('select * from usuarios where id_usuario = ' + id, callback);
}

*/
module.exports = function(){
	return modeladmin;
}