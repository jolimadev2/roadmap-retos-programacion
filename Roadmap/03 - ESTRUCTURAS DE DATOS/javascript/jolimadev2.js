/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */

// Punto 1: Ejemplo de estructuras soportadas por defecto en Javascript

const fruits = ["apple", "orange", "berrie", "cherry", "lemon"]; //array
fruits.push("coco");
fruits.shift("cherry");
console.log(fruits);
//Sets
letters = new Set(["d", "e", "f"]);
letters.add("g");
console.log(letters);
const objFruits = {
  prop1: "banana",
  prop2: "dragonFruit",
  prop3: "mandarin",
}; //object
//insercion propiedad
const obj = {
  prop1: "Hello!",
  prop3: function () {
    console.log("I'm a property dude!");
  },
};
//inserción, borrado, actualización y ordenación.
console.log(obj.prop1); // "Hello!"
console.log(obj["prop1"]); // "Hello!"
obj.prop3(); // "I'm a property dude!"
obj.prop4 = 125;

//Punto 2 EXTRA: Realizar agenda de contactos:.
let agenda = {
  "Elon Musk": "1234567890",
  "Jeff Bezos": "9876543210",
  "Bill Gates": "1122334455",
  "Warren Buffett": "5566778899",
  "Mark Zuckerberg": "1010101010",
  "Larry Page": "1212121212",
  "Sergey Brin": "1313131313",
  "Bernard Arnault": "1414141414",
  "Steve Ballmer": "1515151515",
  "Mukesh Ambani": "1616161616",
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//contactos
function addContact(name, phone) {
  if (!/^\d{1,11}$/.test(phone)) {
    console.log("X invalid number, must be just numbers and max 11 digits");
    return;
  } else {
    agenda[name] = phone;
    console.log(`Contact ${name} added correctly`);
  }
}

function searchContact(name) {
  if (agenda[name]) {
    console.log(`Name of ${name}: ${agenda[name]}`);
  } else {
    console.log("X name not found it");
  }
}

function updateContact(name, newPhone) {
  if (agenda[name]) {
    if (!/^\d{1,11}$/.test(newPhone)) {
      console.log("Invalid Number");
      return;
    }

    agenda[name] = newPhone;
    console.log(`Contact ${name} updated`);
  } else {
    console.log("X not found it");
  }
}

function deleteContact(name) {
  if (agenda[name]) {
    delete agenda[name];
    console.log(`🗑️ Contact ${name} deleted successfully.`);
  } else {
    console.log("❌ Contact not found.");
  }
}

addContact("STEVE LABOROS", "9988776655");
console.log(agenda);

deleteContact("Bill Gates");
console.table(agenda);
