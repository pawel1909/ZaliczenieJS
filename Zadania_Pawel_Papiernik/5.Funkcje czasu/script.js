/*
Wypisuj w konsoli co 3 sekundy napis "Cześć po raz " oraz liczbę powtóżeń. 
Jeśli Licznik dojdzie do 15 zatrzymaj go.
*/


var i = 1;
    let x = setInterval(() => {
        console.log("Czesc po raz: " + i++);
        if(i == 16){
            clearInterval(x);
        }
    }, 3000)



/*
Po 2 sekundach od uruchomienia programu wyświetl w konsoli wszystkie elementy dowolnej tablicy. 
Następnie wyświetl w konsoli co 3 sekundy kolejny element tej tablicy
*/

var tab = [1, 2, 3, 4, "pięć"];

setTimeout(() =>{
    console.log(tab);
    var i = 0;
    let x = setInterval(() => {
        console.log(tab[i++]);
        if(i == 5){
            clearInterval(x);
        }
    }, 3000)
    
    
},2000)



