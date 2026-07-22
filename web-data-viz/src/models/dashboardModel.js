var database = require("../database/config");

function quantidadeRolagemTotal(idUsuario) {

    var instrucaoSql = `select count(*) as qtdRolagem from resultados where fk_usuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quantidadeCriticos(idUsuario) {

    var instrucaoSql = `select count(*) as qtdCriticos from resultados where fk_usuario = ${idUsuario} and tipoDado = 'd20' and resultadoDado = 20;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quantidadeErrosCriticos(idUsuario) {

    var instrucaoSql = `select count(*) as qtdErrosCriticos from resultados where fk_usuario = ${idUsuario} and tipoDado = 'd20' and resultadoDado = 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dadoMaisUsado(idUsuario) {

    var instrucaoSql = `select tipoDado, count(*) as quantidade from resultados where fk_usuario = ${idUsuario} group by tipoDado;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ultimosResultados(idUsuario) {

    var instrucaoSql = `select resultadoFinal, dtRolagem from resultados where fk_usuario = ${idUsuario} and tipoDado = 'd20' and tipoRolagem in ('Vantagem', 'Desvantagem') order by dtRolagem desc limit 5;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    quantidadeRolagemTotal,
    quantidadeCriticos,
    quantidadeErrosCriticos,
    dadoMaisUsado,
    ultimosResultados
}
