const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('valor da compra: ', (compra) => {
    rl.question('tem cupom: ', (cupom) => {
        let total = +compra;

        if (total =>100 ) {
            console.log( total *0.9);
        } 

        if (cupom === "s" ) {
            total = total -5;
        }
        console.log("valor final")

        rl.close()
    });
});