const rl = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("digite n: ", (n) => {
    n = (n);
    let i = 1;

    while(i <= n) {
        console.log(i);
        i++;
    }
        rl.close();
});  