let n = 20;
let pares = 0;

for (let i = 1; i <= n; i++) {
    if(i % 2 === 0) {
        pares++;
    }
}
console.log(pares);