// Campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');


// Interfaz de Usuario
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

class Citas {
    constructor() {
        this.citas = [];
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita];

        console.log(this.citas);
    }
}

class UI {
    imprimirAlerta(mensaje, tipo) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        // Agregar clase en base al tipo de error
        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'))

        // Quitar la alerta despues de 4 segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 4000);
    }
}

const administrarCitas = new Citas();
const ui = new UI();


// Registro de Eventos
eventListener();
function eventListener() {
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);
    formulario.addEventListener('submit', nuevaCita);
}

// Objeto con Información de la Cita
const citaObj = {
    mascota: '',
    propietario: '',    
    telefono: '',    
    fecha: '',    
    hora: '',    
    sintomas: '',    
}

// Función para agregar datos al objeto de la cita
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;

    console.log(citaObj);
}

// Valida y Agrega una nueva cita a la Clase Citas.
function nuevaCita(e) {
    e.preventDefault();
    
    // Extraer información del objeto citaObj
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    // Validar
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');

        return;
    }

    // Generar un ID único
    citaObj.id = Date.now();

    // Creando nueva Cita
    administrarCitas.agregarCita({...citaObj});

    // Reinciar el objeto para validación
    reiniciarObjeto();

    // Resetear formulario
    formulario.reset();
}



// Reiniciar Objeto citaObj
function reiniciarObjeto() {
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}












