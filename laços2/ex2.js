const rl = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("digite n: ", (n) => {
    n = (n);
    let i = 1;
    let soma = 0;

    while(i <= n) {
        soma = 0;
        i++;
    }
    console.log("soma: ", soma)
        rl.close();
});  