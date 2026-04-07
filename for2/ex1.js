const rl = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("digite um numero: ", (n) => {
    n = (n);
    let soma = 0;

    for(let i = 1; i <= n; i++) {
            soma += i;
        i++;
    }
    console.log(soma);
    
        rl.close();
});  