const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('quantidade de quilometros: ', (quantidade) => {
    rl.question('é corrida noturna (s/n): ', (corrida) => {
        let valor = +quantidade;

        let total = 0;

        if (corrida === "s") {
            total = valor * 5;
        } else {
            total = valor * 4;
        }
        console.log("valor final", total);

        rl.close()
    });
});

