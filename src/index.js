
// Seleccion del DOM
// var h1 = document.querySelector('h1');
// console.log(h1);

// var input = document.querySelector('#dataInput');
// input.value = 'Hola ¿Cómo estás?';
// console.log(input.value);
// console.log(input);

// var items = document.querySelectorAll('li');
// console.log(items);

// Modificar el DOM

// h1.textContent = "Foooo<p>Hola</p>"; // Modifica solo el nodo de texto
// h1.innerHTML = "Foooo<p>Hola</p>"; // Puede agregar HTML

// Event Listeners

// var button = document.querySelector('button');

// button.addEventListener('click', (evt) => {
//     console.log(evt.target);
//     console.log('Ouch!!!');
// })


// Ejercicio.
// Registrar peso y altura a travez de inputs.

// Un boton que al dar click tome valor de peso y altura
// y calcule imc.

// lo debe de guardar en un arreglo y mostrarlo al final del documento.

// id
var inputPeso = document.querySelector('#dataPeso');
var inputAltura = document.querySelector('#dataAltura');
var resultado = document.querySelector('#resultado');
// Fecha actual
var d = new Date();
var date = d.toDateString();
// button
var button = document.querySelector('button');


button.addEventListener('click', () => {
    var intPeso = inputPeso.value;
    var intAltura = inputAltura.value;
    var result2 = intPeso / intAltura **2;
    var result = result2.toFixed(2);

    var functionArray = new function () {
      return {
        peso: intPeso,
        altura: intAltura,
        imc: result,
        fecha: date
      }
    }

    // sessionStorage.setItem('datos', JSON.stringify(functionArray))
    // var guardados = [sessionStorage.getItem('datos')]

    var guardados = [functionArray]

    // console.log(guardados);
    resultado.innerHTML = JSON.stringify(guardados)
    console.log(guardados);

    // Canvas
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: ['martes', 'miercoles', 'jueves'],
        datasets: [{
          label: "Tu Indice de Masa Corporal",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [1, 5, 10],
        }]
      },

      // Configuration options go here
      options: {}
    });


})
