const mongoose = require("mongoose");

const puntoSchema = new mongoose.Schema({
  ubicacion: {
    type: {
      latitud: Number,
      longitud: Number,
    },
    required: true,
  },
});

const Punto = mongoose.model("Punto", puntoSchema);

module.exports = Punto;
