const mongoose = require('mongoose')

const tipo_envio_schema = new mongoose.Schema({
    tipo_envio_id: {
        type: Number,
        required: true,
        unique: true
    },
    tipo: {
        type: String,
        required: true
    },
    precio_por_kilometro: {
        type: Number,
        required: true
    },
    tiempo_estimado: {
        type: String,
        required: true
    }
})

const tipo_envio = mongoose.model('tipo_de_envio', tipo_envio_schema)

const cliente_schema = new mongoose.Schema({
    curp: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const cliente = mongoose.model('clientes', cliente_schema)

const oficina_schema = new mongoose.Schema({
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
        calle: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        ciudad: {
            type: String,
            required: true
        },
        codigo_postal: {
            type: String,
            required: true
        }
    },
    Envios: [{
        envido_id: {
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
            ref: 'tipo_de_envio'
        },
        curp: {
            type: String,
            required: true,
            ref: 'clientes'
        },
        peso: {
            type: Number,
            required: true
        },
        dimensiones: {
            alto: {
                type: Number,
                required: true
            },
            ancho: {
                type: Number,
                required: true
            },
            profundidad: {
                type: Number,
                required: true
            }
        },
        costo_total: {
            type: Number,
            required: true
        },
        Estatus: {
            type: String,
            required: true
        }
    }]
})

const oficina = mongoose.model('oficinas', oficina_schema)

module.exports = {
    tipo_envio,
    cliente,
    oficina
}