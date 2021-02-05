/*
Utwórz 2 obiekty person i person2. Niech posiadają następujące właściwości:

* Imię
* Nazwisko
* Wiek
* Kraj
* Miasto

Stwórz dwie różne metody:

1. Metoda 1: wypisuje wszystkie informacje o tej osobie
2. Metoda 2: dodaje 1 rok do wieku za każdym jej wywołaniem

Następnie napisz kilka wywołań metody numer 2 w różnych kontekstach tak aby sprawdzić zasadę jej działania.
*/
var Person1 = {
    imie: "Jan",
    nazwisko: "kowalski",
    wiek: 15,
    kraj: "PL",
    miasto: "KRK"
}

var Person2 = {
    imie: "Adam",
    nazwisko: "kowalski",
    wiek: 16,
    kraj: "US",
    miasto: "NYC"
}

function Wypisz(){
    console.log(this.imie+" "+ this.naziwsko+ " "+ this.wiek+" "+ this.kraj+" "+this.miasto);
}

function Dodaj(){
    this.wiek++;
}

Person1.wypisz = Wypisz;
Person2.wypisz = Wypisz;
Person1.dodaj = Dodaj;
Person2.dodaj = Dodaj;

Person1.w





//Rozszerz obiekty person i person2 z poprzedniego zadania o nowe pole typu tablicowego, które będzie przetrzymywać ulubione dania danej osoby. Następnie napisz metodę która będzie wypisywać w konsoli zawartość tego pola oraz metodę która będzie dodawać kolejne elementy do tego pola. Wszystkie te rzeczy mają znaleźć się poza pierwotnym ciałem obiektu




var Person1 = {
    imie: "Jan",
    nazwisko: "kowalski",
    wiek: 15,
    kraj: "PL",
    miasto: "KRK"
}

var Person2 = {
    imie: "Adam",
    nazwisko: "kowalski",
    wiek: 16,
    kraj: "US",
    miasto: "NYC"
}

function Wypisz(){
    console.log(this.imie+" "+ this.nazwisko+ " "+ this.wiek+" "+ this.kraj+" "+this.miasto);
}

function Dodaj(){
    this.wiek++;
}

Person1.wypisz = Wypisz;
Person2.wypisz = Wypisz;
Person1.dodaj = Dodaj;
Person2.dodaj = Dodaj;

Person1.wypisz();
Person1.dodaj();
Person1.wypisz();

Person2.wypisz();
Person2.dodaj();
Person2.wypisz();

Person2.favoriteFoods = ['sushi', 'pizza'];
Person1.favoriteFoods = ['sushi', 'beacon'];


Person1.showFavoriteFoods = function() {console.log(this.favoriteFoods)};
Person2.showFavoriteFoods = function() {console.log(this.favoriteFoods)};

Person1.showFavoriteFoods();

let addNewFavoriteFood = function (element) {
    this.favoriteFoods.push(element);
}

Person1.addNewFavoriteFood = addNewFavoriteFood;
Person2.addNewFavoriteFood = addNewFavoriteFood;

Person1.addNewFavoriteFood("sushi2");


/*
Napisz kalkulator który będzie miał funkcję dodawania, odejmowania, mnożenia i dzielenia. Potrzebne metody:

1. Metoda zapisująca liczby a i b w kontekście obiektu
2. Metoda sumująca wcześniej zapisane liczby
3. Metoda odejmująca wcześniej zapisane liczby
4. Metoda mnożąca wcześniej zapisane liczby
5. Metoda dzieląca wcześniej zapisane liczby. Jeśli liczba b = 0 to wypisz w konsoli odpowiedni komunikat błędu.
*/
function Calculator(a,b) {
    this.a =a;
    this.b =b;
    this.add = function () {
        return this.a + this.b;
    }
    this.substract = function () {
        return this.a - this.b;
    }
    this.divide = function () {
        if (this.b === 0) return "cannot divide by 0";
        return this.a / this.b;
    }
    this.multiply = function () {
        return this.a * this.b
    }
}

const calculator = new Calculator(3,1);
console.log(calculator.add());
console.log(calculator.divide());
console.log(calculator.multiply());
console.log(calculator.substrac());

//Stwórz prosty symulator wchodzenia i schodzenia z drabiny. Potrzebne będą trzy metody. Zastanów się jakie?

function Ladder(steps) {
    this.steps = steps;
    this.where = 0;
    this.climb = () => {
        if(this.where > 0) {
            console.log("Musisz najpierw zejść z drabiny");
        } else {
            console.log("Rozpoczynamy wchodzenie na drabinę");
            for(var i = 0; i<=this.steps; i++) {
                console.log("Stopien " + this.where++);
            }
        }
      console.log(this.where);
    }

    this.getOff = () => {
        if(this.where == 0) {
            console.log("Musisz najpierw wejsc na drabine");
        } else {
            console.log("Rozpoczynamy schodzenie z drabiny");
            for(var i; i<=this.steps; i++) {
                console.log("Stopien " + this.where--);
            }
        }
    }
}

const newLadder = new Ladder(10);

newLadder.climb();
newLadder.climb();

newLadder.getOff();
newLadder.getOff();
console.log("check");