//Stwórz funkcję do której przekażesz jako parametr listę elementów o klasie more-divs. Następnie zwróć z tej funkcji tablicę tagów utworzoną na podstawie przekazanego parametru. Wynik wyświetl w konsoli.

const moreDivs = document.querySelectorAll('#myDiv > .more-divs');

function returnMoreDivs(moreDivs) {
    const result = [];
    moreDivs.forEach(element => {
        result.push(element);
    });
    return result;
}
const returnedMoreDivs = returnMoreDivs(moreDivs);
console.log(returnedMoreDivs);

/*
Stwórz funkcję i przekaż do niej jako parametr element short-list. Następnie wyświetlw konsoli:

Kod html wewnętrzny
kod html zewnętrzy
listę klass elementu w postaci stringu
listę klass elementu w postaci tablicy
obiekt dataset
*/

const shortList = document.querySelector('ul.short-list');
function exercises2(element) {
    console.log(element.innerHTML);
    console.log(element.outerHTML);

    const array = element.classList;
    let classesString = "";
    array.forEach(item => {
        classesString += item;
    });

    console.log(classesString);
    console.log(element.classList);
    console.log(element.dataset);
}

//Stwórz funkcję która zwracać będzie wynik dodawania oraz odejmowania liczb pobranych z przekazanych parametrów. Liczby te muszą pochodzić z atrybutów data elementu o id datasetCheck

function computeNumbers(num1, num2, num3) {
    let add = num1 + num2 + num3;
    let sub = num1 - num2 - num3;
    return add - sub;
}
let computedNumbersResult = computeNumbers(num1, num2, num3);

//Zmień tekst w elemencie o id spanText na dowolny

document.querySelector('#spanText').textContent = 'iks de';

//Zmień klasę elementowi o id spanText na dowolną

document.querySelector('#spanText').classList.add('my-class');

//Napisz funkcję która przyjmie jako parametr listę klass elementu o id classes. Następnie funkcja powinna wypisać w konsoli pojedynczo wszystkie klasy a na końcu wyświetlić string z połączonych klass znakiem '+'. Następnie usuń wszystkie klasy temu elementowi i wypisz w konsoli tekst: "Usunięto wszystkie klasy".

const classes = document.querySelector('#classes');
function processClasses(classes) {
    let list = classes.classList;
    let classesStringWithPlus = "";
    for(let i=0; i<list.length; i++) {
        console.log(list[i]);
        if(i === list.length - 1) {
            classesStringWithPlus += list[i];
            break;
        }
        classesStringWithPlus += list[i] + "+";
    }
    console.log(classesStringWithPlus);

    classes.className = '';
    console.log('Usunięto wszystkie klasy');
}
processClasses(classes);

//Znajdź wszystkie elementy li w elemencie longList. Przekaż te elementy do funkcji której zadaniem będzie dodanie każdemu elementowi li atrybutu data-text="text" ale tylko tym elementom w których taki data atrybut nie istnieje.

const liLongList = document.querySelectorAll('#longList > li');
function addAttributes(liLongList) {
    liLongList.forEach(element => {
        if(!element.hasAttribute('data-text')) {
            element.setAttribute('data-text', 'text');
        }
    });
}
addAttributes(liLongList);

/*
Napisz funkcję która będzie przyjmować parametr typu string. Następnie string ten zapisz w postaci obiektu:

{ newClass: 'string_z_parametru' }

Obiekt ten przekaż do drugiej funkcji w której odczytasz string z obiektu i przypisz go do zmiennej. Następnie ustaw taką klasę elementowi o id myDiv.
*/

function createClass(str) {
    return { newClass: str };
}
const newObject = createClass('new_class');

function readObject(object) {
    const valueObject = object.newClass;
    document.querySelector('#myDiv').classList.add(valueObject);
}
readObject(newObject);

//Napisz funkcję która będzie dodawać odpowiednią klasę do elementu o id "numbers" w zależności od przekazanego parametru. Parametr powinien być losową liczbą z zakresu 0-10. Jeśli liczba będzie parzysta ustaw klasę 'even' jak nieparzysta 'odd;

let randomNumber = Math.floor(Math.random() * (11 - 0));
function setClass(randomNumber) {
    const numbers = document.querySelector('#numbers');
    if(randomNumber % 2 == 0) {
        numbers.classList.add('even');
    } else {
        numbers.classList.add('odd');
    }
}
setClass(randomNumber);

//Napisz funkcję do której przekaż element o id "longList". Następnie zwróć tablicę wypełnioną wartościami pobranymi z elementów ten listy.

const longList = document.querySelector('#longList');
function returnLiElementsValues(longList) {
    const liLongList = longList.querySelectorAll('li');
    const result = [];
    liLongList.forEach(element => {
        result.push(element.textContent);
    });
    return result;
}
const values = returnLiElementsValues(longList);

//Napisz funkcję do której przekażesz listę dzieci elementu o id longList. Następnie zamień wszystkie wartości tych elementów na losowe liczby z zakresu 0-10 jednocześnie przechowując starą wartość w data atrybucie.

const liLongListElements = document.querySelectorAll('#longList > li');
function changeValuesAndAttributes(liLongListElements) {
    liLongListElements.forEach(element => {
        let randomNumber = Math.floor(Math.random() * (11 - 0));

        element.setAttribute('data', element.textContent);
        element.textContent = randomNumber;
    });
}
changeValuesAndAttributes(liLongListElements);