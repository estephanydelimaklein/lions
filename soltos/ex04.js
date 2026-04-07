const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('quantidade de salgados: ', (quantidade) => {
    rl.question('vai querer refri: ', (refrigerante) => {
        let quantidadeSalgado = +quantidade;
        let valor = quantidadeSalgado * 7; 

        if (refrigerante === "s") {
            valor = valor + 5;
        }

        console.log('valor total: ', valor);

        rl.close()
    });
});