//Stwórz obiekt car i dopisz do niego różne właściwości. Wypisz właściwości w konsoli.

var car = {
    color : "Żółty",
    type : "Sedan",
    driver : "Chorąży",
    status : "Rozbity"
}

console.log(car.color);
console.log(car.driver);

/*
Na podstawie obiektu z zadania 1 dopisz do niego metodę zmieniającą jego dowolną właściwość na 
podstawie parametru przekazanego z wywołania metody.
*/

var car = {
    color : "Żółty",
    type : "Sedan",
    driver : "Chorąży",
    status : "Rozbity",
    naprawa: function(x) {
        if(x === "TAK"){
            this.status = "Cały"
        }
    }
};

car.naprawa("TAK");

console.log(car.status);


/*
Stwórz obiekt z metodą sumującą wszystkie liczby z tablicy podanej w parametrze w wywołaniu tej metody. 
Następnie metoda ta powinna zapisywać wynik we właściwości sum tego obiektu. 
Na koniec wypisz właściwość sum w konsoli.
*/

var obiekt = {
    suma : 0,
    sum : function(t) {
        var x = t.length;
        var y = 0;
        for(var i = 0; i< x; i++){
            y += t[i];
        }
        this.suma = y;
    }
}

var t = [1, 2, 3, 4, 5];

obiekt.sum(t);

console.log(obiekt.suma)

/*
Stwórz obiekt car. Następnie wypisz w konsoli informacje na jego temat na podany poniżej wzór:

name: BMW age: 12 ...

Czyli pary klucz wartość.
*/

var car = {
    name : "BMW",
    age : 12,
    color : "Grey"
}


for(let key in car){
    console.log(key + " : " + car[key]);
}




/*
Stwórz dowolny obiek w obiekcie car. Następnie wypisz w konsoli jego właściwości.

*/

var car = {
    name : "BMW",
    age : 12
}

car.newColors = {
    color1 : "brazowy"
}

console.log(car.newColors.color1);


/*
Do obiektu car dodaj dowolną właściwość oraz metodę wypisującą w konsoli napis "Hello". 
Zrób to poza ciałem obiektu.
*/

var car = {
    name : "BMW",
    age : 12
}

car.color = "Zielony";
car.Dni_od_ostatniego_przeglądu = 690;
car.otwieranie = function() {
    console.log("Hello");
}
console.log(car.color);
console.log(car.Dni_od_ostatniego_przeglądu);
car.otwieranie();
