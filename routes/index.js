const express = require('express');
const router = express.Router();

const eventosController = require('../controllers/eventosController');

module.exports = function() {
     
    // Muestra todos los eventos
    router.get('/eventos',eventosController.mostrarEventos);

    // muestra un Evento en especifico por su ID
    router.get('/eventos/:idEvento',  eventosController.mostrarEvento);

    // nuevo Evento  //añadir nuevo dato
    router.post('/eventos', eventosController.nuevoEvento);    

    // Actualizar Eventos  //modificar un dato que ya existe
    router.put('/eventos', eventosController.actualizarEvento);

    // Eliminar Eventos
    router.delete('/eventos/:idEvento', eventosController.eliminarEvento);

    return router;
};
