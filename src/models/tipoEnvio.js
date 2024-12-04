const mondongo = require('mongoose')
const { Schema, model} = mondongo

const tipo_envio_schema = new Schema({
    tipo_envio_id: {
        type: Number,
        required: true,
        unique: true
    },
    tipo: String,
    precio_por_kilometro: Number,
    tiempo_estimado: String
})

const Tipo_de_Envio = model('Tipo_de_Envio', tipo_envio_schema)
module.exports = Tipo_de_Envio