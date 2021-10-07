const router = require("express").Router();

let { Desperdicio } = require("../models/desperdicio.model");

router.route("/").get((req, res) => {
  Desperdicio.find(req.query)
    .then((desperdicios) => res.json(desperdicios))
    .catch((error) => res.status(400).json("Eror: " + error));
});

router.route("/lol/:type").get((req, res) => {
  Desperdicio.find(req.query)
    .then((desperdicios) => res.json(desperdicios))
    .catch((error) => res.status(400).json("Eror: " + error));
});

router.route("/:id").get((req, res) => {
  Desperdicio.findById(req.params.id)
    .then((desperdicio) => res.json(desperdicio))
    .catch((error) => res.status(400).json("Error: " + error));
});

router.route("/add").post((req, res) => {
  const tipo = req.body.tipo;
  const puntos = req.body.puntos;
  const descripcion = req.body.descripcion;
  const unidad_medida = req.body.unidad_medida;
  const unidad_impacto = req.body.unidad_impacto;
  const formula = req.body.formula;

  const newDesperdicio = new Desperdicio({
    tipo,
    puntos,
    descripcion,
    unidad_medida,
    unidad_impacto,
    formula,
  });

  newDesperdicio
    .save()
    .then(() => res.json("Desperdicio añadido!"))
    .catch((error) => res.status(400).json("Error: " + error));
});

router.route("/update/:id").post((req, res) => {
  Desperdicio.findById(req.params.id)
    .then((desperdicio) => {
      desperdicio.tipo = req.body.tipo;
      desperdicio.puntos = req.body.puntos;
      desperdicio.descripcion = req.body.descripcion;
      desperdicio.unidad_medida = req.body.unidad_medida;
      desperdicio.unidad_impacto = req.body.unidad_impacto;
      desperdicio.formula = req.body.formula;

      desperdicio
        .save()
        .then(() => res.json("Desperdicio actualizado!"))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Error: " + error));
});

router.route("/:id").delete((req, res) => {
  Desperdicio.findByIdAndDelete(req.params.id)
    .then(() => res.json("Desperdicio borrado!"))
    .catch((error) => res.status(400).json("Error: " + error));
});

module.exports = router;
