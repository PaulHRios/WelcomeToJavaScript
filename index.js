console.log("\n**************Variables**************\n");
var num1;
num1 = 4;
var num2 = 7;
console.log("Numero1: " + num1 + " Numero 2: " + num2);

console.log("\n***************Cadenas***************\n");
var frase1;
var frase2;
var frase3;
frase1 = "Ejemplo de frase";;
frase2 = 'Ejemplo comillas simples';
frase3 = `Ejemplo comillas ${num2} invertidas`;
console.log(frase1 + "\n" + frase2 + "\n" + frase3);

console.log("\n***************Cadenas***************\n");
console.log(num1 > 7);
console.log(num1 < 7);

console.log("\n***************AND***************\n");
console.log(true && false);

console.log("\n***************OR***************\n");
console.log(true || false);

console.log("\n***************ARREGLOS***************\n");
let listadenumeros = [2, 3, 7, 9, 4, 56];
console.log(listadenumeros);
listadenumeros.push(33);
console.log(listadenumeros);

let listadepalabras = ['HOLA', 'MUNDO', 'COMO ESTAN']
console.log(listadepalabras);
console.log(listadepalabras[2]);
console.log(listadepalabras.length);

console.log("\n***************OBJETOS***************\n");

let explorer = {
    nombre: "Nombre de explorador",
    email: "email@mail.com",
    numReg: 12345,
    mision: "FrontEnd",
    proyecto: ["Abogabot", "Taqueria", "Pasteleria", "Vacunacion"],
    proper: {
        Funcion: "Ninguna",
        Calificacion: "N/A"
    }
}
console.log(explorer);
console.log(explorer.email);
console.log(explorer.proper);