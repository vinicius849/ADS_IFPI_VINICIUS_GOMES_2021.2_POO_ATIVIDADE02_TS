// Não é comum usarmos os objetos Number, String ou Inteiro;
// É feito um auto-boxing ou índice caso necessário;

let cidade: string = "Corrente";
console.log(typeof(cidade)); // string

let qts_anos: int = 262; 
console.log(typeof(qts_anos)); // inteiro

let habitantes: number = 26771;
console.log(typeof(habitantes)); // number -> float ou int

console.log(cidade,concat(" - PI")); // Corrente, do Piauí
console.log(qts_anos.toFixed(4)); // Resultado da impressão
console.log(habitantes.floor); // Número de habitantes

