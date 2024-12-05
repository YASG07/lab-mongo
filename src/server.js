require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const logger = require('./middleware/logger')
const { mondongo, redisCon } = require('./config/conexion')

const endpointsCliente = require('./routes/endpointsCliente')
const endpointsOficina = require('./routes/endpointsOficina')
const endpointsTipoEnvio = require('./routes/endpointsTipoEnvio')
const endpointsEnvios = require('./routes/endpointsEnvios')

const app = express()

app.use(express.json())

app.use(cors())

app.use(morgan('dev'))

app.use(logger)

app.get('/', async (req, res) => {
    res.json({ Mensaje: "Bienvenido al local del host en el puerto 3000" })
})

app.use('/paqueteria/oficinas', endpointsOficina)
app.use('/paqueteria/clientes', endpointsCliente)
app.use('/paqueteria/tipos-envio', endpointsTipoEnvio)
app.use('/paqueteria/envios', endpointsEnvios)

app.use(logger)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor: mando escuchando en la frecuencia del puerto ${PORT}`);
})