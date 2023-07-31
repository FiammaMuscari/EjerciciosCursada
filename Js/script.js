// *Javascript inicial* conociendo la consola
// primero instala Node https://nodejs.org/es v.18
// ahora ingresa a la carpeta utilizando > cd "nombre de la carpeta">
// escribe 'node script.js' que es el nombre del archivo
// perfecto, ejecutaste por primera vez javascript

//ejercicio 1
// console.log("Hola, Mundo!");

// //ejercicio 2
// let nombre = "Juan";
// let apellido = "Pérez";
// console.log("Hola " + nombre + " " + apellido);

// //ejercicio 3
// let numero = parseInt(prompt("Ingresa un número:"));

// if (numero % 2 === 0) {
//   console.log(numero + " es un número par.");
// } else {
//   console.log(numero + " es un número impar.");
// }

// //ejercicio 4
// function factorial(numero) {
//   if (numero === 0 || numero === 1) {
//     return 1;
//   } else {
//     return numero * factorial(numero - 1);
//   }
// }

// let num = parseInt(prompt("Ingresa un número para calcular su factorial:"));
// let resultadoFactorial = factorial(num);
// console.log("El factorial de", num, "es:", resultadoFactorial);

// //ejercicio 5
// function esPalindromo(palabra) {
//   palabra = palabra.toLowerCase().replace(/[^a-z]/g, ""); // Convertimos a minúsculas y eliminamos caracteres no alfabéticos.
//   const reversa = palabra.split("").reverse().join("");
//   return palabra === reversa;
// }

// let palabraIngresada = prompt(
//   "Ingresa una palabra para verificar si es un palíndromo:"
// );
// let resultado = esPalindromo(palabraIngresada);

// if (resultado) {
//   console.log(palabraIngresada + " es un palíndromo.");
// } else {
//   console.log(palabraIngresada + " no es un palíndromo.");
// }

// //ejercicio 6
// function encontrarNumeroMasGrande(arreglo) {
//   let maximo = arreglo[0];
//   for (let i = 1; i < arreglo.length; i++) {
//     if (arreglo[i] > maximo) {
//       maximo = arreglo[i];
//     }
//   }
//   return maximo;
// }
// let numeros = [5, 12, 27, 8, 3, 10];
// let numeroMasGrande = encontrarNumeroMasGrande(numeros);
// console.log("El número más grande del arreglo es:", numeroMasGrande);

// //ejercicio 7
// function contarVocales(palabra) {
//   const vocales = palabra.match(/[aeiouáéíóú]/gi);
//   return vocales ? vocales.length : 0;
// }

// let palabraVocales = prompt("Ingresa una palabra para contar sus vocales:");
// let cantidadVocales = contarVocales(palabraVocales);
// console.log(
//   "La cantidad de vocales en",
//   palabraVocales,
//   "es:",
//   cantidadVocales
// );

// //ejercicio 8
// function generarNumeroAleatorio(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let rangoMinimo = parseInt(prompt("Ingresa el valor mínimo del rango:"));
// let rangoMaximo = parseInt(prompt("Ingresa el valor máximo del rango:"));
// let numeroAleatorio = generarNumeroAleatorio(rangoMinimo, rangoMaximo);
// console.log(
//   "El número aleatorio entre",
//   rangoMinimo,
//   "y",
//   rangoMaximo,
//   "es:",
//   numeroAleatorio
// );

// //ejercicio 9
// function calcularAreaTriangulo(a, b, c) {
//   // Calculamos el semiperímetro
//   let s = (a + b + c) / 2;
//   // fórmula de Herón para calcular el área de un triángulo
//   let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   //sqrt es la raíz cuadrada de un número
//   return area;
// }

// let ladoA = parseFloat(prompt("Ingresa el valor del lado A del triángulo:"));
// let ladoB = parseFloat(prompt("Ingresa el valor del lado B del triángulo:"));
// let ladoC = parseFloat(prompt("Ingresa el valor del lado C del triángulo:"));

// let areaTriangulo = calcularAreaTriangulo(ladoA, ladoB, ladoC);
// console.log("El área del triángulo es:", areaTriangulo);

// //ejercicio 10
// function esPrimo(numero) {
//   if (numero <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(numero); i++) {
//     if (numero % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function obtenerPrimosHasta(numero) {
//   let primos = [];
//   for (let i = 2; i <= numero; i++) {
//     if (esPrimo(i)) {
//       primos.push(i);
//     }
//   }
//   return primos;
// }

// let numeroIngresado = parseInt(
//   prompt("Ingresa un número para obtener los números primos hasta ese número:")
// );
// let numerosPrimos = obtenerPrimosHasta(numeroIngresado);
// console.log("Los números primos hasta", numeroIngresado, "son:", numerosPrimos);
