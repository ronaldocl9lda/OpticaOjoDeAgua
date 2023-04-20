<?php

    $destino = "Ronaldocl9lda@gmail.com";
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $fechaNacimiento = $_POST["fecha_nacimiento"];
    $genero = $_POST["genero"];
    $contenido = "Nombre: " . $nombre . "\nEmail: " . $email . "\nFecha de Nacimiento " . $fechaNacimiento . "\nGénero: " . $genero;

    mail($destino, "Consulta Optica Ojo de Agua", $contenido);
    header("Location:index.html");
?>