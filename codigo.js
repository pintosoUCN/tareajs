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



//EJERCICIO 8
function determinarParidad(numero) {
    if (numero % 2 === 0) {
      return "El número es par.";
    } else {
      return "El número es impar.";
    }
  }
  
// Ejemplo de uso de la función
var numero = 7;
var resultado = determinarParidad(numero);
console.log(resultado); // Mostrará "El número es impar."
  


//EJERCICIO 9
function determinarMayusculasMinusculas(cadena) {
    // Comprobar si la cadena contiene solo letras minúsculas
    if (cadena === cadena.toLowerCase()) {
      return "La cadena está formada solo por minúsculas.";
    }
    // Comprobar si la cadena contiene solo letras mayúsculas
    else if (cadena === cadena.toUpperCase()) {
      return "La cadena está formada solo por mayúsculas.";
    } else {
      return "La cadena es una mezcla de mayúsculas y minúsculas.";
    }
  }
  
// Ejemplo de uso de la función
var texto1 = "mayusculas";
var texto2 = "MINUSCULAS";
var texto3 = "MeZcla";
  
console.log(determinarMayusculasMinusculas(texto1)); // Mostrará "La cadena está formada solo por minúsculas."
console.log(determinarMayusculasMinusculas(texto2)); // Mostrará "La cadena está formada solo por mayúsculas."
console.log(determinarMayusculasMinusculas(texto3)); // Mostrará "La cadena es una mezcla de mayúsculas y minúsculas."
  


//EJERCICIO 10
function esPalindromo(cadena) {
    // Eliminar espacios y convertir la cadena a minúsculas
    cadena = cadena.replace(/ /g, '').toLowerCase();
    
    // Invertir la cadena
    var cadenaInvertida = cadena.split('').reverse().join('');
    
    // Comparar la cadena original con la cadena invertida
    return cadena === cadenaInvertida;
  }
  
// Ejemplo de uso de la función
var texto1 = "ana";
var texto2 = "oso";
var texto3 = "hola";
  
console.log(esPalindromo(texto1)); // Mostrará true
console.log(esPalindromo(texto2)); // Mostrará true
console.log(esPalindromo(texto3)); // Mostrará false
  


//EJERCICIO 11
// Objeto Persona
function Persona(nombre, edad, género) {
    this.nombre = nombre;
    this.edad = edad;
    this.género = género;
  }
  
  Persona.prototype.obtDetalles = function() {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad);
    console.log("Género: " + this.género);
  };
  
  // Objeto Estudiante, hereda de Persona
  function Estudiante(nombre, edad, género, curso, grupo) {
    Persona.call(this, nombre, edad, género);
    this.curso = curso;
    this.grupo = grupo;
  }
  
  Estudiante.prototype = Object.create(Persona.prototype);
  Estudiante.prototype.constructor = Estudiante;
  
  Estudiante.prototype.registrar = function() {
    console.log("Curso: " + this.curso);
    console.log("Grupo: " + this.grupo);
  };
  
  // Objeto Profesor, hereda de Persona
  function Profesor(nombre, edad, género, asignatura, nivel) {
    Persona.call(this, nombre, edad, género);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  
  Profesor.prototype = Object.create(Persona.prototype);
  Profesor.prototype.constructor = Profesor;
  
  Profesor.prototype.asignar = function() {
    console.log("Asignatura: " + this.asignatura);
    console.log("Nivel: " + this.nivel);
  };
  
  // Crear objetos y casos de prueba
  var estudiante1 = new Estudiante("Juan", 20, "Masculino", "Matemáticas", "A");
  var profesor1 = new Profesor("Ana", 35, "Femenino", "Historia", "Avanzado");
  
  console.log("Detalles del estudiante:");
  estudiante1.obtDetalles();
  estudiante1.registrar();
  
  console.log("\nDetalles del profesor:");
  profesor1.obtDetalles();
  profesor1.asignar();

  

//EJERCICIO 12
// Crear un array para almacenar la cantidad de veces que aparece cada suma
var resultados = new Array(11);

// Inicializar el array con ceros
for (var i = 0; i < resultados.length; i++) {
  resultados[i] = 0;
}

// Simular el lanzamiento de dos dados 36,000 veces
var lanzamientos = 36000;

for (var i = 0; i < lanzamientos; i++) {
  // Generar números aleatorios entre 1 y 6 para los dos dados
  var dado1 = Math.floor(Math.random() * 6) + 1;
  var dado2 = Math.floor(Math.random() * 6) + 1;
  
  // Sumar los resultados de los dos dados
  var suma = dado1 + dado2;
  
  // Incrementar el contador de la suma en el array
  resultados[suma - 2]++;
}

// Mostrar los resultados
for (var i = 0; i < resultados.length; i++) {
  console.log("Suma " + (i + 2) + " aparece " + resultados[i] + " veces.");
}



//EJERCICIO 13
//Validar una fecha en formato "XX/XX/XXXX"
var texto = "Nací el 05/04/1982 en Antofagasta.";
var regex = /\d{2}\/\d{2}\/\d{4}/;
var resultado = regex.test(texto);
console.log(resultado);

//Validar una dirección de correo electrónico
var email = "joaquin@example.com";
var regex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/;
var resultado = regex.test(email);
console.log(resultado); // Devolverá true

//Reemplazar caracteres utilizando expresiones regulares
function escapeHTML(text) {
  return text.replace(/&/g, "&amp;")
             .replace(/"/g, "&quot;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt");
}

//Mostrar nombre y apellido en orden inverso y separados por una coma
var nombreCompleto = "John Smith";
var regex = /(\w+) (\w+)/;
var resultado = nombreCompleto.replace(regex, "$2, $1");
console.log(resultado); // Devolverá "Smith, John"

//Eliminar etiquetas peligrosas de una cadena HTML
var html = '<div>Este es un ejemplo de <script>alert("script peligroso");</script> HTML.</div>';
var regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
var resultado = html.replace(regex, "");

