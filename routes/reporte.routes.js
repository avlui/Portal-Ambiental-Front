const router = require("express").Router();

let Reporte = require("../models/reporte.model");

router.route("/").get((req, res) => {
  Reporte.find(req.query)
    .then((reportes) => res.json(reportes))
    .catch((error) => res.status(400).json("Eror: " + error));
});

router.route("/:id").get((req, res) => {
  Reporte.findById(req.params.id)
    .then((reporte) => res.json(reporte))
    .catch((error) => res.status(400).json("Error: " + error));
});
router.route("/add").post((req, res) => {
  const desperdicio = req.body.desperdicio;
  const punto = req.body.punto;
  const numero_reporte = req.body.numero_reporte;
  const mes = req.body.mes;
  const cantidad_desperdicio = req.body.cantidad_desperdicio;
  const cantidad_impacto = req.body.cantidad_impacto;
  const cantidad_circulacion = req.body.cantidad_circulacion;

  const newReporte = new Reporte({
    desperdicio,
    punto,
    numero_reporte,
    mes,
    cantidad_desperdicio,
    cantidad_impacto,
    cantidad_circulacion,
  });

  newReporte
    .save()
    .then(() => res.json("Reporte añadido!"))
    .catch((error) => res.status(400).json("Error: " + error));
});

router.route("/update/:id").post((req, res) => {
  Reporte.findById(req.params.id)
    .then((reporte) => {
      reporte.desperdicio = req.body.desperdicio;
      reporte.punto = req.body.punto;
      reporte.numero_reporte = req.body.numero_reporte;
      reporte.mes = req.body.mes;
      reporte.cantidad_desperdicio = req.body.cantidad_desperdicio;
      reporte.cantidad_impacto = req.body.cantidad_impacto;
      reporte.cantidad_circulacion = req.body.cantidad_circulacion;

      reporte
        .save()
        .then(() => res.json("Reporte actualizado!"))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Error: " + error));
});

router.route("/:id").delete((req, res) => {

  Reporte.findByIdAndDelete(req.params.id)
    .then(() => res.json("Reporte borrado!"))
    .catch((error) => res.status(400).json("Error: " + error));
});

router.route('/last').get((req, res) => {
    Reporte.find().sort({ $natural: -1 }).limit(1)
        .then(reporte => res.json(reporte))
});

module.exports = router;
