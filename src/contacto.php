<?php
header('Content-Type: application/json');

// Dirección de destino
$to = "jdr2v57@gmail.com";
$subject = "Nuevo mensaje de tu portafolio";

// Solo aceptar solicitudes POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitizar entradas
    $name = htmlspecialchars(trim($_POST["name"] ?? ''));
    $email = htmlspecialchars(trim($_POST["email"] ?? ''));
    $message = htmlspecialchars(trim($_POST["message"] ?? ''));

    // Validaciones básicas
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(["message" => "Por favor, completa todos los campos."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "El correo ingresado no es válido."]);
        exit;
    }

    // Construcción del correo
    $body = "Nombre: $name\nCorreo: $email\n\nMensaje:\n$message";
    $fromEmail = "noreply@" . $_SERVER['SERVER_NAME']; // Ej: noreply@tusitio.com

    $headers = "From: $fromEmail\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Envío del correo
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(["message" => "✅ Tu mensaje fue enviado con éxito."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "❌ Hubo un error al enviar el mensaje. Intenta más tarde."]);
    }
} else {
    // Rechazar otros métodos
    http_response_code(405);
    echo json_encode(["message" => "Método no permitido."]);
}
?>
