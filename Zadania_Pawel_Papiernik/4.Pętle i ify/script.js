/*
W konsoli stwórz dwie zmienne przechowujące liczby. Następnie za pomocą instrukcji 
warunkowej if ... else , wypisz w konsoli, która z nich jest większa.
*/

var x = 20;
var y = 13;

if(x > y){
    console.log("liczba x = " + x + " Jest wieksza")
}
else{
    console.log("liczba y = " + y + " jest większa")
}

/*
W konsoli stwórz trzy zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej 
if, else if i else wypisz w konsoli, która z nich jest największa.
*/
var x, y, z;

x = 2;
y = 5;
z = 90;

if(x > y && x > z){
    console.log("Liczba x jest największa");
}
else if(y > x && y > z){
    console.log("Liczba y jest największa");
}
else{
    console.log("Liczba z jest największa");
}


//W konsoli stwórz pętle, która 10 razy wypisze w konsoli tekst "Lubię JavaScript".

for(var i = 0; i < 10; i++){
    console.log("Lubie JavaScript");
}

/*
W konsoli stwórz zmienną result i przypisz do niej liczbę 0. Następnie stwórz pętle, 
która doda do siebie liczby od 1 do 10.
*/

var result = 0;

for(var i = 0; i < 11 ; i++){
    result += i;
}
console.log(result);

/*
W konsoli napisz program, który na podstawie wartości zmiennej np. var n = 5; 
wypisuje wszystkie liczby od zera do n. Przy każdej liczbie program ma napisać, 
czy liczba jest parzysta czy nie. Np.:

0 – parzysta
1 – nieparzysta
2 – parzysta
3 – nieparzysta
...
*/

var n = 55;

for(var i = 0; i < n; i++){
    if(i%2 == 0){
        console.log("Parzysta");
    }
    else{
        console.log("Nieparzysta");
    }
}

/*
W konsoli stwórz dwie pętle niezależne i wypisz wartości ich liczników w każdej iteracji. 
Wykorzystaj: konkatenację np.

console.log("i= " + i + ", j= " + j);
*/

for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
        console.log("i = " + i + " ,j = " + j);
    }
}


/*
FizzBuzz - wypisz w consoli liczby od 0 do 100. Zamiast każdej podzielnej liczby przez 3 wypisz "Fizz", z
amiast każdej podzielnej liczby przez 5 wypisz "Buzz" 
a zamiast każdej podzielnej liczby przez 3 i przez 5 wypisz "FizzBuzz"

Przykład:

0 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz ....
*/

for(var i = 0; i < 101;i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0 && i % 5 != 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0 && i % 3 != 0){
        console.log("Buzz");
    }
    else{
        console.log(i)
    }
}