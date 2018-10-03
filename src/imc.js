
// Cache del DOM
var button = document.querySelector('button');
var inputPeso = document.querySelector('#peso');
var inputAltura = document.querySelector('#altura');
var content = document.querySelector('#content');
var data = [];

// Declara functionalidad

var init = () => {
    var paramsString = location.search //JSON.stringify(location.search)
    var searchParams = new URLSearchParams(paramsString);
    var paramsId = searchParams.get("user_id")
    console.log(paramsId);

    fetch(`http://localhost:3000/imc?user_id=${paramsId}`)
        .then((users) => users.json())
        .then((jsonData) => {
            data = jsonData;
            render();
        })
}

processForm = () => {
    // Regresar objecto con los datos
    return {
        weight: inputPeso.value,
        height: inputAltura.value,
        // fecha: new Date(),
        imc: inputPeso.value / inputAltura.value**2
    }
}

render = () => {
    content.innerHtml = '';
    data.forEach((user) => {
      let item = document.createElement('li');
      let itemText = document.createTextNode(
          `peso: ${user.weight} altura: ${user.height} imc: ${user.imc}`);
      item.appendChild(itemText);
      content.appendChild(item);
    })
}

// Event Handling

button.addEventListener('click', () => {
    data.push(processForm());
    render(data);
})

init();
