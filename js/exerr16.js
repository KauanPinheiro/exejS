
function btn(){
//Pegando valor digitado pelo usuario
    let Idade = window.prompt("Em que ano você nasceu?")

//Criando uma variável para manipular a data 
    let anoSistema = new Date

//Criando uma variável para receber o ano atual do sistema 
    let ano = anoSistema.getFullYear()

//Criando uma variável para receber a conta do ano atual e o valor digitado pelo o usuario
    let calcularIdade = ano - Idade
    
//Exibindo o valor da idade para o usuario
    document.getElementById("resultado").innerHTML = `Quem nasceu em ${Idade} vai completar ${calcularIdade} em ${ano}`

//Testando os campos
    console.log(Idade)
    console.log(ano)
    console.log(calcularIdade)
}