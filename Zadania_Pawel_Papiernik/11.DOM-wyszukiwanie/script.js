//Wyszukaj na stronie wszystkie elementy o klasie list i zapisz wynik do odpowiedniej zmiennej

var listElements = document.querySelectorAll(".list");

console.log(listElements);


//Stwórz funkcję która będzie zwracać elementy(tagi) na podstawie podstawie przesłanego parametru. Wynik działania funkcji zapisz do zmiennej i wyświetl w konsoli.

let returnElements = (tag) => {
    return document.querySelectorAll(tag);
}

console.log(returnElements("body"));


//Znajdź na stronie element listy od id="list" i zapisz do odpowiedniej zmiennej.

const elem = document.getElementById('list');
console.log(elem);

/*
Napisz funkcje która będzie wypisywać w konsoli elementy przekazane w parametrze. Do funkcji przekaż następujące elementy:

wszystkie elementy li na stronie
wszystkie elementy ul na stronie
wszystkie spany na stronie
wszystkie spany znajdujące się w elemencie div z klasą list
wszystkie spany znajdujące się w elemencie div który posiada id="spans"
*/

const getElements = (selector) => {
    return document.querySelectorAll(selector);
}
const elementyLi = getElements('li');
const elementyUl = getElements('ul');
const elementySpan = getElements('span');
const elementySpan2 = getElements('div.list span');
const elementySpan3 = getElements('div#spans span');

consol.log(elementyLi, elementyUl, ele)