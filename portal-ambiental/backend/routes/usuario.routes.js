const router = require('express').Router();

let Usuario = require('../models/user.model');

router.route('/').get((req, res) => {
    Usuario.find(req.query)
        .then(usuarios => res.json(usuarios))
        .catch(error => res.status(400).json('Eror: ' + error));
});

router.route('/:id').get((req, res) => {
    Usuario.findById(req.params.id)
        .then(usuario => res.json(usuario))
        .catch(error => res.status(400).json('Error: ' + error))
});

router.route('/add').post((req, res) => {
    const nombre = req.body.nombre;
    const contrasena = req.body.contrasena;

    const newUsuario = new Usuario({
        nombre,
        contrasena,
    });

    newUsuario.save()
        .then(() => res.json('Usuario añadido!'))
        .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/update/:id').post((req, res) => {
    Usuario.findById(req.params.id)
        .then(usuario => {
            usuario.nombre = req.body.nombre;
            usuario.contrasena = req.body.contrasena;

            usuario.save()
                .then(() => res.json('Usuario actualizado!'))
                .catch(error => res.status(400).json('Error: ' + error));
        })
        .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/:id').delete((req, res) => {
    Usuario.findByIdAndDelete(req.params.id)
        .then(() => res.json('Usuario borrado!'))
        .catch(error => res.status(400).json('Error: ' + error))
});

module.exports = router;