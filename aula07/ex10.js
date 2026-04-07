const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('kg de maçã: ', (maçã) => {
    rl.question('kg de banana: ', (banana) => {
        let valor = +maçã *6;
        let valorbanana = +banana *4;
        let total = valor +valorbanana; 

        if (total >= 20 ) {
            total = total -3;
        }

        console.log("valor final", total);

        rl.close()
    });
});   
