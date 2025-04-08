/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.
const callHello = (name) => "Ciao ${name}";

// Invoca la funzione qui e stampa il risultato in console
console.log(callHello(userName));
console.log(callHello("Antonino"));

console.log(callHello("Antonino"));
console.log(callHello("Sara"));
console.log(callHello("Fabio"));
console.log(callHello("Chiara"));
//Risultato atteso se si passa 'Mario': // ciao Mario
