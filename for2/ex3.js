const rl = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("digite um numero: ", (x) => {
    x = (x);

    for(let i = 1; i <= 10; i++) {
        console.log(x * i);
    }
        rl.close();
});  