/*
Wypisz w konsoli:

Rodzica elementu id="buz"
Brata elementu id="baz"
Dzieci elementu id="foo"
rodzica elementu id"foo"
pierwsze dziecko elementu id="foo"
środkowe dziecko elementu id="foo"
*/

const buz = document.getElementById('buz').parentNode;
console.log(buz);


const brotherBaz = document.getElementById('baz').previousElementSibling;
console.log(brotherBaz);


const childrenOfFoo = document.getElementById('foo').children;
console.log(childrenOfFoo);


const parentOfFoo = document.getElementById('foo').parentNode;
console.log(parentOfFoo);


const firstChildOfFoo = document.getElementById('foo').firstElementChild;
console.log(firstChildOfFoo);


const middleChildOfFoo = document.getElementById('foo').children;
console.log(middleChildOfFoo[Math.floor(middleChildOfFoo.length / 2)]);

//Napisz funkcję która przyjmie jako parametr element id="ex2". Następnie doda nasłuchiwanie eventu click na tym elemencie. Jeśli czerwony kwadrat zostanie kliknięty pobierz tekst z wewnętrzego diva tego elementu i wyświetl go w konsoli.


function getTextOfRedSquare(id) {
    const result = document.getElementById(id);
    result.addEventListener('click', function() {
        const text = result.textContent;
        console.log(text);
    }, false);
}
getTextOfRedSquare('ex2');

//Napisz funkcję która doda na każdym buttonie w div id="ex3" ten sam event kliknięcia. Zadaniem eventu będzie odsłanianie lub ukrywanie elementu span obok buttona.


//Dodaj event na buttony z zadania 3 tak aby po kliknięciu na dowolny z nich ich rodzic zmieniał kolor na dowolny. Całość zapisz w funkcji. Losowy kolor: var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);


function createClickEventsForButtons() {
    const ex3 = document.getElementById('ex3');
    const buttons = ex3.getElementsByTagName('button');
    const spans = ex3.getElementsByTagName('span');
    const flags = [];

    function toggleSpan(i) {
        if(flags[i]) {
            flags[i] = false;
            spans[i].style.display = 'none';

        } else {
            flags[i] = true;
            spans[i].style.display = 'block';
        }
        
    }

    for(let i=0; i<buttons.length; i++) {
        flags.push(false);
        buttons[i].addEventListener('click', function() {
            let parentButtonNode = buttons[i].parentNode;
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            parentButtonNode.style.backgroundColor = randomColor;
            
            toggleSpan(i);
        }, false);
    }

}
createClickEventsForButtons();

/*
W div id="ex5" znajdują się trzy prostokąty. Po najechaniu na dowolny z nich elementy na liście powinny zmienić swój background-color na taki jak prostokąt ale według poniższych punktów:

Tylko pierwszy element listy
tylko ostatni element listy
Parzyste elementy listy
Wszystkie elementy listy
Żaden z elementów - tylko cała lista
*/

function changeBCForFirstChild(selector) {
    const ex5 = document.getElementById('ex5');
    const rectangles = ex5.children;

    function onMouseMove(selector, backgroundColor) {
        const liElements = document.querySelectorAll(selector);
        for(let i=0; i<liElements.length; i++) {
            liElements[i].style.backgroundColor = backgroundColor;
        }
    }

    for(let i=0; i<rectangles.length; i++) {
        rectangles[i].addEventListener('mouseover', function() {
            let backgroundColor = rectangles[i].style.backgroundColor;
            onMouseMove(selector, backgroundColor);
        }, false);
        rectangles[i].addEventListener('mouseout', function() {
            onMouseMove(selector, 'white');
        }, false);
    }

}

changeBCForFirstChild('#ex5 > ul > li:first-child');


changeBCForFirstChild('#ex5 > ul > li:last-child');


changeBCForFirstChild('#ex5 > ul > li:nth-child(even)');


changeBCForFirstChild('#ex5 > ul > li');


changeBCForFirstChild('#ex5 > ul');

/*
W div id="ex6" zaczynając od tego diva znajdź i zapisz do zmiennych następujące kombinacje:

pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko
pierwsze dziecko -> rodzic -> pierwsze dziecko -> pierwsze dziecko -> brat -> rodzic
rodzic -> pierwsze dziecko -> rodzic -> drugie dziecko -> pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko
*/

const result1 = document.querySelectorAll('#ex6 > div:first-child > div:first-child > div:first-child');


const firstChildEx6 = document.querySelector('#ex6 > div:first-child');
const firstParentEx6 = firstChildEx6.closest('div');
const twoNextChildrenEx6 = firstParentEx6.querySelector('div:first-child > div:first-child');
const siblingNextEx6 = twoNextChildrenEx6.nextElementSibling;
const result2 = siblingNextEx6.parentNode;


const ex6 = document.querySelector('#ex6');
const bodyEx6 = ex6.parentNode;
const divFoo = bodyEx6.querySelector('div:first-child');
const parentDivFoo = divFoo.parentNode;
const result3 = parentDivFoo.querySelector('div:nth-child(2) > div:first-child > div:first-child > div:first-child');