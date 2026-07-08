var dashboardModel = require("../models/dashboardModel");

function quantidadeRolagemTotal(req, res){
  var idUsuario = req.params.idUsuario;

  dashboardModel.quantidadeRolagemTotal(idUsuario).then(function(resposta){
    res.status(200).json(resposta);
  }).catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
  });
}

function quantidadeCriticos(req, res){
  var idUsuario = req.params.idUsuario;

  dashboardModel.quantidadeCriticos(idUsuario).then(function(resposta){
    res.status(200).json(resposta);
  }).catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
  });
}

function quantidadeErrosCriticos(req, res){
  var idUsuario = req.params.idUsuario;

  dashboardModel.quantidadeErrosCriticos(idUsuario).then(function(resposta){
    res.status(200).json(resposta);
  }).catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
  });
}

function dadoMaisUsado(req, res){
  var idUsuario = req.params.idUsuario;

  dashboardModel.dadoMaisUsado(idUsuario).then(function(resposta){
    res.status(200).json(resposta);
  }).catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
  });
}

function ultimosResultados(req, res){
  var idUsuario = req.params.idUsuario;

  dashboardModel.ultimosResultados(idUsuario).then(function(resposta){
    res.status(200).json(resposta);
  }).catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
    quantidadeRolagemTotal,
    quantidadeCriticos,
    quantidadeErrosCriticos,
    dadoMaisUsado,
    ultimosResultados
};
