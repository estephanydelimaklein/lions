const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('valor da compra: ', (valor) => {
    rl.question('valor pago: ', (pago) => {
        let total = +valor;
        let valorPago = +pago; 

        if (valorPago >= total) {
            let troco = valorPago - total;
            console.log("troco: ", troco)
        } else {
            console.log("valor insufisiente")
        }

        rl.close()
    });
});