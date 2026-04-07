const rl = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("digite n: ", (n) => {
    n = (n);

let contador = 0;

    for(let i = 1; i <= n; i++) {
        if(i % 2 === 0){
            contador++;
        }
    }
    console.log("quantidade de pares", contador);
        rl.close();
});  
