const express = require('express')
const Oficina = require('../models/oficina')

const router = express.Router()

//Query 2: Listar los envíos realizados en determinada oficina con estatus en tránsito.
router.get('/query2/:oficina_id', async (req, res) => {
    try {
        const resultado = await Oficina.aggregate([
            { 
                $match: { "oficina_id": Number(req.params.oficina_id) } 
            },
            { 
                $project: { 
                    _id: 0,
                    nombre: 1,
                    Envios: { 
                        $filter: {
                            input: "$Envios",
                            as: "envio",
                            cond: { $eq: ["$$envio.Estatus", "tránsito"] }
                        }
                    }
                }
            }
        ])

        if (!resultado || resultado.length == 0) {
            res.data = 'Sin registro de envios'
            res.status(404).json({ Servidor: 'Sin registro de envios' })
        } else {
            res.data = resultado
            res.status(202).json(resultado)
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

//Query 3: Listar los envíos que utilizan un tipo específico de envío.
router.get('/query3/:tipo_envio_id', async (req, res) => {
    try {
        const resultado = await Oficina.aggregate([
            { 
                $project: { 
                    _id: 0,
                    Envios: { 
                        $filter: {
                            input: "$Envios",
                            as: "envio",
                            cond: { $eq: ["$$envio.tipo_envio_id", Number(req.params.tipo_envio_id)] }
                        }
                    }
                }
            }
        ])

        if (!resultado || resultado.length == 0) {
            res.data = 'Sin registro de envios'
            res.status(404).json({ Servidor: 'Sin registro de envios' })
        } else {
            res.data = resultado
            res.status(202).json(resultado)
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

//Query 4: Listar los envíos realizados por un cliente en específico en todas las oficinas.
router.get('/query4/:curp', async (req, res) => {
    try {
        const resultado = await Oficina.aggregate([
            { 
                $project: { 
                    _id: 0,
                    nombre: 1,
                    Envios: { 
                        $filter: {
                            input: "$Envios",
                            as: "envio",
                            cond: { $eq: ["$$envio.curp", req.params.curp.toUpperCase()] }
                        }
                    }
                }
            },
            {
                $match: {
                    "Envios": {$ne: []}
                }
            }
        ])

        if (!resultado || resultado.length == 0) {
            res.data = 'Sin registro de envios'
            res.status(404).json({ Servidor: 'Sin registro de envios' })
        } else {
            res.data = resultado
            res.status(202).json(resultado)
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

//Query 5: Listar los clientes que han realizado envíos en una determinada oficina.
router.get('/query5/:oficina_id', async (req, res) => {
    try {
        const resultado = await Oficina.aggregate([
            {
                $match: {
                  oficina_id: Number(req.params.oficina_id)
                }
            },
            {
                $unwind: "$Envios"
            },
            {
                $lookup: {
                  from: "clientes",
                  localField: "Envios.curp",
                  foreignField: "curp",
                  as: "info_cliente"
                }
            },
            {
                $unwind: "$info_cliente"
            },
            {
                $project: {
                  _id: 0,
                  "curp": "$info_cliente.curp",
                  "nombre": "$info_cliente.nombre",
                  "apellidos": "$info_cliente.apellidos"
                }
            },
            {
                $group: {
                    _id: "$curp",
                    curp: { $first: "$curp" },
                    nombre: { $first: "$nombre" },
                    apellidos: { $first: "$apellidos" }
                  }
            },
            {
                $project: {
                  _id: 0,
                  curp: 1,
                  nombre: 1,
                  apellidos: 1
                }
            }
        ])

        if (!resultado) {
            res.data = 'Sin registro de envios'
            res.status(404).json({ Servidor: 'Sin registro de envios' })
        } else {
            res.data = resultado
            res.status(202).json(resultado)
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

//Query 6: Listar los envíos de todas las oficinas con estatus de entregado.
router.get('/query6', async (req, res) => {
    try {
        const resultado = await Oficina.aggregate([
            { 
                $project: { 
                    _id: 0,
                    nombre: 1,
                    Envios: { 
                        $filter: {
                            input: "$Envios",
                            as: "envio",
                            cond: { $eq: ["$$envio.Estatus", "entregado"] }
                        }
                    }
                }
            }
        ])

        if (!resultado || resultado.length == 0) {
            res.data = 'Sin registro de envios'
            res.status(404).json({ Servidor: 'Sin registro de envios' })
        } else {
            res.data = resultado
            res.status(202).json(resultado)
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

//Query 7: Listar los clientes y sus envíos que se han remitido por el servicio terrestre considerando todas las oficinas.
router.get('/query7', async (req, res) => {
    try {
        const resultado = await Oficina.aggregate([
            {
                $project: {
                    _id: 0,
                    nombre: 1,
                    Envios: {
                        $filter: {
                            input: "$Envios",
                            as: "envio",
                            cond: { $eq: ["$$envio.tipo_envio_id", 3] }
                        }
                    }
                }
            },
            {
                $unwind: "$Envios"
            },
            {
                $lookup: {
                  from: "clientes",
                  localField: "Envios.curp",
                  foreignField: "curp",
                  as: "info_cliente"
                }
            },
            {
                $unwind: "$info_cliente"
            },
            {
                $group: {
                    _id: "$info_cliente.curp",
                    nombre_oficina: { $first: "$nombre" },
                    nombre_cliente: { $first: "$info_cliente.nombre" },
                    apellidos_cliente: { $first: "$info_cliente.apellidos" },
                    envios: { $push: {
                        envio_id: "$Envios.envio_id",
                        fecha_envio: "$Envios.fecha",
                        destino: "$Envios.oficina_destino",
                        tipo_envio_id: "$Envios.tipo_envio_id"
                    }}
                }
            },
            {
                $project: {
                    _id: 1,
                    nombre_oficina: 1,
                    nombre_cliente: 1,
                    apellidos_cliente: 1,
                    envios: 1
                }
            }
        ])

        if (!resultado || resultado.length == 0) {
            res.data = 'Sin registro de envios'
            res.status(404).json({ Servidor: 'Sin registro de envios' })
        } else {
            res.data = resultado
            res.status(202).json(resultado)
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

//Query 8: Listar los clientes y sus envíos se han remitido por el servicio express considerando una oficina en específico.
router.get('/query8/:oficina_id', async (req, res) => {
    try {
        const resultado = await Oficina.aggregate([
            {
                $match: {
                  oficina_id: Number(req.params.oficina_id)
                }
            },
            {
                $project: {
                    _id: 0,
                    Envios: {
                        $filter: {
                            input: "$Envios",
                            as: "envio",
                            cond: { $eq: ["$$envio.tipo_envio_id", 1] }
                        }
                    }
                }
            },
            {
                $unwind: "$Envios"
            },
            {
                $lookup: {
                  from: "clientes",
                  localField: "Envios.curp",
                  foreignField: "curp",
                  as: "info_cliente"
                }
            },
            {
                $unwind: "$info_cliente"
            },
            {
                $group: {
                    _id: "$info_cliente.curp",
                    nombre_cliente: { $first: "$info_cliente.nombre" },
                    apellidos_cliente: { $first: "$info_cliente.apellidos" },
                    envios: { $push: {
                        envio_id: "$Envios.envio_id",
                        fecha_envio: "$Envios.fecha",
                        destino: "$Envios.oficina_destino",
                        tipo_envio_id: "$Envios.tipo_envio_id"
                    }}
                }
            },
            {
                $project: {
                    _id: 1,
                    nombre_cliente: 1,
                    apellidos_cliente: 1,
                    envios: 1
                }
            }
        ])

        if (!resultado || resultado.length == 0) {
            res.data = 'Sin registro de envios'
            res.status(404).json({ Servidor: 'Sin registro de envios' })
        } else {
            res.data = resultado
            res.status(202).json(resultado)
        }
    } catch (error) {
        res.data = error.message
        res.status(500).json({ Fatal: error.message })
    }
})

module.exports = router