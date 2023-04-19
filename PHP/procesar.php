<?php
// obtener los datos del formulario
$email = $_POST["email"];
$nombre = $_POST["nombre"];
$fecha_nacimiento = $_POST["fecha_nacimiento"];
$rango_ingreso = $_POST["rango_ingreso"];
$edad = $_POST["edad"];
$genero = $_POST["genero"];
$grado_academico = implode(", ", $_POST["grado_academico"]);

// construir el mensaje del correo electrónico
$mensaje = "Email: $email\n";
$mensaje .= "Nombre: $nombre\n";
$mensaje .= "Fecha de nacimiento: $fecha_nacimiento\n";
$mensaje .= "Rango de ingreso: $rango_ingreso\n";
$mensaje .= "Edad: $edad\n";
$mensaje .= "Género: $genero\n";
$mensaje .= "Grado académico: $grado_academico\n";

// enviar el correo electrónico
$to = "Ronaldocl9lda@gmail.com";
$subject = "Formulario de registro";
$headers = "From: $email";
mail($to, $subject, $mensaje, $headers);

// redirigir al usuario a una página de confirmación
header("Location: contactanos.html");
?>