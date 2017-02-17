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
console.log('Pole trójkąta o podstawie a: ' + sideA + ' i wysokości h: ' + sideH + ' wynosi: ' + triangleArea);

// TASK 8.5

var a = 2, b = 4;
var value = (a*a) + (2 * a * b) - (b*b);
console.log('Wynik działania wynosi: ' + value);

if (value > 0) {
  console.log('Wynik działania jest dodatni')
}

else if (value < 0) {
  console.log('Wynik działania jest ujemny')
}

else {
  alert('Wynik jest równy: ' + value);
  console.log('Wynik działania jest równy "0" ')
}