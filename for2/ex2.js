const rl = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("digite n: ", (n) => {
    n = (n);

    for(let i = 1; i <= n; i++) {
        console.log(1);
    }
        rl.close();
});  