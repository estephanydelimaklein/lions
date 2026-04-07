const rl = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("digite um numero: ", (x) => {
    x = (x);
    let i = 1;

    while(i <= 10) {
        console.log(x + "x" + i + "=" + (x * i));
        i++;
    }
        rl.close();
});  