

// Guardar datos de usuario en un array

/*
    User

    {
        firstName: 'string',
        lastName: 'string',
        birthDate: Date
    }
*/

// Cache DOM

// Funciones necesarias.
// e.g.
// processForm
// render

// Registro de eventos


// Cache de DOM
var firstName = document.querySelector('#firstName');
var lastName = document.querySelector('#lastName');
var birthDate = document.querySelector('#birthDate');
var lista = document.querySelector('#lista');
var button= document.querySelector('button');
var data = [];
var yearData = [];

processForm = () => {
  return {
    nombre: firstName.value,
    apellido: lastName.value,
    cumpleanos: JSON.stringify(birthDate.value)
  }
}

render = () => {
    lista.innerHtml = '';
    data.forEach((user) => {
      let item = document.createElement('li');
      let itemText = document.createTextNode(`${user.nombre} ${user.apellido} ${new Date(user.cumpleanos)}`);
      item.appendChild(itemText);
      lista.appendChild(item);
    })
}


processYear = () => {
  return {
    ano: JSON.stringify(birthDate.value)
  }
}

var ctx = document.getElementById('myChart').getContext('2d');
grafica = () => {
    yearData.forEach((persona) => {
      var myBirthDate = new Date(persona.ano)
      var myYear = myBirthDate.getFullYear();
      var abc = ["1800", "1850"];
      console.log(myYear);



      abc.push(myYear);
      console.log(abc);

      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: abc,
          }]
        },

        // Configuration options go here
        options: {}
      });
    })
}


button.addEventListener('click', (evt) => {
  data.push(processForm());
  render();
  // grafica();
  yearData.push(processYear());
  grafica();
  console.log(yearData);
})

//
// investigar diferencias
// var
// let
//
// tarea
//
// chart.js
// lodash
