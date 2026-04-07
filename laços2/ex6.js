const rl = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("digite n: ", (n) => {
    n = (n);
    let i = 1;
    let soma = 0;

    while(i <= n) {
        if(i % 2 === 0){
            soma += i;
        }
        i++;
    }
    console.log("soma dos pares:", soma)
        rl.close();
});  