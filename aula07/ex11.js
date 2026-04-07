const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('idade: ', (i) => {
    rl.question('é estudante (s/n): ', (estudante) => {
        let idade = +i;
        let ingresso = 0;
      

        if (estudante === 's' || idade < 12){
            ingresso = 10;
        } else {
            ingresso = 20;
        }
        

        console.log("valor final", ingresso);

        rl.close()
    });
});   
