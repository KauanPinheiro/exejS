

function btn1(){

    let n = window.prompt(`Qual é o seu palpite?`)
    
    let numeroGerado = parseInt(Math.random() * 10)


    if(numeroGerado < n ){
        console.log(`Você falou ${n}. Meu número é Maior!`)
    }else if(numeroGerado > n){
        console.log(`Você falou ${n}. Meu número é Menor!`)
    }else if( numeroGerado == n){
        console.log(`Parabéns você acertou o número que pensei ;)`)
    }
}

