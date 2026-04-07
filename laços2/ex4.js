const rl = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("digite n: ", (n) => {
    n = (n);
    let i = 1;
    let contador = 0;

    while(i <= n) {
        if (i % 2 === 0){
        contador++;
        }
        i++;
    }
    console.log("quantidade de pares:", contador);
        rl.close();
});  