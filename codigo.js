//EJERCICIO 1
// Muestra un mensaje en la consola
console.log("Hola Mundo!");
// Muestra otro mensaje en la consola
console.log("Soy el primer script");



//EJERCICIO 2
// Almacena el mensaje en una variable
var mensaje = "Hola Mundo!    Que facil es aprender a usar 'comillas simples' y comillas dobles";
// Muestra el mensaje en una alerta
alert(mensaje);



//EJERCICIO 3
// Crear el array 'meses' con los nombres de los doce meses
var meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  // Mostrar los nombres de los meses en la consola utilizando console.log()
  for (var i = 0; i < meses.length; i++) {
    console.log(meses[i]);
  }



//EJERCICIO 4
var valores = [true, 5, false, "hola", "adios", 2];
// Encontrar los dos elementos de texto
var texto1 = valores[3];
var texto2 = valores[4];
// Determinar cuál es mayor utilizando el operador de comparación
if (texto1.length > texto2.length) {
  console.log(texto1 + " es mayor que " + texto2);
} else if (texto2.length > texto1.length) {
  console.log(texto2 + " es mayor que " + texto1);
} else {
  console.log("Ambos textos tienen la misma longitud.");
}

// Encontrar los dos elementos booleanos
var valorBooleano1 = valores[0];
var valorBooleano2 = valores[2];
var resultadoTrue = valorBooleano1 || valorBooleano2;
var resultadoFalse = valorBooleano1 && valorBooleano2;
console.log("Resultado True: " + resultadoTrue);
console.log("Resultado False: " + resultadoFalse);

// Oeraciones entre los elementos numericos
var numero1 = valores[1];
var numero2 = valores[5];
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero1 % numero2;
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Módulo: " + modulo);



//EJERCICIO 5
var numero1 = 5;
var numero2 = 8;

if (numero1 <= numero2) {
  console.log("numero1 no es mayor que numero2");
}
if (numero2 > 0) {
  console.log("numero2 es positivo");
}
if (numero1 < 0 || numero1 !== 0) {
  console.log("numero1 es negativo o distinto de cero");
}
if (numero1 + 1 <= numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}



//EJERCICIO 6
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
// Solicitar al usuario el número de DNI y la letra
var numeroDNI = parseInt(prompt("Introduce el número de DNI (sin letra):"));
var letraUsuario = prompt("Introduce la letra del DNI (mayúscula):");

// Comprobar si el número es válido
if (numeroDNI < 0 || numeroDNI > 99999999) {
  console.log("El número de DNI proporcionado no es válido.");
} else {
  // Calcular la letra según el método explicado
  var resto = numeroDNI % 23;
  var letraCalculada = letras[resto];

  // Comprobar si la letra indicada por el usuario coincide con la calculada
  if (letraUsuario === letraCalculada) {
    console.log("El número y la letra de DNI son correctos.");
  } else {
    console.log("La letra que has indicado no es correcta.");
  }
}



//EJERCICIO 7
// Solicitar al usuario un número entero
var numero = parseInt(prompt("Introduce un número entero para calcular su factorial:"));

// Inicializar una variable para almacenar el factorial
var factorial = 1;

// Comprobar si el número es negativo
if (numero < 0) {
  console.log("El factorial de un número negativo no está definido.");
} else if (numero === 0) {
  console.log("El factorial de 0 es 1.");
} else {
  // Calcular el factorial utilizando un bucle for
  for (var i = 1; i <= numero; i++) {
    factorial *= i;
  }
  console.log("El factorial de " + numero + " es " + factorial);
}



//EJERCICIO 8

