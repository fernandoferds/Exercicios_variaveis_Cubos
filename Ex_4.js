let saldo = 100;
let taxaDeJurosMes = 0.01;
let periodoEmMeses = 10;
let contador = 0;
let totalGanho = 0;
let totalDoMes = 0;

while(contador < periodoEmMeses){
    saldo = saldo + (saldo * taxaDeJurosMes);
    console.log(`Saldo no mes ${contador+1} = ${saldo}`);
    contador = contador + 1;
}

