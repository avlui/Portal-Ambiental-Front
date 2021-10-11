const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const puntoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    contrasena: {
      type: String,
      required: true,
    },
    nit: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    nombrePunto: {
      type: String,
      required: true,
      trim: true,
    },
    gerente: {
      type: String,
      required: true,
      trim: true,
    },
    ubicacion: {
      type: {
        latitud: Number,
        longitud: Number,
      },
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    horario: {
      type: String,
      required: false,
      trim: false,
    },
    desperdicios: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Desperdicio",
      required: true,
    },
    reportes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Reporte",
    },
    estadisticas: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Estadistica",
    },
  },
  {
    timestamps: true,
  }
);
puntoSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.contrasena);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};
puntoSchema.pre("save", function (next) {
  if (!this.contrasena) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");
    this.contrasena = this.hashPassword(this.contrasena, 10);

    next();
  }
});

const Punto = mongoose.model("Punto", puntoSchema);

module.exports = Punto;
