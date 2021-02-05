//Stwórz tablicę z dowolnymi elementami a następnie wypisz je w konsoli.

var table = [1, 2, 3, 4, "Iks De", true];

console.log(table);

/*
Stwórz tablicę z dowolnymi elementami a następnie w konsoli wypisz:

Pierszy i drugi element
Ostatni element
Wszystkie elementy
Co drugi element
Wszystkie stringi
Wszystkie numbery
*/

function linia(){
    console.log("-----------------------");
}

var table = [1, 2, 3, "string1", true, 0.21];

//pierwszy i trugi element

console.log(table[0]);
console.log(table[1]);

//ostatni element
linia();
console.log(table[table.length - 1]);

//wszystkie elementy
linia();
console.log(table);

//co drugi element
linia();
for(var i = 0;i < table.length;i++){
    if(i % 2 == 0){
        console.log(table[i]);
    }
}

//wszystkie stringi
linia();
var x;
for(var i = 0;i < table.length;i++){
    x = table[i];
    if(typeof(x) == 'string'){
        console.log(table[i]);
    }
}

//wszystkie numbery
linia();
for(var i = 0;i < table.length;i++){
    x = table[i];
    if(typeof(x) == 'number'){
        console.log(table[i]);
    }
}

/*
Stwórz tablicę tylko z elementami typu number. W konsoli wypisz:

sumę wszystkich elementów
różnicę wszystkich elementów
średnią wszystkich elementów
elementy parzyste
elementy nieparzyste
największą liczbę
najmniejszą liczbę
wypisz tablicę od tyłu
nie rozpatrujemy warunków brzegowych. Liczby nie powtarzają się. ** Nie używamy obiektu Math
*/

var table = [1, 2, 3, 4, 5, 18, 11, 51];

//suma
var x = 0;
for(var i = 0; i < table.length; i++){
    x += table[i];
}

console.log("Suma = "+ x);

x = 0;
for(var i = 0; i < table.length; i++){
    x -= table[i];
}

console.log("Różnica = "+ x);

//średnia
x = 0;
for(var i = 0; i < table.length; i++){
    x += table[i];
}
x = x / table.length
console.log("Średnia = " + x);
x = 0;

//elementy parzyste
var t = [];

for(var i = 0; i < table.length; i++){
    if(table[i] % 2 == 0){
        t.push(table[i]);
    }
}

console.log("Parzyste : "+ t);

//elementy nieparzyste
t = [];
for(var i = 0; i < table.length; i++){
    if(table[i] % 2 != 0){
        t.push(table[i]);
    }
}
console.log("Nieparzyste : "+ t);

//największą liczbę

for(var i = 0; i < table.length; i++){
    if(table[i] > x){
        x = table[i];
    }
}

console.log("Największa liczba to: " + x);

//najmniejsza liczba
for(var i = 0; i < table.length; i++){
    if(table[i] < x){
        x = table[i];
    }
}

console.log("Najmniejszaa liczba to: " + x);

//tablica od tyłu
t = [];

for(var i = table.length - 1; i >= 0; i--){
    t.push(table[i]);
}

console.log("Tablica od tyłu: " + t);

//Napisz funkcję która przyjmie jako parametr tablice liczb. Zwróć do konsoli sumę wszystkich liczb.

function liczbaLiczb(table){
    var x = table.length;
    console.log(x);
}

t = [1, 2, 3, 4, 5, 6, 7, 8];

liczbaLiczb(t);



/*
Napisz funkcję która przyjmuje jako parametr tablicę liczb. 
Następnie wypisz w konsoli wszystkie elementy tej tablicy pomnożone przez średnią tablicy
*/

function av(table){
    var t = [];
    var y = table.length;
    var x = 0, z = 0;
    for(var i = 0; i < y; i++){
        x += table[i];
    }
    z = x / y;
    for(var i = 0; i < y; i++){
        t.push(table[i] * z);
    }

    console.log(t);
}

var tab = [1, 2, 3, 1, 17, 1];


av(tab);

//Napisz funkcję która zwraca średnią liczb parzystych z tablicy którą przekażesz jako parametr tej funkcji.

function srednia(tab){
    var x = tab.length;
    var y = 0, z = 0;
    for(var i = 0; i < x; i++){
        if(tab[i] % 2 == 0){
            y += tab[i];
            z += 1;
        }
    }
    console.log(y / (x - z));
}

let t = [1, 2, 3 ,4 ,5 ,6];
srednia(t);

//Posortuj tablicę przekazaną jako parametr do funkcji. Wypisz ją w konsoli

t = [1, 5, 15, 16, 3, 8, 95, -12];

t.sort(function(a, b){return a - b});

console.log(t);

/*
Napisz funkcję która będzie zwracać tablicę która będzie sumą indeksów dwóch tablic przekazanych jako 
parametry funkcji.
*/

function sum(x, y){
    var l = x.length;
    var s = 0;

    for(var i = 0; i < l; i++){
        s += x[i] + y [i];
    }
    return s;
}

var t1 = [1, 2, 3, 4, 5];
var t2 = [5, 4, 3, 2, 1];

console.log(sum(t1,t2));

/*
Napisz funkcję która przyjmuje jako parametr tablicę z numberami a następnie zwraca nową tablicę na 
podstawie parametru gdzie każdy element tablicy ma odwrotny znak.
*/

function zwrot(tab){
    var x = tab.length;
    var t = [];


    for(var i = 0; i < x; i++){
        t.push(tab[i] * -1);
    }
    return t;
}

var table = [1, 2, 3, 4, 5, 6];

console.log(zwrot(table));