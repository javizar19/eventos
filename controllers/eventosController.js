const Eventos = require('../models/Eventos.js');

// Muestra todos los eventos
exports.mostrarEventos = async (req, res, next) => {
    try {
        // obtener todos los eventos
        const eventos = await Eventos.find({});
        res.json(eventos);
    } catch (error) {
        console.log(error);
        next();
    }
};

// Muestra un evento en especifico por su ID
exports.mostrarEvento = async (req, res, next) => {
    const evento = await Eventos.findById(req.params.idEvento);

    if(!evento) {
        res.json({mensaje : 'Ese Evento no existe'});
        return next();
    }

    // Mostrar el evento
    res.json(evento);
};


// agrega un nuevo ingrediente
exports.nuevoEvento = async (req, res, next) => {
    const evento = new Eventos(req.body);
    try {
        // almacenar el registro
        await evento.save();
        res.json({ mensaje : 'Se agrego un nuevo evento' });
    } catch (error) {
        // si hay un error, console.log y next
        res.send(error);
        next();
    }
};

// Actualiza un evento via id
exports.actualizarEvento = async (req, res, next) => {
    try {
        console.log("datos", req.body);
        const evento = await Eventos.findOneAndUpdate(
            { _id : req.body.id }, 
            {
                nombre:req.body.nombre,
                descripcion:req.body.descripcion
            }, 
            //Opciones, devolver el nuevo objeto modificado
            {new : true}
        );
        res.json(evento);
    } catch (error) {
        res.send(error);
        next();
    }
};

// Elimina un evento via ID
exports.eliminarEvento = async (req, res, next) => {
    try {
        await Eventos.findByIdAndDelete({ _id : req.params.idEvento });
        res.json({mensaje : 'El Evento se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
};
