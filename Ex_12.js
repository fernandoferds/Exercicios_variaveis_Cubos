let montante = 90000;
let capitalInicial = 60000;
let numeroDMeses = 24;
let taxaDejuros = (montante / capitalInicial) ** (1 / numeroDMeses) - 1;

console.log(`taxa de juros = ${taxaDejuros}`);