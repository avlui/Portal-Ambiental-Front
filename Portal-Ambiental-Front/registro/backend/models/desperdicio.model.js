const mongoose = require('mongoose');

const desperdicioSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true,
        trim: true
    },
    puntos: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Punto',
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    unidad_medida: {
        type: String,
        required: true,
        trim: true
    },
    unidad_impacto: {
        type: String,
        required: true,
        trim: true
    },
    formula: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

const Desperdicio = mongoose.model('Desperdicio', desperdicioSchema);

module.exports = Desperdicio;