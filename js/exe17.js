
function btn1(){

/*Criando uma variavel para receber o valor do número gerado
    usandando a função math.random() para gerar os números aleátorios
        e usando a função parseInt() para transformar os números decimais em inteiro ultilizando os númeors antes da virgula 
*/
    let numeroGerado = parseInt(Math.random() * 100)
    
//Exibindo o resultado para o usuario
    document.getElementById("resultado").innerHTML = `Acabei de pensar no número ${numeroGerado}!`

//Testando a variavel 
    console.log(numeroGerado)
}

//Criando a função de limpar o resultado 
function btn2(){
        document.getElementById("resultado").innerHTML = ""
}