const mongoose = require("mongoose");

const estadisticaSchema = new mongoose.Schema(
  {
    desperdicio: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Desperdicio",
      required: true,
    },
    punto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Punto",
      required: true,
    },
    total_desperdicio: {
      type: Number,
      required: true,
    },
    total_reportes: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Estadistica = mongoose.model("Estadistica", estadisticaSchema);

module.exports = Estadistica;
