let contador = 0;



function btn1() {

    contador++;
    document.getElementById("res").innerHTML = `O contador está com ${contador} cliques`;
};

function btn2(){

    contador = 0;
    document.getElementById("res").innerHTML = null;
};