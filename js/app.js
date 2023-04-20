/* FORMULARIO */

// función para calcular la edad
function calcularEdad() {
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    var fechaActual = new Date();
    var edad = fechaActual.getFullYear() - new Date(fechaNacimiento).getFullYear();
    document.getElementById("edad").value = edad;
  }
  
  // agregar un evento al botón de enviar para calcular la edad antes de enviar el formulario
  document.querySelector("button[type='submit']").addEventListener("click", calcularEdad);


  