const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('idade: ', (anos) => {
    rl.question('tem convite:(s/n) ', (convite) => {
        let idade = +anos;

        if (idade >= 18) {
            if (convite === "s") {
                console.log("entrada permitida");
            } else {
                console.log("sem convite")
            }
        } else {
            
            console.log("menor de idade")}

    rl.close()
});
});