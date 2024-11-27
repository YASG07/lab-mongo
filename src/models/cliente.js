const mondongo = require('mongoose')
const { Schema, model} = mondongo

const cliente_schema =  new Schema({
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
    email: String
},{
    timestamps: true
})

const Cliente = model('Cliente', cliente_schema)
module.exports = Cliente