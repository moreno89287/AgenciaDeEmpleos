function enviarFormulario() {
    // Generar número de folio aleatorio
    const folio = Math.floor(Math.random() * 1000000) + 1;
    // Obtener los valores de los campos de formulario
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var curriculum = document.getElementById("curriculum").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    var empleo = document.getElementById("empleo").value;
    var experiencia = document.getElementById("experiencia").value;
    
    // Validar que se hayan ingresado todos los campos requeridos
    if (nombre == "" || apellidos == "" || email == "" || experiencia == "") {
      alert("Por favor ingrese todos los campos requeridos.");
      return false;
    }
    
    // Construir mensaje de confirmación
    const mensaje = `¡Gracias por enviar tu solicitud de empleo a ExpoArt!\n\n
    Tu número de folio es: ${folio}.\n\n
    Nos pondremos en contacto contigo a la brevedad para continuar con el proceso de selección.\n\n
    ¡Que tengas un excelente día!`;

    // Mostrar mensaje de confirmación en una ventana de alerta
    alert(mensaje);
    // Crear una nueva ventana con la información del formulario
    
    var nuevaVentana = window.open("", "Información de Solicitud de Empleo", "width=600,height=400");
    nuevaVentana.document.write("<h1>Información de Solicitud de Empleo</h1>");
    nuevaVentana.document.write("<p><strong>Folio:</strong> " + folio  + "</p>");
    nuevaVentana.document.write("<p><strong>Nombre:</strong> " + nombre + " " + apellidos + "</p>");
    nuevaVentana.document.write("<p><strong>Correo electrónico:</strong> " + email + "</p>");
    nuevaVentana.document.write("<p><strong>Teléfono:</strong> " + telefono + "</p>");
    nuevaVentana.document.write("<p><strong>Curriculum Vitae:</strong> " + curriculum + "</p>");
    nuevaVentana.document.write("<p><strong>Fecha de Cita:</strong> " + fecha + "</p>");
    nuevaVentana.document.write("<p><strong>Hora de Cita:</strong> " + hora + "</p>");
    nuevaVentana.document.write("<p><strong>Empleo solicitado:</strong> " + empleo + "</p>");
    nuevaVentana.document.write("<p><strong>Experiencia:</strong></p>");
    nuevaVentana.document.write("<p>" + experiencia + "</p>");
    
    // Cerrar la ventana actual
    window.close();
  }
  