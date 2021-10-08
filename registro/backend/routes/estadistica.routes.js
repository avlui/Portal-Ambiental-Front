const router = require('express').Router();

let Estadistica = require('../models/estadistica.model');

router.route('/').get((req, res) => {
    Estadistica.find(req.query)
        .then(estadisticas => res.json(estadisticas))
        .catch(error => res.status(400).json('Eror: ' + error));
});

router.route('/:id').get((req, res) => {
    Estadistica.findById(req.params.id)
        .then(estadistica => res.json(estadistica))
        .catch(error => res.status(400).json('Error: ' + error))
});
router.route('/add').post((req, res) => {
    const desperdicio = req.body.desperdicio;
    const punto = req.body.punto;
    const total_desperdicio = req.body.total_desperdicio;
    const total_reportes = req.body.total_reportes;

    const newEstadistica = new Estadistica({
        desperdicio,
        punto,
        total_desperdicio,
        total_reportes
    });

    newEstadistica.save()
        .then(() => res.json('Estadística añadida!'))
        .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/update/:id').post((req, res) => {
    Estadistica.findById(req.params.id)
        .then(estadistica => {
            estadistica.total_desperdicio = req.body.total_desperdicio;
            estadistica.total_reportes = req.body.total_reportes;
            estadistica.desperdicio = req.body.desperdicio;
            estadistica.punto = req.body.punto;

            estadistica.save()
                .then(() => res.json('Estadística actualizado!'))
                .catch(error => res.status(400).json('Error: ' + error));
        })
        .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/:id').delete((req, res) => {
    Estadistica.findByIdAndDelete(req.params.id)
        .then(() => res.json('Estadística borrada!'))
        .catch(error => res.status(400).json('Error: ' + error))
});

module.exports = router;