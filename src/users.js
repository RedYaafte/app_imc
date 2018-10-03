// Tarea poner el error de await
// Cada uno de los usuarios sea un link y cuando le den click lleve a detail.html

// http://localhost:8080/detail.html?user_id=1x
// http://localhost:3000/imc?user_id=1x

// Cache de DOM
var firstName = document.querySelector('#firstName');
var lastName = document.querySelector('#lastName');
var birthDate = document.querySelector('#birthDate');
var lista = document.querySelector('#lista');
var button= document.querySelector('button');
var data = [];
// var yearData = [];
// var imcData = {};

var init = () => {
  fetch("http://localhost:3000/users")
    .then((users) => users.json())
    .then((jsonData) => {
      data = jsonData;
      render();
    })
}


// init
  // tiene que hacer parsing del querystring
  // Para obtener el id del usuarios

  // Hacer peticion de datos de usuario:
  // http://localhost:3000/users/[id:number]

  // Hacer peticion de datos de imc's
  // http://localhost:3000/imc?user_id=[id:number]

processForm = () => {
  return {
    first_name: firstName.value,
    last_name: lastName.value
    // cumpleanos: JSON.stringify(birthDate.value)
  }
}

render = () => {
    lista.innerHtml = '';
    data.forEach((user) => {
      let item = document.createElement('a');
      let itemText = document.createTextNode(`${user.first_name} ${user.last_name}`);
      item.setAttribute('href', `http://localhost:3000/imc?user_id=${user.id}`);
      item.appendChild(itemText);
      lista.appendChild(item);
    })
}

var createUser = () => {
  fetch("http://localhost:3000/users", {
    method: 'POST',
    body: JSON.stringify(processForm()),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      init();
    }
  })
  .catch(e => console.log(e))
}

button.addEventListener('click', (evt) => {
  // data.push(processForm());
  createUser();
  render();
})

init();



// grafica chart.js

// processYear = () => {
//   return {
//     ano: JSON.stringify(birthDate.value)
//   }
// }
//
// var ctx = document.getElementById('myChart').getContext('2d');
// grafica = () => {
//     yearData.forEach((persona) => {
//       var myBirthDate = new Date(persona.ano)
//       var myYear = myBirthDate.getFullYear();
//       var abc = ["1800", "1850"];
//       console.log(myYear);
//
//       abc.push(myYear);
//       console.log(abc);
//
//       var chart = new Chart(ctx, {
//         // The type of chart we want to create
//         type: 'line',
//
//         // The data for our dataset
//         data: {
//           labels: ["January", "February", "March", "April", "May", "June", "July"],
//           datasets: [{
//             label: "My First dataset",
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: abc,
//           }]
//         },
//
//         // Configuration options go here
//         options: {}
//       });
//     })
// }
