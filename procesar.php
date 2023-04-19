<?php

if(isset($_POST['submit'])) {
    // Recopilar los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $ingreso = $_POST['ingreso'];
    $edad = calcular_edad($fecha_nacimiento);
    $genero = $_POST['genero'];
    $grado_academico = implode(", ", $_POST['grado_academico']);

    // Configurar el correo electrónico
    $to = "Ronaldocl9lda@gmail.com";
    $subject = "Nuevo registro";
    $message = "Detalles del registro:\n\nNombre: $nombre\nEmail: $email\nFecha de nacimiento: $fecha_nacimiento\nEdad: $edad\nRango de ingreso: $ingreso\nGénero: $genero\nGrado académico: $grado_academico";
    $headers = "From: $email";

    // Enviar el correo electrónico
    if(mail($to, $subject, $message, $headers)) {
        // Correo enviado con éxito
        echo "<script>alert('El correo se envió con éxito');</script>";
    } else {
        // Error al enviar el correo electrónico
        echo "<script>alert('Hubo un error al enviar el correo');</script>";
    }
}

// Función para calcular la edad a partir de una fecha de nacimiento
function calcular_edad($fecha_nacimiento) {
    $fecha_actual = date("Y-m-d");
    $edad = date_diff(date_create($fecha_nacimiento), date_create($fecha_actual));
    return $edad->format("%y");
}

?>