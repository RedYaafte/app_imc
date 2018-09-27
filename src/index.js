
// Cache del DOM

var button = document.querySelector('button');
var inputPeso = document.querySelector('#peso');
var inputAltura = document.querySelector('#altura');
var content = document.querySelector('#content');
var data = [];

// Declara functionalidad

processForm = () => {
    // Regresar objecto con los datos
    return {
        peso: inputPeso.value,
        altura: inputAltura.value,
        fecha: new Date(),
        imc: inputPeso.value / inputAltura.value**2
    }
}

render = (data) => {
    content.textContent = JSON.stringify(data);
}

// Event Handling

button.addEventListener('click', () => {
    data.push(processForm());
    render(data);
})

