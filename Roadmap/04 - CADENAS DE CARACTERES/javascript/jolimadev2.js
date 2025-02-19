/**
 *
 * * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición, recorrido,
 *   conversión a mayúsculas y minúsculas, reemplazo, división, unión, interpolación, verificación...
 *
 */
//define string
const quote = "I'm building my best version";
console.log(typeof quote)
//num to string
const num = 500
console.log(num.toString())
//concat
let name = "Aza"
let lastName = "Raskin"
let fullName = "My full name is:" + name + lastName;
console.log(fullName)
//concat template string
let fullNameTwo = `My full name is: ${name} ${lastName}`
console.log(fullNameTwo)
//concat with concat method
let newString = "you like throw farts if you read this, farts like:"
console.log(newString.concat("smelly").concat("silence and warm").concat("with noise but ok"))
//verify string length
console.log(fullNameTwo.length)
//remove empty spaces
let text = "       Hello World!        ";
let result = text.trim();
console.log(result)
// format string to Lower Case
let upper = "UPPERCASE";
console.log(upper.toLowerCase());
// access to string with chartAt method
console.log("mouredev".charAt(3))// output: r
//alternative using bracket notation
let dev = "mouredev";
console.log(dev[3])
//find index position of character
const des = "midudev";
console.log(des.indexOf("m")) // output: 0
//usando substring:
let phrase = "deep in tech"
console.log(phrase.substr(0,4));



/**
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

const palabras = {
    0: "radar",
    1: "amor",
    2: "roma",
    3: "oso",
    4: "ala",
    5: "casa",
    6: "saco",
    7: "cosa"
  };
  
  function sonPalindromos(palabra1, palabra2) {
    palabra1 = palabra1.toLowerCase();
    palabra2 = palabra2.toLowerCase();
    const palabra2Invertida = palabra2.split("").reverse().join("");
    return palabra1 === palabra2Invertida;
  }
  
  function sonAnagramas(palabra1, palabra2) {
    palabra1 = palabra1.toLowerCase();
    palabra2 = palabra2.toLowerCase();
    return palabra1.split("").sort().join("") === palabra2.split("").sort().join("");
  }
  
  function sonIsogramas(palabra1, palabra2) {
    palabra1 = palabra1.toLowerCase();
    palabra2 = palabra2.toLowerCase();
    const letras1 = new Set(palabra1.split(""));
    const letras2 = new Set(palabra2.split(""));
    return letras1.size === palabra1.length && letras2.size === palabra2.length;
  }
  
  const resultados = [];
  
  for (let i = 0; i < Object.keys(palabras).length; i++) {
    for (let j = i + 1; j < Object.keys(palabras).length; j++) {
      const palabra1 = palabras[i];
      const palabra2 = palabras[j];
  
      if (sonPalindromos(palabra1, palabra2)) {
        resultados.push(palabra1 + " y " + palabra2 + " son palíndromos");
      }
  
      if (sonAnagramas(palabra1, palabra2)) {
        resultados.push(palabra1 + " y " + palabra2 + " son anagramas");
      }
  
      if (sonIsogramas(palabra1, palabra2)) {
        resultados.push(palabra1 + " y " + palabra2 + " son isogramas");
      }
    }
  }
  
  console.log(resultados);