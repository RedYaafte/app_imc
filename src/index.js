
// Seleccion del DOM
var h1 = document.querySelector('h1');
console.log(h1);

var input = document.querySelector('#dataInput');
input.value = 'Hola ¿Cómo estás?';
console.log(input.value);
console.log(input);

var items = document.querySelectorAll('li');
console.log(items);

// Modificar el DOM

h1.textContent = "Foooo<p>Hola</p>"; // Modifica solo el nodo de texto
h1.innerHTML = "Foooo<p>Hola</p>"; // Puede agregar HTML

// Event Listeners

var button = document.querySelector('button');

button.addEventListener('click', (evt) => {
    console.log(evt.target);
    console.log('Ouch!!!');
})