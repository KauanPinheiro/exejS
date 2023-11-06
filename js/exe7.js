
function btn(){
    let nome = window.prompt(`Qual é o nome do aluno?`);

    let nota1 = parseInt(window.prompt(`Qual foi a primeira nota de ${nome}`));

    let nota2 = parseInt(window.prompt(`Além de ${nota1} qual foi a outra nota de ${nome}`));

    let somaMedia = (nota1 + nota2)/2 ;

    document.getElementById("texto1").innerHTML = `Calculando a média final de ${nome}`;
    document.getElementById("texto2").innerHTML = `As notas obtidas foram ${nota1} e ${nota2}`;
    document.getElementById("texto3").innerHTML = `A média final será ${somaMedia}`;
    


};