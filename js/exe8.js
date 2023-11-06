function btn(){

    let n = window.prompt(`Digite um número:`);

    document.getElementById("res1").innerHTML = `O número a ser analisados é ${n}`;

    document.getElementById("res2").innerHTML = `O valor absoluto é ${Math.abs(n)}`;
    
    document.getElementById("res3").innerHTML = `A parte interia é ${Math.trunc(n)}`;
    
    document.getElementById("res4").innerHTML = `O valor inteiro mais proximo é ${Math.round(n)}`;
    
    document.getElementById("res5").innerHTML = `A sua raiz quadrada é ${Math.sqrt(n)}`;
    
    document.getElementById("res6").innerHTML = `A sua raiz cúbica é ${Math.cbrt(n)}`;
    
    document.getElementById("res7").innerHTML = `O valor de ${Math.pow(n,2)}`;
    
    document.getElementById("res8").innerHTML = `O valor de ${Math.pow(n,3)}`;
    



}