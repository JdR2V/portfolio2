<?php
// Configuración de conexión
$host = 'localhost'; // o 127.0.0.1
$db   = 'tuusuario_formulario_contacto'; // Reemplaza con el nombre real de tu base
$user = 'tuusuario_usuario_form'; // Reemplaza con el usuario real
$pass = 'TU_CONTRASEÑA_SEGURA'; // Reemplaza con tu contraseña
$charset = 'utf8mb4';

// Intentar conectar a la base de datos
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

header('Content-Type: application/json');

try {
    $pdo = new PDO($dsn, $user, $pass, $options);

    // Obtener datos del formulario
    $nombre  = $_POST['nombre'] ?? '';
    $correo  = $_POST['correo'] ?? '';
    $mensaje = $_POST['mensaje'] ?? '';

    if ($nombre && $correo && $mensaje) {
        // Insertar en la base de datos
        $stmt = $pdo->prepare('INSERT INTO mensajes (nombre, correo, mensaje) VALUES (?, ?, ?)');
        $stmt->execute([$nombre, $correo, $mensaje]);

        echo json_encode(['success' => true, 'message' => 'Mensaje guardado correctamente.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Faltan campos obligatorios.']);
    }

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error de conexión: ' . $e->getMessage()]);
}
