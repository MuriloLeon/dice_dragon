var express = require("express");
var router = express.Router();

var rolagemController = require("../controllers/rolagemController");

router.get("/verPersonagem/:idUsuario", function (req, res) {
    rolagemController.verPersonagem(req, res);
})

router.post("/adicionarGrupo", function (req, res) {
    rolagemController.adicionarGrupo(req, res);
})

router.put("/alterarGrupo", function (req, res) {
    rolagemController.alterarGrupo(req, res);
})

router.delete("/excluirPersonagem/:idUsuario/:idPersonagem", function (req, res){
    rolagemController.excluirPersonagem(req, res);
})

router.post("/inserirResultado", function (req, res) {
    rolagemController.inserirResultado(req, res);
})

router.get("/verRolagemPersonagem/:idPersonagem", function (req, res) {
    rolagemController.verRolagemPersonagem(req, res);
})

router.get("/verRolagem/:idPersonagem/:idRolagem", function (req, res) {
    rolagemController.verRolagem(req, res);
})

router.delete("/excluirRolagemPersonagem/:idPersonagem/:idRolagem", function (req, res){
    rolagemController.excluirRolagemPersonagem(req, res);
})

router.delete("/excluirRolagem/:idRolagem", function (req, res){
    rolagemController.excluirRolagem(req, res);
})

router.delete("/excluirPersonagemRolagem/:idPersonagem", function (req, res){
    rolagemController.excluirPersonagemRolagem(req, res);
})

router.delete("/excluirRolagemDefinida/:idPersonagem", function (req, res){
    rolagemController.excluirRolagemDefinida(req, res);
})

router.post("/criarRolagemDefinida", function (req, res) {
    rolagemController.criarRolagemDefinida(req, res);
})

router.post("/criarAtaque", function (req, res) {
    rolagemController.criarAtaque(req, res);
})

router.post("/criarMagia", function (req, res) {
    rolagemController.criarMagia(req, res);
})

router.post("/criarHabilidade", function (req, res) {
    rolagemController.criarHabilidade(req, res);
})

module.exports = router;