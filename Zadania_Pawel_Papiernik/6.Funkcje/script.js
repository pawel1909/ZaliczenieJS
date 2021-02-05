//Napisz funkcję która wypisuje w konsoli "Udało się!"

function fun(){
    console.log("Udalo sie");
}

fun();

//Napisz funkcję która przyjmuje dowolny parametr i wyświetla go w konsoli

function fun(x){
    console.log(x);
}
var a = 12;

fun(a);

//Napisz funkcję która przyjmuje jako parametr tablicę a następnie zwraca ją.

function fun(x){
    console.log(x);
}
var a = [32, 55, "iks de"];

fun(a);

/*
Napisz funkcję która przyjmie jako argument stringa a następnie co 3 sekundy będzie go wypisywać w konsoli. 
Po 5 razach ma przestać wypisywanie i zwrócić do konsoli napiś "Koniec".
*/

function fun(a){
    var i = 0;
    let x = setInterval(() => {
        console.log(a);
        i++;
        if(i == 5){
            clearInterval(x);
            console.log("Koniec");
        }
    }, 300)

}

var a = "String";

fun(a);