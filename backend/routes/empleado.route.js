/**
 * Este modulo define las rutas del servidor utilizando Express.
 * Se trata de una REST API para enviar y recibir datos en formato JSON.
 */

const express      = require('express');
const router       = express.Router();
const empleadoCtrl = require('../controllers/empleado.controller');

/**
 * Manejador de ruta para la ruta raiz ("/").
 * Este manejador responderá con un mensaje JSON indicando que la API REST está funcionando.
 */
router.get('/', empleadoCtrl.getEmpleados);
router.post('/', empleadoCtrl.createEmpleados);

// Exportamos el router para poder utilizarlo en otros archivos
module.exports = router;