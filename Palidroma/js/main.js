/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

/* RACCOLTA DATI */

/* PROCEDURA */
/* ELABORAZIONE */

/* chiedo all'utente di inserie una parola  */
let wordRequest = prompt("Inserisci una parola");

/* creo la funzione */

function reverseString(word) {
  word = word.split("");
  reverseArray = word.reverse();
  joinArray = reverseArray.join("");
  return joinArray;
}
console.log(reverseString(wordRequest));

/* se la parola è palindroma */
if (wordRequest == reverseString(wordRequest)) {
  alert("La parola è un palindromo");
  console.log("La parola è un palindromo");
  /* se la parola non è palindroma */
} else {
  alert("La parola non è un palindromo");
  console.log("La parola non è un palindromo");
}

/* OUTPUT */
console.log(`wordRequest: ${wordRequest}`);

/*Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.*/

/*Domande da  farsi quando si crea una funzione:
1. Come dovrebbe chiamarsi?
2. Ho bisogno di parametri?
3. Devo restituire un valore?
4. Se sì, di che tipo?*/
