/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
const filterByFirstLetter = (elements, search) =>
  elements.filter((element) => {
    const firstLetter = element[0];
    if (firstLetter === search) {
      return true;
    }
  });

// Invoca la funzione qui e stampa il risultato in console
console.log(filterByFirstLetter(names, "A"));
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
