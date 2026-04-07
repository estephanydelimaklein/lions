const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('valor da conta: ', (conta) => {
    rl.question('pagou em dia (s/n): ', (pagou) => {
        let valor = +conta;

        if (pagou >= "s") {
            valor = valor*0.9;
        }

        if (conta <= 10) {
            valor = 10;
        }

        console.log("valor final", valor);

        rl.close()
    });
});     