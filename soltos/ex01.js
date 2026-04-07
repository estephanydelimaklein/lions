const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('valor total: ', (valor) => {
    rl.question('pessoas para o racha: ', (pessoas) => {
        let total = +valor;
        let quantidade = +pessoas; 

        let racha = total / quantidade;

        console.log('total por pessoa: ', racha);

        rl.close();
    });
});