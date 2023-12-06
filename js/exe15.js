function analise(){

    let time = new Date;
    

    document.getElementById("res1").innerHTML = `Dia: ${time.getDate()}`;
    document.getElementById("res2").innerHTML = `Mês: ${time.getMonth()}`;
    document.getElementById("res3").innerHTML =`Ano: ${time.getFullYear()}`;
    document.getElementById("res5").innerHTML =`Hora: ${time.getHours()}`;
    document.getElementById("res6").innerHTML =`Minutos: ${time.getMinutes()}`;
    document.getElementById("res7").innerHTML =`Segundos: ${time.getSeconds()}`;
};