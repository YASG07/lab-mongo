const express = require('express')
const Oficina = require('../models/oficina')

const router = express.Router()

//Query 1: Listar los datos de todas las oficinas
router.get('/listar-oficinas', async (req, res) => {
    try {
        const oficinas = await Oficina.find({}, {_id: 0})

        if (!oficinas) {
            res.data = 'Oficinas no encontradas'
            res.status(404).json({ Servidor: 'Oficinas no encontradas' })     
        } else {
           res.data = oficinas
            res.status(202).json(oficinas) 
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

router.get('/listar-oficina/:oficina_id', async (req, res) => {
    try {
        const oficina = await Oficina.findOne({ oficina_id: Number(req.params.oficina_id) })

        if (!oficina) {
            res.data = 'Oficina no encontrada'
            res.status(404).json({ Servidor: 'Oficina no encontrada' }) 
        } else {
            res.data = oficina
            res.status(202).json(oficina)
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

router.post('/nueva-oficina', async (req, res) => {
    try {
        const nuevaOficina = new Oficina(req.body) 
        const oficinaCreada = await nuevaOficina.save()
        res.data = oficinaCreada
        res.status(201).json(oficinaCreada)
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

router.put('/actualizar-oficina/:oficina_id', async (req, res) => {
    try {
        const oficinaActualizada = await Oficina.findOneAndUpdate({ oficina_id: req.params.oficina_id }, req.body, { new: true })
        
        if (!oficinaActualizada) {
            res.data = 'Oficina no encontrada'
            res.status(404).json({ Servidor: 'Oficina no encontrada' }) 
        } 
        else {
            res.data = oficinaActualizada
            res.status(202).json(oficinaActualizada)
        }  
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

router.delete('/eliminar-oficina/:oficina_id', async (req, res) => {
    try {
        const oficinaEliminada = await Oficina.findOneAndDelete({ oficina_id: req.params.oficina_id })

        if (!oficinaEliminada) {
            res.data = 'Oficina no encontrada'
            res.status(404).json({ Servidor: 'Oficina no encontrada' }) 
        } else {
            res.data = oficinaEliminada
            res.status(202).json(oficinaEliminada)
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

module.exports = router