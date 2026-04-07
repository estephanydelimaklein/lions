const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('nota 1: ', (nota1) => {
    rl.question('nota 2: ', (nota2) => {
        let totalNota1 = +nota1;
        let totalNota2 = +nota2; 

        let media = (totalNota1 + totalNota2)/2

        if (media >= 7) {
            console.log("aprovado");
        } else if ( media >= 5){
            console.log("recuperaçao");
        } else {
            console.log("reprovado");
        }


        rl.close();
    });
});