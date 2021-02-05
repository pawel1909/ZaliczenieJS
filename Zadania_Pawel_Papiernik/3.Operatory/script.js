//W konsoli stwórz dwie zmienne i przypisz do nich dwie wartości boolean. Porównaj je za pomocą odpowiedniego operatora.

var x = true;
var y = false;

function porownanie(x, y){
    if(x == y){
        return true;
    }
    else{
        return false;
    }
}

console.log(porownanie(x,y));

/*
W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne liczby, a trzecia o nazwie moduloResult 
niech przechowuje liczbę 0. Oblicz resztę z dzielenia (modulo) tych liczb i zapisz wynik w zmiennej 
moduloResult. Wypisz zmienną moduloResult w konsoli.
*/

var x = 7;
var y = 3;
var moduloResult = 0;
moduloResult = x % y;

console.log(moduloResult);

/*
W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne stringi, a jedna o nazwie stringsResult, 
niech przechowuje pusty string np. let stringsResult = "" Połącz stringi za pomocą konkatenacji i 
zapisz wynik w zmiennej stringsResult oraz wypisz go w konsoli.
*/

var x, y, stringsResult;

x = 'ala ma';
y = 'kota'
stringsResult = '';
stringsResult = x + " " + y;
console.log(stringsResult);

/*
W konsoli stwórz dwie zmienne:

var someNumber = 425;
var someString = "425";
Porównaj te zmienne za pomocą operatorów == oraz ===. Wypisz wyniki w konsoli. Opowiedz grupie o wynikach
*/

var someNumber = 425;
var someString = "425";

console.log(someNumber == someString);
console.log(someNumber === someString);

/*
W konsoli stwórz zmienną o nazwie counter. Wstaw do niej liczbę 30. Wypisz jej wartość w konsoli, a następnie:

za pomocą inkrementacji zwiększ wartość zmiennej counter
wypisz ją w konsoli
za pomocą dekrementacji zmniejsz wartość zmiennej counter
wypisz ją w konsoli.
*/
var counter = 30;

console.log(counter);
console.log(++counter);
console.log(--counter);

/*
W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne liczby, a jedna o nazwie result, 
niech przechowuje null. Sprawdź czy liczba pierwsza jest większa od drugiej za pomocą 
odpowiedniego operatora i zapisz wynik w zmiennej result. Wypisz tą zmienną w konsoli.
*/

var x, y, result;
x = 20;
y = 13;
result = null;

result = (x > y) ? true : false;

console.log(result);