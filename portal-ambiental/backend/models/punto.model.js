const mongoose = require('mongoose');

const puntoSchema = new mongoose.Schema({
    nit: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    nombrePunto: {
        type: String,
        required: true,
        trim: true
    },
    gerente: {
        type: String,
        required: true,
        trim: true
    },
    ubicacion: {
        type: {
            latitud: String,
            longitud: String
        },
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    horario: {
        type: String,
        required: false,
        trim: false
    },
    desperdicios: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Desperdicio',
        required: true
    },
    reportes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Reporte',
    },
    estadisticas: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Estadistica'
    }
}, {
    timestamps: true
});

const Punto = mongoose.model('Punto', puntoSchema);

module.exports = Punto;