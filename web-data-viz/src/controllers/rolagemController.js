var rolagemModel = require("../models/rolagemModel");

function verPersonagem(req, res) {
  var idUsuario = req.params.idUsuario;

  rolagemModel.verPersonagem(idUsuario).then((resultado) => {
    res.status(200).json(resultado);
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os personagens: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function adicionarGrupo(req, res) {
  var idUsuario = req.body.idUsuario;

    rolagemModel.adicionarGrupo(idUsuario).then(function(resposta){
        res.status(200).send("Personagem criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function alterarGrupo(req, res){
  var idUsuario = req.body.idUsuario;
  var idPersonagem = req.body.idPersonagem;
  var nomePersonagem = req.body.nome

  rolagemModel.alterarGrupo(idUsuario, idPersonagem, nomePersonagem).then(function(resposta){
      res.status(200).send("Nome do personagem alterado com sucesso");
  }).catch(function(erro){
    res.status(500).json(erro.sqlMessage);
  })
}

function excluirPersonagem(req, res){
  var idUsuario = req.params.idUsuario;
  var idPersonagem = req.params.idPersonagem;

  rolagemModel.excluirPersonagem(idUsuario, idPersonagem).then(function(resposta){
      res.status(200).send("Personagem excluido com sucesso!");
  }).catch(function(erro){
      res.status(500).json(erro.sqlMessage);
  })
}

function inserirResultado(req, res){
  var idUsuario = req.body.idUsuario;
  var resultadoNatural = req.body.resultadoNatural;
  var resultadoFinal = req.body.resultadoFinal;
  var tipoDado = req.body.tipoDado;

  rolagemModel.inserirResultado(idUsuario, resultadoNatural, resultadoFinal, tipoDado).then(function(resposta){
      res.status(200).send("Resultados inseridos com sucesso!");
  }).catch(function(erro){
      res.status(500).json(erro.sqlMessage);
  })
}

function verRolagemPersonagem(req, res){
  var idPersonagem = req.params.idPersonagem;

  rolagemModel.verRolagemPersonagem(idPersonagem).then(function(resposta){
    res.status(200).json(resposta);
  }).catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
  });
}

function verRolagem(req, res){
  var idPersonagem = req.params.idPersonagem;
  var idRolagem = req.params.idRolagem;

  rolagemModel.verRolagem(idPersonagem, idRolagem).then(function(resposta){
    res.status(200).json(resposta);
  }).catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
  });
}

function excluirRolagemPersonagem(req, res){
  var idPersonagem = req.params.idPersonagem;
  var idRolagem = req.params.idRolagem;

  rolagemModel.excluirRolagemPersonagem(idPersonagem, idRolagem).then(function(resposta){
      res.status(200).send("Personagem excluido com sucesso!");
  }).catch(function(erro){
      res.status(500).json(erro.sqlMessage);
  })
}

function excluirRolagem(req, res){
  var idRolagem = req.params.idRolagem;

  rolagemModel.excluirRolagem(idRolagem).then(function(resposta){
      res.status(200).send("Personagem excluido com sucesso!");
  }).catch(function(erro){
      res.status(500).json(erro.sqlMessage);
  })
}

function excluirPersonagemRolagem(req, res){
  var idPersonagem = req.params.idPersonagem;

  rolagemModel.excluirPersonagemRolagem(idPersonagem).then(function(resposta){
      res.status(200).send("Personagem excluido com sucesso!");
  }).catch(function(erro){
      res.status(500).json(erro.sqlMessage);
  })
}

function excluirRolagemDefinida(req, res){
  var idPersonagem = req.params.idPersonagem;

  rolagemModel.excluirRolagemDefinida(idPersonagem).then(function(resposta){
      res.status(200).send("Personagem excluido com sucesso!");
  }).catch(function(erro){
      res.status(500).json(erro.sqlMessage);
  })
}

function criarRolagemDefinida(req, res){
  var idPersonagem = req.body.idPersonagem;
  var nome = req.body.nome;
  var tipoRolagem = req.body.tipoRolagem;

  rolagemModel.criarRolagemDefinida(idPersonagem, nome, tipoRolagem).then(function(resposta){
      res.status(200).json({
        idRolagemCriada: resposta.insertId
      });
      console.log(resposta.insertId)
  }).catch(function(erro){
      res.status(500).json(erro.sqlMessage);
  })
}

function criarAtaque(req, res){
  var idRolagem = req.body.idRolagem;
  var qtdAtaque = req.body.qtdAtaque;
  var tipoDadoAtaque = req.body.tipoDadoAtaque;
  var bonusAtaque = req.body.bonusAtaque;
  var qtdDano = req.body.qtdDano;
  var tipoDadoDano = req.body.tipoDadoDano;
  var bonusDano = req.body.bonusDano;
  var qtdCritico = req.body.qtdCritico;
  var tipoDadoCritico = req.body.tipoDadoCritico;
  var bonusCritico = req.body.bonusCritico;

  rolagemModel.criarAtaque(idRolagem, qtdAtaque, tipoDadoAtaque, bonusAtaque, qtdDano, tipoDadoDano, bonusDano, qtdCritico, tipoDadoCritico, bonusCritico).then(function(resposta){
      res.status(200).send("Ataque criado com sucesso!");
  }).catch(function(erro){
      res.status(500).json(erro.sqlMessage);
  })
}

function criarMagia(req, res){
  var idRolagem = req.body.idRolagem;
  var qtdDano = req.body.qtdDano;
  var tipoDadoDano = req.body.tipoDadoDano;
  var bonusDano = req.body.bonusDano;
  var qtdNiveis = req.body.qtdNiveis;
  var tipoDadoNiveis = req.body.tipoDadoNiveis;
  var bonusNiveis = req.body.bonusNiveis;

  rolagemModel.criarMagia(idRolagem, qtdDano, tipoDadoDano, bonusDano, qtdNiveis, tipoDadoNiveis, bonusNiveis).then(function(resposta){
      res.status(200).send("Magia criado com sucesso!");
  }).catch(function(erro){
      res.status(500).json(erro.sqlMessage);
  })
}

function criarHabilidade(req, res){
  var idRolagem = req.body.idRolagem;
  var qtdDano = req.body.qtdDano;
  var tipoDadoDano = req.body.tipoDadoDano;
  var bonusDano = req.body.bonusDano;

  rolagemModel.criarHabilidade(idRolagem, qtdDano, tipoDadoDano, bonusDano).then(function(resposta){
      res.status(200).send("Habilidade criado com sucesso!");
  }).catch(function(erro){
      res.status(500).json(erro.sqlMessage);
  })
}


module.exports = {
  verPersonagem,
  adicionarGrupo,
  alterarGrupo,
  excluirPersonagem,
  inserirResultado,
  verRolagemPersonagem,
  verRolagem,
  excluirRolagemPersonagem,
  excluirRolagem,
  excluirPersonagemRolagem,
  excluirRolagemDefinida,
  criarRolagemDefinida,
  criarAtaque,
  criarMagia,
  criarHabilidade
}