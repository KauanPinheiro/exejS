

function calcular(){

    let nome = window.prompt(`Qual o nome do aluno?`);

    let n1 = parseInt(window.prompt(`Qual foi a primeira nota de ${nome}`));

    let n2 = parseInt(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}`));

    let res = ( n1 + n2 ) / 2 ;

    document.getElementById("resp").innerHTML = `Calculando a média final de ${nome}`;
    
    document.getElementById("linha1").innerHTML = `As notas obtidas foram ${n1} e ${n2}`;

    document.getElementById("linha2").innerHTML = `A média final será ${res}`;


    if(res > 6){    
        document.getElementById("linha3").innerHTML = ` A mensagem que temos é: Meus parabéns !`;
    }else{
        document.getElementById("linha3").innerHTML = ` A mensagem que temos é: Estude um pouco mais`
    }
};