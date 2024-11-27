/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

const crazySum = function (num1, num2) {
    
    if (num1 === num2) {
      return (num1 + num2) * 3
    } else {
      return num1 + num2
    }
  }
  
console.log(crazySum(3, 3))
  
/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

const boundary = function (n) {
    if ((n > 20 && n <= 100) || n === 400) {
      return true
    } else {
      return false
    }
}
console.log("ex 4", boundary(3))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

const reverseString = function (str) {
    return str.split('').reverse().join('');
} 
console.log (reverseString("ciao"))

    

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

const upperFirst = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
const upperFirstPhrase = function (str) {
  
  let words = str.split(" ")
  let finalString = []
  for (let i = 0; i < words.length; i++) {
    let firstChar = words[i].charAt(0)
    console.log(firstChar)
    let uppercaseChar = firstChar.toUpperCase()
    let cutString = words[i].slice(1)
    let finalWord = uppercaseChar + cutString
    finalString.push(finalWord)
  }
  console.log(finalString.join(" "))
}

upperFirstPhrase("hello world")

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/


const randomNumbers = [];
function giveMeRandom(n) {
  
  
  for (let i = 0; i < n; i++) {
    const randomNum = Math.random() * 10;
    randomNumbers.push(Math.floor(randomNum)); 
  }
  
  return randomNumbers;
}
console.log(giveMeRandom(5)); 

    

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2;
}
console.log(area(5, 10)); 
console.log(area(3, 7));  


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(num) {
  const diff = Math.abs(num - 19); 
  
  if (diff > 19) {
    return diff * 3; 
  }
  return diff; 
}

console.log(crazyDiff(10)); 
console.log(crazyDiff(25)); 
console.log(crazyDiff(50)); 


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

const codify = function (str) {
  
}

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  