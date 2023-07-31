//Viendo metodos de array y cómo funcionan
//ejecutamos igual que en los pasos anteriores

// // Ejercicio 1
// // Duplicar los elementos de un array usando el método map
// const array1 = [1, 2, 3, 4];
// const arrayDuplicado = array1.map((elemento) => elemento * 2);
// console.log("Array duplicado:", arrayDuplicado);

// // Ejercicio 2: Filtrar números pares
// // Filtrar los números pares de un array usando el método filter
// const array2 = [1, 2, 3, 4, 5, 6];
// const numerosPares = array2.filter((numero) => numero % 2 === 0);
// console.log("Números pares:", numerosPares);

// // Ejercicio 3: Obtener el promedio de un array
// // Calcular el promedio de un array usando el método reduce
// const array3 = [10, 15, 20, 25, 30];
// const promedio =
//   array3.reduce((suma, numero) => suma + numero, 0) / array3.length;
// console.log("Promedio:", promedio);

// // Ejercicio 4: Combinar dos arrays en uno nuevo
// // Combinar dos arrays en uno nuevo usando el método concat
// const array4A = [1, 2, 3];
// const array4B = [4, 5, 6];
// const arrayCombinado = array4A.concat(array4B);
// console.log("Array combinado:", arrayCombinado);

// // Ejercicio 5: Encontrar el valor máximo en un array
// // Encontrar el valor máximo en un array usando el método Math.max
// const array5 = [10, 45, 23, 8, 37];
// const maximo = Math.max(...array5);
// console.log("Valor máximo:", maximo);

// // Ejercicio 6: Verificar si todos los elementos de un array son mayores que cierto número

// // Verificar si todos los elementos de un array son mayores que cierto número usando el método every
// const array6 = [15, 20, 25, 30];
// const numeroLimite = 10;
// const todosMayores = array6.every((elemento) => elemento > numeroLimite);
// console.log(
//   "¿Todos los elementos son mayores que",
//   numeroLimite,
//   "?",
//   todosMayores
// );
// // Ejercicio 7: Remover elementos duplicados de un array

// // Remover elementos duplicados de un array usando el método Set
// const array7 = [1, 2, 2, 3, 4, 4, 5];
// const arraySinDuplicados = [...new Set(array7)];
// console.log("Array sin duplicados:", arraySinDuplicados);

// // Ejercicio 8: Convertir un array de números a un array de cadenas
// // Convertir un array de números a un array de cadenas usando el método map
// const array8 = [10, 20, 30, 40];
// const arrayCadenas = array8.map((numero) => numero.toString());
// console.log("Array de cadenas:", arrayCadenas);
// // Ejercicio 9: Obtener el número de ocurrencias de cada elemento en un array

// // Obtener el número de ocurrencias de cada elemento en un array usando el método reduce
// const array9 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// const ocurrencias = array9.reduce((contador, elemento) => {
//   contador[elemento] = (contador[elemento] || 0) + 1;
//   return contador;
// }, {});
// console.log("Número de ocurrencias:", ocurrencias);
// // Ejercicio 10: Encontrar el número más frecuente en un array

// // Encontrar el número más frecuente en un array usando el resultado del ejercicio anterior
// const numeroMasFrecuente = Object.keys(ocurrencias).reduce((a, b) =>
//   ocurrencias[a] > ocurrencias[b] ? a : b
// );
// console.log("Número más frecuente:", numeroMasFrecuente);
