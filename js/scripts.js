// plik scripts.js

var name = prompt('Wpisz swoje imię');  //funkcja prompt powoduje wyskakiwania okna z opcją przypisania 'zmiennej' konkretnej wartości, w tym wypadku imienia
/* alert('Witaj, ' + name); */                //funkcja alert rowniez powoduje wysk. okienka, ale bez opcji wpisywania czegokolwiek
console.log('Witaj, ' + name);          //funkcja wyswietlania w consoli

var points = 1;

// TASK 8.4
var sideA = prompt('Podaj wysokość boku a');
var sideH = prompt('Podaj szerokość boku h');
var triangleArea = sideA*sideH/2;

alert('Pole trójkąta wynosi: ' + triangleArea);              
console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);