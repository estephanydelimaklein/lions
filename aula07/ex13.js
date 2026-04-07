const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('quantidade de horas: ', (horas) => {
        let quantidade = +horas ;

        if (quantidade <= 2 ) {
            console.log( 10);
        } else {
            let hora = quantidade - 2

            console.log("valor final", (hora*3)+10 );
        }

        rl.close()
    });
    

