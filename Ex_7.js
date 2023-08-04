let populacaoInfectada = 1000;
let taxaDeContagio = 4;
let tempoEmDias = 100;
let casosDeCovid = populacaoInfectada * taxaDeContagio ** (tempoEmDias / 7);

console.log(`caso de covid apos ${tempoEmDias} dias = ${casosDeCovid}`);
