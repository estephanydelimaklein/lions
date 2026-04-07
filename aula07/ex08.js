const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('quantidade de camisetas: ', (camisetas) => {
        let quantidade = +camisetas ;

        let total = (quantidade *30 )

        if (quantidade >= 5 ) {
            console.log( total *0.8);
        } else if (quantidade >= 3 ) {
            console.log( total *0.9);
        } else {
            console.log("valor final", total );
        }

        rl.close()
    });