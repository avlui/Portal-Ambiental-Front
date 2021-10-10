const router = require('express').Router();

let Punto = require('../models/punto.model');

router.route('/').get((req, res) => {
    Punto.find(req.query)
        .then(puntos => res.json(puntos))
        .catch(error => res.status(400).json('Eror: ' + error));
});

router.route('/add').post((req, res) => {
    const nombre = req.body.nombre;
    const contrasena = req.body.nombre;
    const nit = req.body.nit;
    const nombrePunto = req.body.nombrePunto;
    const gerente = req.body.gerente;
    const ubicacion = req.body.ubicacion;
    const direccion = req.body.direccion;
    const telefono = req.body.telefono;
    const email = req.body.email;
    const horario = req.body.horario;
    const desperdicios = req.body.desperdicios;
    const reportes = req.body.reportes;
    const estadisticas = req.body.estadisticas;

    const newPunto = new Punto({
        nombre,
        contrasena,
        nit,
        nombrePunto,
        gerente,
        ubicacion,
        direccion,
        telefono,
        email,
        horario,
        desperdicios,
        reportes,
        estadisticas
    });

    newPunto.save()
        .then(() => res.json('Punto añadido!'))
        .catch(error => res.status(400).json('Error: ' + error));
});
router.route("/login").post((req,res)=>{
  
});
router.route('/:id').get((req, res) => {
    Punto.findById(req.params.id)
        .then(punto => res.json(punto))
        .catch(error => res.status(400).json('Error: ' + error))
});

router.route('/:id').delete((req, res) => {
    Punto.findByIdAndDelete(req.params.id)
        .then(() => res.json('Punto borrado!'))
        .catch(error => res.status(400).json('Error: ' + error))
});

router.route('/update/:id').post((req, res) => {
    Punto.findById(req.params.id)
        .then(punto => {
            punto.nit = req.body.nit;
            punto.nombrePunto = req.body.nombrePunto;
            punto.gerente = req.body.gerente;
            punto.ubicacion = req.body.ubicacion;
            punto.direccion = req.body.direccion;
            punto.telefono = req.body.telefono;
            punto.email = req.body.email;
            punto.horaio = req.body.horaio;
            punto.desperdicios = req.body.desperdicios;
            punto.reportes = req.body.reportes;
            punto.estadisticas = req.body.estadisticas;

            punto.save()
                .then(() => res.json('Punto actualizado!'))
                .catch(error => res.status(400).json('Error: ' + error));
        })
        .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;
