var database = require("../database/config");

function verPersonagem(idUsuario) {

    var instrucaoSql = `SELECT id, nome FROM personagem WHERE fk_usuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function adicionarGrupo(idUsuario) {
    var instrucaoSql = `INSERT INTO personagem (nome, fk_usuario) values ('Nome', ${idUsuario});`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function alterarGrupo(idUsuario, idPersonagem, nomePersonagem){
    var instrucaoSql = `UPDATE personagem SET nome = "${nomePersonagem}" WHERE fk_usuario = ${idUsuario} and id = ${idPersonagem}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function excluirPersonagem(idUsuario, idPersonagem){
    var instrucaoSql = `DELETE FROM personagem WHERE id = ${idPersonagem} and fk_usuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirResultado(idUsuario, resultadoNatural, resultadoFinal, tipoDado, tipoRolagem){
    var instrucaoSql = `INSERT INTO resultados (resultadoDado, resultadoFinal, tipoDado, tipoRolagem,fk_usuario) values (${resultadoNatural}, ${resultadoFinal}, "${tipoDado}", "${tipoRolagem}",${idUsuario});`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verRolagemPersonagem(idPersonagem){
    var instrucaoSql = `SELECT id, nome, tipo FROM rolagem_definida WHERE fk_personagem = ${idPersonagem};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verRolagem(idPersonagem, idRolagem){
    var instrucaoSql = `SELECT r.categoria, r.quantidade, r.tipoDado, r.bonus, r.tipoRolagem FROM rolagem r
        JOIN rolagem_definida rd ON rd.id = r.fk_rolagem
        WHERE rd.fk_personagem = ${idPersonagem} AND r.fk_rolagem = ${idRolagem};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function excluirRolagemPersonagem(idPersonagem, idRolagem){
    var instrucaoSql = `DELETE FROM rolagem_definida WHERE fk_personagem = ${idPersonagem} AND id = ${idRolagem};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function excluirRolagem(idRolagem){
    var instrucaoSql = `DELETE FROM rolagem WHERE fk_rolagem = ${idRolagem};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function excluirPersonagemRolagem(idPersonagem){
    var instrucaoSql = `DELETE FROM rolagem WHERE fk_rolagem IN (select id from rolagem_definida WHERE fk_personagem = ${idPersonagem});`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function excluirPersonagemRolagem(idPersonagem){
    var instrucaoSql = `DELETE FROM rolagem WHERE fk_rolagem IN (select id from rolagem_definida WHERE fk_personagem = ${idPersonagem});`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function excluirRolagemDefinida(idPersonagem){
    var instrucaoSql = `DELETE FROM rolagem_definida WHERE fk_personagem = ${idPersonagem};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function criarRolagemDefinida(idPersonagem, nome, tipoRolagem){
    var instrucaoSql = `INSERT INTO rolagem_definida (nome, tipo, fk_personagem) VALUE ('${nome}', '${tipoRolagem}', ${idPersonagem});`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function criarAtaque(idRolagem, qtdAtaque, tipoDadoAtaque, bonusAtaque, qtdDano, tipoDadoDano, bonusDano, qtdCritico, tipoDadoCritico, bonusCritico){
    var instrucaoSql = `INSERT INTO rolagem (categoria, quantidade, tipoDado, bonus, tipoRolagem, fk_rolagem) VALUES 
        ('Ataque', ${qtdAtaque}, '${tipoDadoAtaque}', ${bonusAtaque}, 'Vantagem', ${idRolagem}),
        ('Dano', ${qtdDano}, '${tipoDadoDano}', ${bonusDano}, 'Soma', ${idRolagem}),
        ('Critico', ${qtdCritico}, '${tipoDadoCritico}', ${bonusCritico}, 'Soma', ${idRolagem});`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function criarMagia(idRolagem, qtdDano, tipoDadoDano, bonusDano, qtdNiveis, tipoDadoNiveis, bonusNiveis){
    var instrucaoSql = `INSERT INTO rolagem (categoria, quantidade, tipoDado, bonus, tipoRolagem, fk_rolagem) VALUES 
        ('Dano Base', ${qtdDano}, '${tipoDadoDano}', ${bonusDano}, 'Soma', ${idRolagem}),
        ('Niveis Superiores', ${qtdNiveis}, '${tipoDadoNiveis}', ${bonusNiveis}, 'Soma', ${idRolagem});`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function criarHabilidade(idRolagem, qtdDano, tipoDadoDano, bonusDano){
    var instrucaoSql = `INSERT INTO rolagem (categoria, quantidade, tipoDado, bonus, tipoRolagem, fk_rolagem) VALUES 
        ('Dano', ${qtdDano}, '${tipoDadoDano}', ${bonusDano}, 'Soma', ${idRolagem});`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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
