/**
 * Este modulo define las rutas del servidor utilizando Express.
 * Se trata de una REST API para enviar y recibir datos en formato JSON.
 */

const express = require('express');
const router = express.Router();

/**
 * Manejador de ruta para la ruta raiz ("/").
 * Este manejador responderá con un mensaje JSON indicando que la API REST está funcionando.
 */
router.get('/', (req, res) => {
    res.json({
        status: 'API REST funcionando'
    });
});

// Exportamos el router para poder utilizarlo en otros archivos
module.exports = router;