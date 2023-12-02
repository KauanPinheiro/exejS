
function btn(){

    let num = window.prompt(`Digíte um número:`);

    let tipo 

    if(num % 2 == 0 ){

        tipo = 'PAR'
                
        }else{
            
        tipo = 'IMPAR'

        };

        document.getElementById("result").innerHTML = `O número ${num} que foi digitado é ${tipo} `;

        
};