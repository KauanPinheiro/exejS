function btn() {

    let n1 = window.prompt(`Digíte o primeiro número`);

    let n2 = window.prompt(`Digíte o segundo número`);

    if (n1 > n2) {

        document.getElementById("res").innerHTML = `Analisando os valores ${n1} e ${n2}, o maior valor é ${n1}`;

    } else {

        document.getElementById("res").innerHTML = `Analisando os valores ${n1} e ${n2}, o maior valor é ${n2}`;

    };

};
