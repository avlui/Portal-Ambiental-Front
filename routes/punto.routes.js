const express = require("express");
const router = express.Router();

let Punto = require("../models/punto.model");

router.route("/").get((req, res) => {
  Punto.find(req.query)
    .then((puntos) => res.json(puntos))
    .catch((error) => res.status(400).json("Eror: " + error));
});

router.get("/:lel", async (req, res) => {
  /* Punto.find(req.query)
    .then((puntos) => res.json(puntos))
    .catch((error) => res.status(400).json("Eror: " + error)); */
  const publicacionConUsuario = async () => {};
});

router.route("/add").post((req, res) => {
  const nombre = req.body.nombre;
  const contrasena = req.body.contrasena;
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
    estadisticas,
  });

  newPunto
    .save()
    .then(() => res.json("Punto añadido!"))
    .catch((error) => res.status(400).json("Error: " + error));
});

router.route("/login").post((req, res) => {
  Punto.findById(req.params.id)
    .then((desperdicio) => res.json(desperdicio))
    .catch((error) => res.status(400).json("Error: " + error));
    
});
router.route("/:id").get((req, res) => {
  Punto.findById(req.params.id)
    .then((punto) => res.json(punto))
    .catch((error) => res.status(400).json("Error: " + error));
});

module.exports = router;
