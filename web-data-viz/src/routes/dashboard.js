var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/quantidadeRolagemTotal/:idUsuario", function (req, res) {
    dashboardController.quantidadeRolagemTotal(req, res);
})

router.get("/quantidadeCriticos/:idUsuario", function (req, res) {
    dashboardController.quantidadeCriticos(req, res);
})

router.get("/quantidadeErrosCriticos/:idUsuario", function (req, res) {
    dashboardController.quantidadeErrosCriticos(req, res);
})

router.get("/dadoMaisUsado/:idUsuario", function (req, res) {
    dashboardController.dadoMaisUsado(req, res);
})

router.get("/ultimosResultados/:idUsuario", function (req, res) {
    dashboardController.ultimosResultados(req, res);
})

module.exports = router;