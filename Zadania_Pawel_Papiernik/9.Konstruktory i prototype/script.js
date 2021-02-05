/*
Stwórz konstruktor Person z następującymi właściwościami:

Imię
Nazwisko
Wiek
Kraj
Miasto
Język
Wszystkie te właściwości powinny pochodzić z parametrów przekazanych przez użytkownika w wywołaniu konstruktora. 
Następnie dopisz metody które będą modyfikować wiek oraz miasto. 
Pamiętaj o reużywalności kodu i oszczędzaniu pamięci. Wywołaj konstruktor Person na minimum 5 różnych osobach. 
Następnie zmień im wiek oraz miasto i sprawdź jak zachowują się obiekty.
*/

function Person(Imie, Nazwisko, Wiek, Kraj, Miasto, Język) {
    this.Imie = Imie,
    this.Nazwisko = Nazwisko,
    this.Wiek = Wiek,
    this.Kraj = Kraj,
    this.Miasto = Miasto,
    this.Język = Język,
    this.Zmiana_wieku = function(x){
        this.Wiek = x;
    }
    this.Zmiana_Miasta = function(x){
        this.Miasto = x;
    }
  }

  var p1 = new Person("Jan", "Kowalski", 34, "Polska", "Warszawa", "pl");
  var p2 = new Person("Adam", "Kowal", 66, "Wielka Brytania", "Londyn", "en");
  var p3 = new Person("Mariusz", "Zamorski", 21, "USA"," Nowy Jork", "en");
  var p4 = new Person("Kamil", "Kowalski", 54, "Polska", "Wrocław", "pl");
  var p5 = new Person("Jarosław", "Kamiński", 88, "Polska"," Warszawa", "ru");

  p1.Zmiana_wieku(13);

  console.log(p1);
  console.log(p2);
  console.log(p3.Wiek);
  console.log(p4.Kraj);
  console.log(p5.Język);

  p3.Zmiana_wieku(13);

  console.log(p3.Wiek);

  /*
Stwórz konstruktor kalkulatora z czterema podstawowymi działaniami. 
Konstruktor powinien posiadać pamięć operacji oraz metody do odpowiednich działań. 
Dopisz również metodę wypisującą zawartość pamięci oraz czyszczącą zawartość pamięci kalkulatora. 
Stwóz na podstawie konstruktora minimum dwa niezależne kalkulatory.
*/

function Kalkulator() {
    var M = 0;
    this.memory = [];
    this.dodawanie = function(a,b) {
        M = a + b;
        this.memory.push('dodawanie')
        this.M = M;
        return M;
    }
    this.odejmowanie = function(a,b) {
        M = a - b;
        this.memory.push('Odejmowanie');
        this.M = M;
        return M;
    }
    this.mnozenie = function(a,b) {
        M = a * b;
        this.memory.push('mnozenie');
        this.M = M;
        return M;
    }
    this.dzielenie = function(a,b) {
        M = a / b;
        this.memory.push('dzielenie');
        this.M = M;
        return M;
    }
    this.Czysc_Pamiec = function() {
        this.M = 0;
    }
    this.Ostatnia_operacja = function(){
        return this.M;
    }
    
}

var k1 = new Kalkulator();
var k2  = new Kalkulator();

console.log(k1.dodawanie(1,2))
console.log(k2.mnozenie(10,15));
console.log(k1.M);

/*
Stwórz konstruktor z dwoma metodami. 
Jedna co sekundę ma zminiać zawartość pola typu number na losową liczbę z zakresu 1-10. 
Druga ma sprawdzać czy liczba jest większa o 5. Jeśli tak to program ma zakończyć działanie. 
Obie metody muszą być wywołane na różnych obiektach i wymianiać dane przy pomocy pola prototype.
*/

function gra(){
    var x;
    this.losowa = 0;
    this.losowanie = function(){
        x = setInterval(() => {
            this.losowa = Math.floor(Math.random() * 11);
            console.log(this.losowa);
        }, 30)
        
    }

    this.sprawdzenie = function(a){
        if(this.losowa > 5){
            clearInterval(x);
            return "xD";
        }
    }
}

var o1 = new gra();
var o2 = new gra();

o2.prototype.o1.sprawdzenie()

//nie wiem :/

console.log(o1.losowa);
o1.losowanie.prototype.o2.sprawdzenie();
console.log(o1.losowa)


//zadanie z zajęć :

function Constructor() { 
    this.number = 0;
    
    this.setNumber = function() { 
        this.number = Math.floor(Math.random() * 10);
        this.checkNumber();
    }
    
    this.checkNumber = function() { 
        console.log(this.number)
        if(this.number > 5) {
            clearInterval(myInterval);
        }     
    }
}

const newProg = new Constructor();

const myInterval = setInterval(() => {
    newProg.setNumber();
}, 1000);


//ver 2

function Constructor() { 
    this.number = 0;
    this.myInterval = undefined;
    
    this.init = function(){
        this.myInterval = setInterval(() => {
            this.setNumber()
        }, 1000);
    }
    
    this.setNumber = function() { 
        this.number = Math.floor(Math.random() * 10);
        this.checkNumber();
    }
    
    this.checkNumber = function() { 
        console.log(this.number)
        if(this.number > 5) {
            clearInterval(this.myInterval);
        }     
    }
}

const newProg = new Constructor();
newProg.init();


