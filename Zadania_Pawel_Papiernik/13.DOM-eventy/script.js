/*
Stwórz następujące eventy i sprawdź co udostępnia ich obiekt event:

Kliknięcie w przycisk o id="test-event"
Ruch myszką na ekranie
Najechanie myszką na przycisk o id="test-event"
naciśnięcie klawisza na klawiaturze
scrollowanie strony w dół i w górę
zmianę tekstu w input id="input-test"
*/

function startEvents() {
    
    const testEventButton = document.getElementById('test-event');
    testEventButton.addEventListener('click', function(event) {
        console.log(event);
    }, false);

    
    window.addEventListener('mousemove', function(event) {
        console.log(event);
    }, false);

    
    testEventButton.addEventListener('mousemove', function(event) {
        console.log(event);
    }, false);

    
    window.addEventListener('keydown', function(event) {
        console.log(event);
    }, false);

    
    window.addEventListener('scroll', function(event) {
        console.log(event);
    }, false);

    
    const input = document.getElementById('input-test');
    input.addEventListener('change', function(event) {
        console.log(event);
    });
}

//Napisz funkcję która po kliknięciu na button id="ex2" pobierze tekst z jego data atrybutu a następnie wpisze ten tekst do spanu który jest poniżej.

function onClickButtonEx2() {
    const button = document.getElementById('ex2');
    button.addEventListener('click', function(event) {
        const data = button.getAttribute('data-text');
        const span = document.getElementById('span-ex2');
        span.textContent = data;
    }, false);
}

//Napisz funkcję która po najechaniu na czerwony kwadrat zmieniu jego kolor na niebieski. Następnie po zjechaniu myszki z obszaru kwadratu zmieni się z powrotem na czerwony.

function changeSquareBackgroundColor() {
    const square = document.getElementById('ex3');
    square.addEventListener('mouseover', function() {
        square.style.backgroundColor = 'blue';
    }, false);
    square.addEventListener('mouseout', function() {
        square.style.backgroundColor = 'red';
    }, false);
}

//Napisz funkcję walidacyjną dla input id="input-test". Funkcja ma za zadanie sprawdzać co jest wpisane w inputa. Jeśli user wpisze jakąś cyfrę pokaż mu komunikat błędu pod inputem informujący że nie może wpisywać cyfr.

function validateInput() {
    const regexp = /\d+/g;
    const input = document.getElementById('input-test');
    const span = document.getElementById('ex3-err');
    input.addEventListener('change', function(event) {
        if(regexp.test(input.value)) {
            span.textContent = 'You can not input numbers!';
        }else {
            span.textContent = '';
        }
    });
}

//Napisz funkcję countera. Funkcja ma za zadanie wpisywać do spanu w divie id="ex5" numerka odpowiadającego ilości kliknięć w button id="ex5-button". Jeśli licznik dojdzie do 10 event powinien być usunięty.

function countClicks() {
    let counter = 0;
    const span = document.getElementById('span-ex2');
    const button = document.getElementById('ex2');

    let handler = function() {
        counter++;
        span.textContent = counter;
        if(counter === 11) {
            span.textContent = '';
            this.removeEventListener('click', handler);
        }
    }
    button.addEventListener('click', handler);
}

//Napisz funkcję która będzie obserwowac scroll strony. Jeśli scroll zjedzie poniżej 200px zmień kolor strony na czerwony. Jeśli będzie powyżej 200px niech zmieni kolor na biały.

function controlScroll() {
    window.addEventListener('scroll', function() {
        let scrollValue = this.scrollY;
        if(scrollValue > 200) {
            window.document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
        } else {
            window.document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
        }
    }, false);
}

//Napisz obsługę kalkulatora. Dodaj odpowiednie eventy do przycisków. Wynik wyświetlaj w inpucie. Staraj się aby funkcje były reużywalne.

function calculator() {
    const buttons = document.querySelectorAll('#calculator > div:nth-child(4) > button');
    const input = document.querySelector('#calculator > input:first-child');

    for(let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(i + 1 === 10) {
                input.value += 0;
            } else {
                input.value += i + 1;
            }
            
        }, false);
    }
    const specialButtons = document.querySelectorAll('#calculator > div:nth-child(5) > button')

    for(let i=0; i<specialButtons.length; i++) {
        specialButtons[i].addEventListener('click', function() {
            if(specialButtons[i].textContent.includes('+')) {
                input.value += '+';
            } else if(specialButtons[i].textContent.includes('-')) {
                input.value += '-';
            } else if(specialButtons[i].textContent.includes('*')) {
                input.value += '*';
            } else {
                input.value += '/';
            }
        }, false);
    }
    const regexp = /-?\d+[+-/*]{1}-?\d+/g;
    let result = 0;
    input.addEventListener('blur', function() {
        if(regexp.test(input.value)) {
            if(input.value.includes('+')) {
                result = split('+', input);
            } else if(input.value.includes('/')) {
                result = split('/', input);
            } else if(input.value.includes('*')) {
                result = split('*', input);
            } else if(input.value.includes('-')) {
                result = split('-', input);
            }
            input.value = result;
        } else {
            console.log('Nieprawidłowa komenda');
        }
    })
}

function split(operator, input) {
    let splitInputValue = [];
    let count = 0;
    if(operator === '-') {
        count = 0;
        for(let i=0; i<input.value.length; i++) {
            if(input.value.charAt(i) === '-') count++;
        }

        if(count > 1) {
            splitInputValue = input.value.split(operator).slice(count - 1);
        } else {
            splitInputValue = input.value.split(operator);
        }
    } else {
        splitInputValue = input.value.split(operator);
    }
    let result = 0;
    if(input.value.includes('+')) {
        result = Number(splitInputValue[0]) + Number(splitInputValue[1]);
    } else if(input.value.includes('/')) {
        if(splitInputValue[1] === 0) {
            console.log('Nie wolbo dzielić przez zero');
            return;
        }
        result = splitInputValue[0] / splitInputValue[1];
    } else if(input.value.includes('*')) {
        result = splitInputValue[0] * splitInputValue[1];
    } else if(input.value.includes('-')) {
        if(count === 2) {
            splitInputValue[0] = -Math.abs(splitInputValue[0]);
        }
        result = splitInputValue[0] - splitInputValue[1];
    }
    return result;
}