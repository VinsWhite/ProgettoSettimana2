/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];

for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

let sorted = pets.sort(); 
console.log(sorted);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

let reverse = pets.reverse(); 
console.log(reverse);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const firstPet = pets[0];
pets.splice(0, 1);
pets.push(firstPet);

console.log(pets);


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

//SOLUZIONE 1: assegna a tutti la stessa targa
/* for (let i = 0; i < cars.length; i++){
  cars[i].licensePlate = "AB 123CD";
} */

//SOLUZIONE 2
cars[0].licensePlate = "AB 123CD";
cars[1].licensePlace = "CD 456AB";
cars[2].licensePlate = "EF 789CD";

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars [3] = {
  brand: 'Fiat',
  model: 'Punto',
  color: 'black',
  trims: ['a', 'b', 'c'],
  licensePlace: "GH 101EF",
}

console.log("Array cars con nuovo oggetto: ", cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log("Array cars con ultimo elemento di trims eliminato: ", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = [];


for (let i = 0; i < cars.length; i++) {
  let trims = cars[i].trims;
  let firstTrim = trims[0];
  justTrims.push(firstTrim);
}

console.log("Just Trims: ", justTrims);


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  let color = cars[i].color;

  if (color.charAt(0) == "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let count = 0;

while (numericArray[count] !== 32) {
  console.log(numericArray[count]);
  count++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ['g', 'n', 'u', 'z', 'd'];
let newArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  let char = charactersArray[i];
  let position = -1;

  switch (char) {
    case 'g':
      position = 6;
      break;
    case 'n':
      position = 13;
      break;
    case 'u':
      position = 21;
      break;
    case 'z':
      position = 25;
      break;
    case 'd':
      position = 3;
      break;
  }

  if (position !== -1) {
    newArray.push(position);
  }
}

console.log(newArray);


