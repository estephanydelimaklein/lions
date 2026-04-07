const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('tipo do plano: ', (plano) => {
        let mensal = +plano;
        let anual = valor;
        let valor = plano;

        if (mensal * 80 ) {
            plano = valor;
        } 
        if (anual * 800) {
                console.log("plano com desconto");
            }

            console.log("valor do plano", valor);

        rl.close()
});
