//Alerta para menores de edad:
let edad = prompt("La venta de alcohol está prohibida a menores de 18 años. Por favor ingrese su edad:");

//Condicional para la edad:
if (edad >= 18) {
    alert("¡Bienvenido!");
} else {
    alert("Debes ser mayor de 18 años para acceder al sitio.");
}

// Función JS, cambiar el color del fondo según la hora:
document.addEventListener("DOMContentLoaded", function () {
    cambiarColorFondoSegunHora();
});

function cambiarColorFondoSegunHora() {
    let horaActual = new Date().getHours();
    let cuerpo = document.body;

    //Condicional para la hora:
    if (horaActual >= 6 && horaActual < 12) {
        cuerpo.style.backgroundColor = 'lightblue';
    } else if (horaActual >= 12 && horaActual < 18) {
        cuerpo.style.backgroundColor = 'white';
    } else {
        cuerpo.style.backgroundColor = 'lightgrey';
    }
}

//Validación del formulario (utilizando formsubmit.com como vimos en clase):
let botonEnviar = document.getElementById('Enviar');

// Añade un evento de clic al botón de enviar
botonEnviar.addEventListener('click', function () {
    validarFormulario();
});

function validarFormulario() {
    let nombre = document.getElementsByName('Nombre')[0].value;

    if (nombre.trim() === '') {
        alert('Por favor, completa el campo de nombre.');
    } else {
        // Aquí deberías realizar el envío del formulario a formsubmit.com o tu servicio elegido
        alert('Formulario válido. ¡Enviar datos!');
    }
}