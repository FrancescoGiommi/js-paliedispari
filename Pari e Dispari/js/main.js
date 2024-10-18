/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

/* RACCOLTA DATI */
let userNumber;

/* PROCEDURA */
/* ELABORAZIONE */
/* chiedo all'utente di scegliere un numero pari o dispari */
const choiceEvenOrOdd = prompt(`Scegli "pari" o "dispari"`);

userNumber = parseInt(prompt(`Scegli un numero tra 1 e 5`));

console.log(userNumber);

/* genero un numero random per il computer con una funzione */
function randomNumber(min, max) {
  pcNumber = Math.floor(Math.random(min - max) * 5) + 1;
  return pcNumber;
}
const generatorNumberPc = randomNumber();
console.log(generatorNumberPc);

/* faccio somma i 2 numeri */
let sum = userNumber + generatorNumberPc;
console.log(`La somma dei numeri è ${sum}`);

/* stabilisco se la somma dei numeri è pari o dIspari con una funzione */
function sumEvenOrOdd(Even, Odd) {
  Even = "pari";
  Odd = "dispari";
  if (sum % 2 === 0) {
    winner = Even;
    alert(`La somma è pari`);
    console.log(`La somma è pari`);
  } else {
    winner = Odd;
    alert(`La somma è dispari`);
    console.log(`La somma è dispari`);
  }
  return winner;
}

/* dichiaro il vincitore */
const theWinner = sumEvenOrOdd ? userNumber : generatorNumberPc;
console.log(`Il vincitore è` + theWinner);

/* OUTPUT */

/*Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da  farsi quando si crea una funzione:
1. Come dovrebbe chiamarsi?
2. Ho bisogno di parametri?
3. Devo restituire un valore?
4. Se sì, di che tipo?*/
