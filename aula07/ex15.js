const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('valor da compra: ', (neutro) => {
    rl.question('vai pagar no PIX: (s/n)',  (pix) => {
        let vlcompra = neutro;

        if( pix === "s"){
            vlcompra = vlcompra * 0.95;
        }

        if (vlcompra < 10) {
            vlcompra = 10;
        }

        console.log(vlcompra)
        
        rl.close()

    });
});