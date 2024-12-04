const express = require('express')
const Cliente = require('../models/cliente')

const router = express.Router()

router.get('/listar-clientes', async (req, res) => {
    try {
        const clientes = await Cliente.find({}, {_id: 0})
        
        if (!clientes) {
            res.data = 'Clientes no encontrados'
            res.status(404).json({ Servidor: 'Clientes no encontrados' }) 
        } else {
            res.data = clientes
            res.status(202).json(clientes)
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

router.get('/listar-cliente/:curp', async (req, res) => {
    try {
        const cliente = await Cliente.findOne({ curp: req.params.curp.toUpperCase() }, {_id: 0})

        if (!cliente) {
            res.data = 'Cliente no encontrado'
            res.status(404).json({ Servidor: 'Cliente no encontrado' }) 
        } else {
            res.data = cliente
            res.status(202).json(cliente)
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

router.post('/nuevo-cliente', async (req, res) => {
    try {
        const nuevoCliente = new Cliente(req.body)
        const clienteCreado = await nuevoCliente.save()
        res.data = clienteCreado
        res.status(201).json(clienteCreado)
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

router.put('/actualizar-cliente/:curp', async (req, res) => {
    try {
        const clienteActualizado = await Cliente.findOneAndUpdate({ curp: req.params.curp.toUpperCase() }, req.body, { new: true })

        if (!clienteActualizado) {
            res.data = 'Cliente no encontrado'
            res.status(404).json({ Servidor: 'Cliente no encontrado' }) 
        } else {
            res.data = clienteActualizado
            res.status(202).json(clienteActualizado)
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

router.delete('/eliminar-cliente/:curp', async (req, res) => {
    try {
        const clienteEliminado = await Cliente.findOneAndDelete({ curp: req.params.curp.toUpperCase() })

        if (!clienteEliminado) {
            res.data = 'Cliente no encontrado'
            res.status(404).json({ Servidor: 'Cliente no encontrado' }) 
        } else {
            res.data = clienteEliminado
            res.status(202).json(clienteEliminado)
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

module.exports = router