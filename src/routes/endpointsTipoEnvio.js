const express = require('express')
const TipoEnvio = require('../models/tipoEnvio')

const router = express.Router()

router.get('/listar-tipos-de-envio', async (req, res) => {
    try {
        const tiposEnvio = await TipoEnvio.find({}, {_id: 0})

        if (!tiposEnvio) {
            res.data = 'Tipos de envio no registrados'
            res.status(404).json({ Servidor: 'Tipos de envio no registrados' }) 
        } else {
            res.data = tiposEnvio
            res.status(202).json(tiposEnvio)
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

router.post('/nuevo-tipo-de-envio', async (req, res) => {
    try {
        const nuevoTipoEnvio = new TipoEnvio(req.body)
        const tipoEnvioCreado = await nuevoTipoEnvio.save()
        res.data = tipoEnvioCreado
        res.status(201).json(tipoEnvioCreado)
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

router.put('/actualizar-tipo-de-envio/:tipo_envio_id', async (req, res) => {
    try {
        const tipoEnvioActualizado = await TipoEnvio.findOneAndUpdate({ tipo_envio_id: Number(req.params.tipo_envio_id) }, req.body, { new: true})

        if (!tipoEnvioActualizado) {
            res.data = 'Tipo de envio no registrado'
            res.status(404).json({ Servidor: 'Tipo de envio no registrado' })
        } else {
            res.data = tipoEnvioActualizado
            res.status(202).json(tipoEnvioActualizado)
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

router.delete('/eliminar-tipo-de-envio/:tipo_envio_id', async (req, res) => {
    try {
        const tipoEnvioEliminado = await TipoEnvio.findOneAndDelete({ tipo_envio_id: Number(req.params.tipo_envio_id) })

        if (!tipoEnvioEliminado) {
            res.data = 'Tipo de envio no registrado'
            res.status(404).json({ Servidor: 'Tipo de envio no registrado' })
        } else {
            res.data = tipoEnvioEliminado
            res.status(202).json(tipoEnvioEliminado)
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

module.exports = router