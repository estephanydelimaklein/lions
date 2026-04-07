const rl = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("digite n: ", (n) => {
    n = (n);

let soma = 0;

    for(let i = 1; i <+ n; i++) {
        if(i % 3 === 0){
            soma += i;
        }
    }
    console.log("digite os numeros multiplos");
        rl.close();
});  
