let resultados = [];

function pegarValoresInput(){
    quantidade = Number(qtd_dados.value);
    console.log(quantidade)
    tipoDado = tipo_dado.value;
    console.log(tipoDado)
    tipoRolagem = tipo_rolagem.value;
    console.log(tipoRolagem)
    bonus = Number(ipt_bonus.value)
    console.log(bonus)
    rolarDados(quantidade, tipoDado, tipoRolagem, bonus);
}

function rolarDados(quantidade, tipoDado, tipoRolagem, bonus){
    let dado = 0;
    let numDado = 0;
    resultados = [];

    sessionStorage.QUANTIDADE = quantidade;
    sessionStorage.TIPODADO = tipoDado;
    sessionStorage.TIPOROLAGEM = tipoRolagem;
    sessionStorage.BONUS = bonus;

    console.log(tipoDado)
    if(tipoDado == "d20" ){
            numDado = 20;
        } else if(tipoDado == "d12" ){
            numDado = 12;
        } else if(tipoDado == "d10" ){
            numDado = 10;
        } else if(tipoDado == "d8" ){
            numDado = 8;
        } else if(tipoDado == "d6" ){
            numDado = 6;
        } else if(tipoDado == "d4" ){
            numDado = 4;
        }
    
    
    if(tipoRolagem == 'Vantagem'){
        let maiorDado = 0;
        for(let i=0; i < quantidade; i++){
            console.log(numDado);
            dado = Math.round(Math.random() * (numDado - 1) + 1);
            resultados.push(dado);
            if(dado > resultados[maiorDado]){
                maiorDado = i;
            } 
            sessionStorage.ULTIMA_ROLAGEM = resultados[maiorDado] + bonus;
        }
        exibirResultado(maiorDado, bonus)
    } else if(tipoRolagem == 'Desvantagem'){
        let menorDado = 0;
        for(let i=0; i < quantidade; i++){
            dado = Math.round(Math.random() * (numDado - 1) + 1);
            resultados.push(dado);
            if(dado < resultados[menorDado]){
                menorDado = i;
            } 
            sessionStorage.ULTIMA_ROLAGEM = resultados[menorDado] + bonus;
        }
        exibirResultado(menorDado, bonus)
    } else if(tipoRolagem == 'Soma'){
        let soma = 0;
        for(let i=0; i < quantidade; i++){
            dado = Math.round(Math.random() * (numDado - 1) + 1);
            resultados.push(dado);
            soma += dado;
        }
        sessionStorage.ULTIMA_ROLAGEM = soma + bonus;
        exibirResultado(-1)
    }
    exibirUltimoResultado();

    if(tipoRolagem != 'Soma'){
        inserirResultado();
    } else {
        inserirResultadoSoma();
}

function exibirResultado(index){
    p_dados.innerHTML = ``;
    resultado_rolagem.style.display = 'flex';
    span_resultado.innerHTML = `${sessionStorage.ULTIMA_ROLAGEM}`;
    span_rolagem.innerHTML = `${sessionStorage.QUANTIDADE}${sessionStorage.TIPODADO} + ${sessionStorage.BONUS} <i>(${sessionStorage.TIPOROLAGEM})</i>`;
    for(let i =0; i < resultados.length; i++){
        if(i == index){
            p_dados.innerHTML += `<span>${resultados[i]}</span>`
        } else{
            p_dados.innerHTML += `${resultados[i]}`
        }
        if(i != resultados.length -1){
            p_dados.innerHTML += ', '
        }
    }
    p_bonus.innerHTML = `${sessionStorage.BONUS}`;
}

function exibirUltimoResultado(){
    ultimo_resultado.innerHTML = `${sessionStorage.ULTIMA_ROLAGEM}`;
    ultima_rolagem.innerHTML = `Rolagem: ${sessionStorage.QUANTIDADE}${sessionStorage.TIPODADO} + ${sessionStorage.BONUS} <br><center><i>(${sessionStorage.TIPOROLAGEM})</i></center>`;
}

function inserirResultado(){
    fetch(`/rolagens/inserirResultado`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuario: sessionStorage.ID_USUARIO,
            resultadoNatural: (sessionStorage.ULTIMA_ROLAGEM - sessionStorage.BONUS),
            resultadoFinal: sessionStorage.ULTIMA_ROLAGEM,
            tipoDado: sessionStorage.TIPODADO
        })
        }).then(resposta => {
            if(resposta.ok){
                console.log("Resultado inserido com sucesso");
            }
        }).catch(erro => {
            console.log(erro);
        });
}

function inserirResultadoSoma(){
    for(let i = 0; i< resultados.length; i++){
        fetch(`/rolagens/inserirResultado`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuario: sessionStorage.ID_USUARIO,
            resultadoNatural: resultados[i],
            resultadoFinal: sessionStorage.ULTIMA_ROLAGEM,
            tipoDado: sessionStorage.TIPODADO
        })
        }).then(resposta => {
            if(resposta.ok){
                console.log("Resultado inserido com sucesso");
            }
        }).catch(erro => {
            console.log(erro);
        });
        }
    }
}