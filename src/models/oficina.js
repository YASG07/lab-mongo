const mondongo = require('mongoose')
const { Schema, model} = mondongo

const oficina_schema = new Schema({
    oficina_id: {
        type: Number,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    telefono: String,
    email: String,
    direccion: {
        calle: String,
        numero: String,
        ciudad: String,
        codigo_postal: String
    },
    Envios: [{
        envio_id: {
            type: Number,
            required: true,
            unique: true
        },
        fecha: {
            type: Date,
            default: Date.now()
        },
        oficina_destino: {
            type: String,
            required: true
        },
        tipo_envio_id: {
            type: Number,
            required: true,
            ref: 'Tipo_de_envio'
        },
        curp: {
            type: String,
            required: true,
            ref: 'Cliente'
        },
        peso: Number,
        dimensiones: {
            alto: Number,
            ancho: Number,
            profundidad: Number
        },
        costo_total: Number,
        Estatus: String
    }]
}, {
    timestamps: true
})

const Oficina = model('Oficina', oficina_schema)
module.exports = Oficina