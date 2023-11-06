function btn(){

    let n1 = parseInt(window.prompt(`Dígite o primeiro número`));

    let n2 = parseInt(window.prompt(`Dígite o segundo número`));

    let soma = (n1+n2);

    document.getElementById("res").innerHTML = `A soma de ${n1} e ${n2} é ${soma} !`;
}