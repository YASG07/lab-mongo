const express = require('express')
const mondongo = require('mongoose')

const server = express()
server.use(express.json())

async function conexion() {
    await mondongo.connect('mongodb://127.0.0.1:27017')
    .then(() => {
        console.log('Conexión a MongoDB exitosa')
    })
    .catch((error) => {
        console.error('Error de conexión:', error)
        return
    })
}

server.get('/', async (req, res) => {
    res.json({ Mensaje: "Bienvenido al local del host en el puerto 3000" })
})

server.listen(3000, () => {
    conexion()
    console.log('Servidor corriendo en el puerto 3000');
})