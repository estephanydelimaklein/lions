const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('valor da conta: ', (conta) => {
    rl.question('quantidade de pessoas: ', (pessoas) => {
        let valor = +conta;
        let qtd = + pessoas;
        let pagopp = valor / qtd;

        console.log("pago por pessoas: ", pagopp);

        if (valor > 200) {
            console.log("conta alta")
        }


        rl.close()
    });
});
