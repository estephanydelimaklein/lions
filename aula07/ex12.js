const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('salário atual: ', (salario1) => {
        let salario = +salario1;
      

        if (salario < 2000){
            salario = salario *0.9;
        } else {
            salario = salario *0.95;
        }
        

        console.log("valor final", salario);

        rl.close()
    });
