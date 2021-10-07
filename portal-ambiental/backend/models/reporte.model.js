const mongoose = require('mongoose');

const reporteSchema = new mongoose.Schema({
    desperdicio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Desperdicio',
        required: true
    },
    punto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Punto',
        required: true
    },
    numero_reporte: {
        type: Number,
        required: true,
    },
    mes: {
        type: String,
        required: true,
        trim: true
    },
    cantidad_desperdicio: {
        type: Number,
        required: true
    },
    cantidad_impacto: {
        type: Number,
        required: true
    },
    cantidad_circulacion: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Reporte = mongoose.model('Reporte', reporteSchema);

module.exports = Reporte;