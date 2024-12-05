# Laboratorio MongoDB

API desarrollada en Node.js para realizar consultas a una base de datos en MongoDB mediante Mongoose. Tomando de base el caso de uso de una paqueteria.

## Escenario de datos

### Query 0: Crear el escenario de datos con la correspondiente integridad referencial en un único archivo. 

```js
use('paqueteria');

//#region: new collection 'oficinas'
db.createCollection('oficinas');

// Create new documents in the collection.
db.getCollection('oficinas').insertMany([
{
    "oficina_id": 1,
    "nombre": "Oficina Norte",
    "telefono": "+34 901 234 567",
    "email": "norte@empresa.com",
    "direccion": {
        "calle": "Calle Norte",
        "numero": "202",
        "ciudad": "Bilbao",
        "codigo_postal": "48001"
    },
    "Envios":[
    {
        "envio_id": 30,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Sur",
        "tipo_envio_id": 1,
        "curp": "KLMN910318HDFGGH10",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "tránsito"
    },
    {
        "envio_id": 25,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Este",
        "tipo_envio_id": 2,
        "curp": "QRST870224HSRRWW05",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "pendiente"
    },
    {
        "envio_id": 14,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Noreste",
        "tipo_envio_id": 1,
        "curp": "MNOP930715MPRZXT04",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "tránsito"
    },
    {
        "envio_id": 2,
        "fecha": "2024-11-02",
        "oficina_destino": "Oficina Sur",
        "tipo_envio_id": 2,
        "curp": "EFGH920321MGRJKL02",
        "peso": 3.2,
        "dimensiones": {
            "alto": 35,
            "ancho": 25,
            "profundidad": 10
        },
        "costo_total": 175.50,
        "Estatus": "tránsito"
    }]
},
{
    "oficina_id": 2,
    "nombre": "Oficina Sur",
    "telefono": "+34 902 345 678",
    "email": "sur@empresa.com",
    "direccion": {
        "calle": "Avenida del Sur",
        "numero": "303",
        "ciudad": "Sevilla",
        "codigo_postal": "41001"
    },
   "Envios":[
    {
        "envio_id": 24,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Norte",
        "tipo_envio_id": 1,
        "curp": "MNOP930715MPRZXT04",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "tránsito"
    },
    {
        "envio_id": 20,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Noreste",
        "tipo_envio_id": 1,
        "curp": "KLMN910318HDFGGH10",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "tránsito"
    },
    {
        "envio_id": 17,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Oeste",
        "tipo_envio_id": 1,
        "curp": "YZAB900505HCDNMX07",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "tránsito"
    },
    {
        "envio_id": 11,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Oeste",
        "tipo_envio_id": 1,
        "curp": "ABCD890123HDFRLL01",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "tránsito"
    },
    {
        "envio_id": 9,
        "fecha": "2024-11-09",
        "oficina_destino": "Oficina Noreste",
        "tipo_envio_id": 3,
        "curp": "GHIJ920429HSRTXP09",
        "peso": 1.2,
        "dimensiones": {
            "alto": 18,
            "ancho": 12,
            "profundidad": 8
        },
        "costo_total": 110.50,
        "Estatus": "pendiente"
    },
    {
        "envio_id": 3,
        "fecha": "2024-11-03",
        "oficina_destino": "Oficina Este",
        "tipo_envio_id": 3,
        "curp": "IJKL851216HPLMNQ03",
        "peso": 1.5,
        "dimensiones": {
            "alto": 20,
            "ancho": 15,
            "profundidad": 10
        },
        "costo_total": 120.00,
        "Estatus": "pendiente"
    },
    {
        "envio_id": 1,
        "fecha": "2024-11-01",
        "oficina_destino": "Oficina Norte",
        "tipo_envio_id": 1,
        "curp": "ABCD890123HDFRLL01",
        "peso": 2.5,
        "dimensiones": {
            "alto": 30,
            "ancho": 20,
            "profundidad": 15
        },
        "costo_total": 150.00,
        "Estatus": "entregado"
    }]
},
{
    "oficina_id": 3,
    "nombre": "Oficina Este",
    "telefono": "+34 903 456 789",
    "email": "este@empresa.com",
    "direccion": {
        "calle": "Calle Este",
        "numero": "404",
        "ciudad": "Valencia",
        "codigo_postal": "46001"
    },
   "Envios":[
    {
        "envio_id": 26,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Oeste",
        "tipo_envio_id": 3,
        "curp": "UVWX941013MGRPLR06",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "entregado"
    },
    {
        "envio_id": 23,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Sur",
        "tipo_envio_id": 3,
        "curp": "IJKL851216HPLMNQ03",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "entregado"
    },
    {
        "envio_id": 16,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Sur",
        "tipo_envio_id": 3,
        "curp": "UVWX941013MGRPLR06",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "entregado"
    },
    {
        "envio_id": 13,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Norte",
        "tipo_envio_id": 3,
        "curp": "IJKL851216HPLMNQ03",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "entregado"
    },
    {
        "envio_id": 8,
        "fecha": "2024-11-08",
        "oficina_destino": "Oficina Noreste",
        "tipo_envio_id": 2,
        "curp": "CDEF850730MRZLTC08",
        "peso": 5.0,
        "dimensiones": {
            "alto": 45,
            "ancho": 35,
            "profundidad": 25
        },
        "costo_total": 225.75,
        "Estatus": "tránsito"
    },
    {
        "envio_id": 4,
        "fecha": "2024-11-04",
        "oficina_destino": "Oficina Oeste",
        "tipo_envio_id": 1,
        "curp": "MNOP930715MPRZXT04",
        "peso": 4.5,
        "dimensiones": {
            "alto": 40,
            "ancho": 30,
            "profundidad": 20
        },
        "costo_total": 200.00,
        "Estatus": "entregado"
    }]
},
{
    "oficina_id": 4,
    "nombre": "Oficina Oeste",
    "telefono": "+34 904 567 890",
    "email": "oeste@empresa.com",
    "direccion": {
        "calle": "Avenida Oeste",
        "numero": "505",
        "ciudad": "La Coruña",
        "codigo_postal": "15001"
    },
   "Envios":[
    {
        "envio_id": 27,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Noreste",
        "tipo_envio_id": 1,
        "curp": "YZAB900505HCDNMX07",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "tránsito"
    },
    {
        "envio_id": 22,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Este",
        "tipo_envio_id": 2,
        "curp": "EFGH920321MGRJKL02",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "pendiente"
    },
    {
        "envio_id": 18,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Centro",
        "tipo_envio_id": 2,
        "curp": "CDEF850730MRZLTC08",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "pendiente"
    },
    {
        "envio_id": 12,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Este",
        "tipo_envio_id": 2,
        "curp": "EFGH920321MGRJKL02",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "pendiente"
    },
    {
        "envio_id": 5,
        "fecha": "2024-11-05",
        "oficina_destino": "Oficina Centro",
        "tipo_envio_id": 2,
        "curp": "QRST870224HSRRWW05",
        "peso": 2.0,
        "dimensiones": {
            "alto": 25,
            "ancho": 20,
            "profundidad": 15
        },
        "costo_total": 135.50,
        "Estatus": "tránsito"
    }]
},
{
    "oficina_id": 5,
    "nombre": "Oficina Centro",
    "telefono": "+34 905 678 901",
    "email": "centro@empresa.com",
    "direccion": {
        "calle": "Paseo de la Reforma",
        "numero": "606",
        "ciudad": "Zaragoza",
        "codigo_postal": "50001"
    },
   "Envios":[
    {
        "envio_id": 29,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Norte",
        "tipo_envio_id": 3,
        "curp": "GHIJ920429HSRTXP09",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "entregado"
    },
    {
        "envio_id": 21,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Oeste",
        "tipo_envio_id": 1,
        "curp": "ABCD890123HDFRLL01",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "tránsito"
    },
    {
        "envio_id": 19,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Sur",
        "tipo_envio_id": 3,
        "curp": "GHIJ920429HSRTXP09",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "entregado"
    },
    {
        "envio_id": 6,
        "fecha": "2024-11-06",
        "oficina_destino": "Oficina Oeste",
        "tipo_envio_id": 3,
        "curp": "UVWX941013MGRPLR06",
        "peso": 3.8,
        "dimensiones": {
            "alto": 35,
            "ancho": 25,
            "profundidad": 15
        },
        "costo_total": 180.25,
        "Estatus": "pendiente"
    }]
},
{
    "oficina_id": 6,
    "nombre": "Oficina Noreste",
    "telefono": "+34 909 012 345",
    "email": "noreste@empresa.com",
    "direccion": {
        "calle": "Avenida Noreste",
        "numero": "1001",
        "ciudad": "Barcelona",
        "codigo_postal": "08001"
    },
   "Envios":[
    {
        "envio_id": 28,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Centro",
        "tipo_envio_id": 2,
        "curp": "CDEF850730MRZLTC08",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "pendiente"
    },
    {
        "envio_id": 15,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Este",
        "tipo_envio_id": 2,
        "curp": "QRST870224HSRRWW05",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "pendiente"
    },
    {
        "envio_id": 10,
        "fecha": "2024-11-10",
        "oficina_destino": "Oficina Sur",
        "tipo_envio_id": 1,
        "curp": "KLMN910318HDFGGH10",
        "peso": 3.5,
        "dimensiones": {
            "alto": 32,
            "ancho": 24,
            "profundidad": 18
        },
        "costo_total": 165.00,
        "Estatus": "entregado"
    },
    {
        "envio_id": 7,
        "fecha": "2024-11-07",
        "oficina_destino": "Oficina Centro",
        "tipo_envio_id": 1,
        "curp": "YZAB900505HCDNMX07",
        "peso": 2.7,
        "dimensiones": {
            "alto": 30,
            "ancho": 20,
            "profundidad": 10
        },
        "costo_total": 155.00,
        "Estatus": "entregado"
    }]
}
]);
//#endregion

//#region: new collection 'clientes'
db.createCollection('clientes');

//new documents in the collection
db.getCollection('clientes').insertMany([
{
    "curp": "ABCD890123HDFRLL01",
    "nombre": "Juan",
    "apellidos": "Pérez López",
    "email": "juan.perez@example.com"
},
{
    "curp": "EFGH920321MGRJKL02",
    "nombre": "María",
    "apellidos": "Gómez Rodríguez",
    "email": "maria.gomez@example.com"
},
{
    "curp": "IJKL851216HPLMNQ03",
    "nombre": "Carlos",
    "apellidos": "Hernández García",
    "email": "carlos.hernandez@example.com"
},
{
    "curp": "MNOP930715MPRZXT04",
    "nombre": "Ana",
    "apellidos": "Ramírez Sánchez",
    "email": "ana.ramirez@example.com"
},
{
    "curp": "QRST870224HSRRWW05",
    "nombre": "Luis",
    "apellidos": "Martínez Castillo",
    "email": "luis.martinez@example.com"
},
{
    "curp": "UVWX941013MGRPLR06",
    "nombre": "Laura",
    "apellidos": "Vargas Morales",
    "email": "laura.vargas@example.com"
},
{
    "curp": "YZAB900505HCDNMX07",
    "nombre": "José",
    "apellidos": "Jiménez Torres",
    "email": "jose.jimenez@example.com"
},
{
    "curp": "CDEF850730MRZLTC08",
    "nombre": "Elena",
    "apellidos": "Flores Rivera",
    "email": "elena.flores@example.com"
},
{
    "curp": "GHIJ920429HSRTXP09",
    "nombre": "Pedro",
    "apellidos": "Ortiz Aguilar",
    "email": "pedro.ortiz@example.com"
},
{
    "curp": "KLMN910318HDFGGH10",
    "nombre": "Isabel",
    "apellidos": "Mendoza Hernández",
    "email": "isabel.mendoza@example.com"
}
]);
//#endregion

//#region: new collection 'tipo de envio'
db.createCollection('tipo_de_envios');

//new documents in the collection
db.getCollection('tipo_de_envios').insertMany([
{
    "tipo_envio_id": 1,
    "tipo": "express",
    "precio_por_kilometro": 5.00,
    "tiempo_estimado": "3-5 días"
},
{
    "tipo_envio_id": 2,
    "tipo": "aéreo",
    "precio_por_kilometro": 8.50,
    "tiempo_estimado": "1-2 días"
},
{
    "tipo_envio_id": 3,
    "tipo": "terrestre",
    "precio_por_kilometro": 15.00,
    "tiempo_estimado": "5-10 días"
}
]);
//#endregion
```

### Query 1: Listar los datos de todas las oficinas.

```js
db.getCollection('oficinas').find({}, {_id: 0})
```

### Query 2: Listar los envíos realizados en determinada oficina con estatus en tránsito.

```js
db.getCollection('oficinas').aggregate([
    { 
        $match: { "oficina_id": 1 } 
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
```

### Query 3: Listar los envíos que utilizan un tipo específico de envío.

```js
db.getCollection('oficinas').aggregate([
    { 
        $project: { 
            _id: 0,
            Envios: { 
                $filter: {
                    input: "$Envios",
                    as: "envio",
                    cond: { $eq: ["$$envio.tipo_envio_id", 2] }
                }
            }
        }
    }
])
```

### Query 4: Listar los envíos realizados por un cliente en específico en todas las oficinas.

```js
db.getCollection('oficinas').aggregate([
    { 
        $project: { 
            _id: 0,
            nombre: 1,
            Envios: { 
                $filter: {
                    input: "$Envios",
                    as: "envio",
                    cond: { $eq: ["$$envio.curp", "ABCD890123HDFRLL01"] }
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
```

### Query 5: Listar los clientes que han realizado envíos en una determinada oficina.

```js
db.getCollection('oficinas').aggregate([
    {
        $match: {
          oficina_id: 2
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
```

### Query 6: Listar los envíos de todas las oficinas con estatus de entregado.

```js
db.getCollection('oficinas').aggregate([
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
```

### Query 7: Listar los clientes y sus envíos que se han remitido por el servicio terrestre considerando todas las oficinas.

```js
db.getCollection('oficinas').aggregate([
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
```

### Query 8: Listar los clientes y sus envíos se han remitido por el servicio express considerando una oficina en específico.

```js
db.getCollection('oficinas').aggregate([
{
    $match: {
      oficina_id: 1
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
```



## Endpoints

### GET http://localhost:3000/paqueteria/oficinas/listar-oficinas
- **Descripción**: Listar los datos de todas las oficinas.
- **Respuesta**:
    + status: 202
    ```json
    [
        {
            "direccion":{
                "calle":"Calle Norte",
                "numero":"202",
                "ciudad":"Bilbao",
                "codigo_postal":"48001"
            },
            "oficina_id":1,
            "nombre":"Oficina Norte",
            "telefono":"+34 901 234 567",
            "email":"norte@empresa.com",
            "Envios":[{
                "dimensiones":{
                    "alto":32,
                    "ancho":24,
                    "profundidad":18
                },
                "_id":"674fed983f397808ae8f0cb7",
                "envio_id":30,
                "fecha":"2024-11-10T00:00:00.000Z",
                "oficina_destino":"Oficina Sur",
                "tipo_envio_id":1,
                "curp":"KLMN910318HDFGGH10",
                "peso":3.5,
                "costo_total":165,
                "Estatus":"tránsito"
            },]
        },
    ]
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Oficinas no encontradas" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### GET http://localhost:3000/paqueteria/envios/query2/1
- **Descripción**: Listar los envíos realizados en determinada oficina con estatus en tránsito.
- **Parametros**:
    + oficina_id: ID de la oficina para consultar.
- **Respuesta**:
    + status: 202
    ```json
    [
        {
            "nombre":"Oficina Norte",
            "Envios":[{
                "envio_id":30,
                "fecha":"2024-11-10",
                "oficina_destino":"Oficina Sur",
                "tipo_envio_id":1,
                "curp":"KLMN910318HDFGGH10",
                "peso":3.5,
                "dimensiones":{
                    "alto":32,
                    "ancho":24,
                    "profundidad":18
                },
                "costo_total":165,
                "Estatus":"tránsito"
            },
            {
                "envio_id":14,
                "fecha":"2024-11-10",
                "oficina_destino":"Oficina Noreste",
                "tipo_envio_id":1,
                "curp":"MNOP930715MPRZXT04",
                "peso":3.5,
                "dimensiones":{
                    "alto":32,
                    "ancho":24,
                    "profundidad":18
                },
                "costo_total":165,
                "Estatus":"tránsito"
            },
            {
                "envio_id":2,
                "fecha":"2024-11-02",
                "oficina_destino":"Oficina Sur",
                "tipo_envio_id":2,
                "curp":"EFGH920321MGRJKL02",
                "peso":3.2,
                "dimensiones":{
                    "alto":35,
                    "ancho":25,
                    "profundidad":10
                },
                "costo_total":175.5,
                "Estatus":"tránsito"
            }]
        }
    ]
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Sin registro de envios" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### GET http://localhost:3000/paqueteria/envios/query3/2
- **Descripción**: Listar los envíos que utilizan un tipo específico de envío.
- **Parametros**:
    + tipo_envio_id: ID del tipo de envio para consultar.
- **Respuesta**:
    + status: 202
    ```json
    [
        {
            "Envios":[{
                "envio_id":25,
                "fecha":"2024-11-10",
                "oficina_destino":"Oficina Este",
                "tipo_envio_id":2,
                "curp":"QRST870224HSRRWW05",
                "peso":3.5,
                "dimensiones":{
                    "alto":32,
                    "ancho":24,
                    "profundidad":18
                },
                "costo_total":165,
                "Estatus":"pendiente"
            },]
        },
    ]
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Sin registro de envios" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### GET http://localhost:3000/paqueteria/envios/query4/abcd890123hdfrll01
- **Descripción**: Listar los envíos realizados por un cliente en específico en todas las oficinas.
- **Parametros**:
    + curp: CURP del cliente para consultar.
- **Respuesta**:
    + status: 202
    ```json
    [
        {
            "nombre":"Oficina Sur",
            "Envios":[{
                "envio_id":11,
                "fecha":"2024-11-10",
                "oficina_destino":"Oficina Oeste",
                "tipo_envio_id":1,
                "curp":"ABCD890123HDFRLL01",
                "peso":3.5,
                "dimensiones":{
                    "alto":32,
                    "ancho":24,
                    "profundidad":18
                },
            "costo_total":165,
            "Estatus":"tránsito"
            },]
        },
    ]
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Sin registro de envios" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### GET http://localhost:3000/paqueteria/envios/query5/2
- **Descripción**: Listar los clientes que han realizado envíos en una determinada oficina.
- **Parametros**:
    + oficina_id: ID de la oficina para consultar.
- **Respuesta**:
    + status: 202
    ```json
    [
        {
            "curp":"ABCD890123HDFRLL01",
            "nombre":"Juan",
            "apellidos":"Pérez López"
        },
        {
            "curp":"GHIJ920429HSRTXP09",
            "nombre":"Pedro",
            "apellidos":"Ortiz Aguilar"
        },
    ]
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Sin registro de envios" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### GET http://localhost:3000/paqueteria/envios/query6
- **Descripción**: Listar los envíos de todas las oficinas con estatus de entregado.
- **Respuesta**:
    + status: 202
    ```json
    [
        {
            "nombre":"Oficina Norte",
            "Envios":[]
        },
        {
            "nombre":"Oficina Sur",
            "Envios":[{
                "envio_id":1,
                "fecha":"2024-11-01",
                "oficina_destino":"Oficina Norte",
                "tipo_envio_id":1,
                "curp":"ABCD890123HDFRLL01",
                "peso":2.5,
                "dimensiones":{
                    "alto":30,
                    "ancho":20,
                    "profundidad":15
                },
                "costo_total":150,
                "Estatus":"entregado"
            }]
        },
    ]
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Sin registro de envios" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### GET http://localhost:3000/paqueteria/envios/query7
- **Descripción**: Listar los clientes y sus envíos que se han remitido por el servicio terrestre considerando todas las oficinas.
- **Respuesta**:
    + status: 202
    ```json
    [
        {
            "_id":"GHIJ920429HSRTXP09",
            "nombre_oficina":"Oficina Sur",
            "nombre_cliente":"Pedro",
            "apellidos_cliente":"Ortiz Aguilar",
            "envios":[{
                "envio_id":9,
                "fecha_envio":"2024-11-09",
                "destino":"Oficina Noreste",
                "tipo_envio_id":3
            },
            {
                "envio_id":29,
                "fecha_envio":"2024-11-10",
                "destino":"Oficina Norte",
                "tipo_envio_id":3
            },]
        },
    ]
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Sin registro de envios" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### GET http://localhost:3000/paqueteria/envios/query8/3
- **Descripción**: Listar los clientes y sus envíos se han remitido por el servicio express considerando una oficina en específico.
- **Respuesta**:
    + status: 202
    ```json
    [
        {
            "_id":"MNOP930715MPRZXT04",
            "nombre_cliente":"Ana",
            "apellidos_cliente":"Ramírez Sánchez",
            "envios":[{
                "envio_id":4,
                "fecha_envio":"2024-11-04",
                "destino":"Oficina Oeste",
                "tipo_envio_id":1
            }]
        }
    ]
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Sin registro de envios" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### POST http://localhost:3000/paqueteria/oficinas/nueva-oficina
- **Descripción**: Crea una nueva oficina.
- **Respuesta**:
    + status: 201
    ```json
    {
        "oficina_id":7,
        "nombre":"Oficina Sureste",
        "telefono":"+34 902 235 568",
        "email":"sureste@empresa.com",
        "direccion":{
            "calle":"Calle Mikgalard",
            "numero":"202",
            "ciudad":"Helghan",
            "codigo_postal":"48001"
        },
        "Envios":[],
        "_id":"674ff1c53f397808ae8f0cdc"
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### GET http://localhost:3000/paqueteria/oficinas/listar-oficina/1
- **Descripción**: Obtener los datos de una oficina determinada.
- **Parametros**:
    + oficina_id: ID de la oficina para consultar.
- **Respuesta**:
    + status: 202
    ```json
    {
        "direccion":{
            "calle":"Calle Norte",
            "numero":"202",
            "ciudad":"Bilbao",
            "codigo_postal":"48001"
        },
        "_id":"674fed481e0d2ef195bda0af",
        "oficina_id":1,
        "nombre":"Oficina Norte",
        "telefono":"+34 901 234 567",
        "email":"norte@empresa.com",
        "Envios": []
    }
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Oficina no encontrada" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### PUT http://localhost:3000/paqueteria/oficinas/actualizar-oficina/5
- **Descripción**: Actualiza los datos de una oficina determinada.
- **Parametros**: 
    + oficina_id: ID de la oficina para actualizar.
- **Respuesta**:
    + status: 202
    ```json
    {
        "direccion":{
            "calle":"Calle Outerworld",
            "numero":"202",
            "ciudad":"Helghan",
            "codigo_postal":"58021"
        },
        "_id":"674fed481e0d2ef195bda0b3",
        "oficina_id":5,
        "nombre":"Oficina Helghast",
        "telefono":"+34 931 264 167",
        "email":"helghast@empresa.com",
        "Envios": []
    }
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Oficina no encontrada" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### DELETE http://localhost:3000/paqueteria/oficinas/eliminar-oficina/7
- **Descripción**: Elimina los datos de una oficina determinada.
- **Parametros**: 
    + oficina_id: ID de la oficina para eliminar.
- **Respuesta**:
    + status: 202
    ```json
    {
        "direccion":{
            "calle":"Calle Mikgalard",
            "numero":"202",
            "ciudad":"Helghan",
            "codigo_postal":"48001"
        },
        "_id":"674ff1c53f397808ae8f0cdc",
        "oficina_id":7,
        "nombre":"Oficina Sureste",
        "telefono":"+34 902 235 568",
        "email":"sureste@empresa.com",
        "Envios":[]
    }
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Oficina no encontrada" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### POST http://localhost:3000/paqueteria/clientes/nuevo-cliente
- **Descripción**: Crea un nuevo cliente.
- **Respuesta**:
    + status: 201
    ```json
    {
        "curp":"SAGY020719HNTNRLA",
        "nombre":"John",
        "apellidos":"Helghast Pride",
        "email":"john.hp@example.com",
        "_id":"674ff36a3f397808ae8f0ce9"
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### GET http://localhost:3000/paqueteria/clientes/listar-clientes
- **Descripción**: Lista todos los clientes.
- **Respuesta**:
    + status: 202
    ```json
    [
        {
            "curp":"ABCD890123HDFRLL01",
            "nombre":"Juan",
            "apellidos":"Pérez López",
            "email":"juan.perez@example.com"
        },
        {
            "curp":"EFGH920321MGRJKL02",
            "nombre":"María",
            "apellidos":"Gómez Rodríguez",
            "email":"maria.gomez@example.com"
        },
    ]
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Clientes no encontrados" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### GET http://localhost:3000/paqueteria/clientes/listar-cliente/abcd890123hdfrll01
- **Descripción**: Obtiene los datos de un cliente determinado.
- **Parametros**: 
    + curp: CURP del cliente para consultar.
- **Respuesta**:
    + status: 202
    ```json
    {
        "curp":"ABCD890123HDFRLL01",
        "nombre":"Juan",
        "apellidos":"Pérez López",
        "email":"juan.perez@example.com"
    }
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Cliente no encontrado" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### PUT http://localhost:3000/paqueteria/clientes/actualizar-cliente/sagy020719hntnrla 
- **Descripción**: Actualiza los datos de un cliente determinada.
- **Parametros**: 
    + curp: CURP del cliente para actualizar.
- **Respuesta**:
    + status: 202
    ```json
    {
        "_id":"674ff36a3f397808ae8f0ce9",
        "curp":"SAGY020719HNTNRLA",
        "nombre":"Solari",
        "apellidos":"Smith Wesson",
        "email":"smith&wesson@example.com"
    }
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Cliente no encontrado" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### DELETE http://localhost:3000/paqueteria/clientes/eliminar-cliente/sagy020719hntnrla
- **Descripción**: Elimina los datos de un cliente determinado.
- **Parametros**: 
    + curp: CURP del cliente para eliminar.
- **Respuesta**:
    + status: 202
    ```json
    {
        "_id":"674ff36a3f397808ae8f0ce9",
        "curp":"SAGY020719HNTNRLA",
        "nombre":"Solari",
        "apellidos":"Smith Wesson",
        "email":"smith&wesson@example.com"
    }
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Cliente no encontrado" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### POST http://localhost:3000/paqueteria/tipos-envio/nuevo-tipo-de-envio
- **Descripción**: Crea un nuevo tipo de envio.
- **Respuesta**:
    + status: 201
    ```json
    {
        "tipo_envio_id":4,
        "tipo":"maritimo",
        "precio_por_kilometro":5,
        "tiempo_estimado":"4-7 días",
        "_id":"674ff5003f397808ae8f0cef"
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### GET http://localhost:3000/paqueteria/tipos-envio/listar-tipos-de-envio
- **Descripción**: Lista los tipos de envio.
- **Respuesta**:
    + status: 202
    ```json
    [
        {
            "tipo_envio_id":1,
            "tipo":"express",
            "precio_por_kilometro":5,
            "tiempo_estimado":"3-5 días"
        },
        {
            "tipo_envio_id":2,
            "tipo":"aéreo",
            "precio_por_kilometro":8.5,
            "tiempo_estimado":"1-2 días"
        },
    ]
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Tipos de envio no registrados" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

### PUT http://localhost:3000/paqueteria/tipos-envio/actualizar-tipo-de-envio/1
- **Descripción**: Actualiza los datos de un tipo de envio determinado.
- **Parametros**: 
    + tipo_envio_id: ID del tipo de envio a actualizar.
- **Respuesta**:
    + status: 202
    ```json
    {
        "_id":"674fed491e0d2ef195bda0bf",
        "tipo_envio_id":1,
        "tipo":"full",
        "precio_por_kilometro":5,
        "tiempo_estimado":"1-2 días"
    }
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Tipo de envio no registrado" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```
    

### DELETE http://localhost:3000/paqueteria/tipos-envio/eliminar-tipo-de-envio/4
- **Descripción**: Elimina los datos de un tipo de envio determinado.
- **Parametros**: 
    + tipo_envio_id: ID del tipo de envio para eliminar.
- **Respuesta**:
    + status: 202
    ```json
    {
        "_id":"674ff5003f397808ae8f0cef",
        "tipo_envio_id":4,
        "tipo":"maritimo",
        "precio_por_kilometro":5,
        "tiempo_estimado":"4-7 días"
    }
    ```

    + status: 404
    ```json
    { 
        "Servidor": "Tipo de envio no registrado" 
    }
    ```

    + status: 500
    ```json
    { 
        "Fatal": "error.message" 
    }
    ```

## Backend

### Arquitectura
    | lab-mongo
        | src
            | config
                | conexion.js
            | middleware
                | logger.js
            | models
                | cliente.js
                | oficina.js
                | tipoEnvio.js
            | routes
                | endpointsCliente.js
                | endpointsEnvios.js
                | endpointsOficina.js
                | endpointsTipoEnvio.js
            | server.js

### conexion.js

```js
const mondongo = require('mongoose')
const redis = require('redis')
require('dotenv').config()

mondongo.connect(process.env.URI_MONGO)
    .then(() => {
        console.log('MongoDB: conexión establecida.')
    }).catch((error) => {
        console.error('MongoDB: imposible establecer la conexión.\nMongoDB: ', error);
    })

const redisCon = redis.createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
})

redisCon.on('error', (error) => {
    console.error('Redis: imposible establecer contacto.\nRedis: ', error)
})

redisCon.connect().then(() => {
    console.log('Redis: contacto establecido')
}).catch((error) => {
    console.error('Redis: under attack take cover.\nRedis: ', error)
})

module.exports = { mondongo, redisCon }
```

### logger.js

```js
require('dotenv').config()
const redis = require('redis');

// Crea el cliente Redis
const client = redis.createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

// Conectar al cliente Redis al iniciar el servidor
client.connect().catch(err => {
    console.error('Error connecting to Redis:', err);
});

// Middleware que registra la solicitud y la respuesta y la almacena en Redis
module.exports = async (req, res, next) => {
    //res.data debe estar definido para las respuestas
    res.data = null;

    res.on('finish', async () => {
        const key = `${req.method}:${Date.now()}:${req.originalUrl}`;
        const valor = {
            clave: key,
            time: new Date(),
            req: {
                method: req.method,
                url: req.originalUrl,
                headers: req.headers,
                query: req.queryLog || 'N/A',
                body: req.body,
            },
            res: {
                statusCode: res.statusCode,
                statusMessage: res.statusMessage,
                response: res.data 
            }
        };

        // Guardar en Redis directamente el array de resultados
        const redisKey = `log:${valor.req.method}:${valor.time.toISOString()}`;
        
        // Serializa la respuesta para almacenarla en Redis
        const redisValue = JSON.stringify(valor, null, 2);

        try {
            await client.set(redisKey, redisValue);
        } catch (error) {
            console.error('Error storing data in Redis:', error);
        }
    });

    next();
};
```

### cliente.js

```js
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
})

const Cliente = model('Cliente', cliente_schema)
module.exports = Cliente
```

### oficina.js

```js
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
})

const Oficina = model('Oficina', oficina_schema)
module.exports = Oficina
```

### tipoEnvio.js

```js
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
```

### endpointsCliente.js

```js
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
```

### endpointsEnvios.js

```js
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
```

### endpointsOficina.js

```js
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
```

### endpointsTipoEnvio.js

```js
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
```

### server.js

```js
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
```

## Docker

### Descargar la imagen de Dockerhub

```bash
docker pull yasg07/lab-mongo:latest
```

### docker-compose.yml

```yml
#Author: YASG07

version: '3.9'

services:

#node.js app
  app:
    image: yasg07/lab-mongo
    container_name: node_app
    ports:
      -  "3000:3000"
    environment:
      -  URI_MONGO=mongodb://mongo_primary:27017,mongo_secondary01:27018,mongo_secondary02:27019/paqueteria
      -  REDIS_HOST=rediscachedb
      -  REDIS_PORT=6379
      -  PORT=3000
    depends_on:
      -  mongo_primary
      -  rediscachedb
    volumes:
      -  .:/usr/src/app
      -  /usr/src/app/node_modules
    command: ["sh", "-c", "sleep 30 && npm start"]
    networks:
      redlab:
        ipv4_address: 192.18.0.7

#Mongo primary
  mongo_primary:
    image: mongo
    container_name: mongo_primary
    command: ["--replSet", "rs0", "--bind_ip_all", "--port", "27017"]
    restart: always
    ports:
      -  "27017:27017"
    networks:
      redlab:
        ipv4_address: 192.18.0.3

#Mongo secondary 01
  mongo_secondary01:
    image: mongo
    container_name: mongo_secondary01
    command: ["--replSet", "rs0", "--bind_ip_all", "--port", "27018"]
    restart: always
    ports:
      -  "27018:27017"
    networks:
      redlab:
        ipv4_address: 192.18.0.4

#Mongo secondary 02
  mongo_secondary02:
    image: mongo
    container_name: mongo_secondary02
    command: ["--replSet", "rs0", "--bind_ip_all", "--port", "27019"]
    restart: always
    ports:
      -  "27019:27017"
    networks:
      redlab:
        ipv4_address: 192.18.0.5
  

  #redis-cache-database
  rediscachedb:
    image: redis
    container_name: rediscachedb
    ports:
      -  "6379:6379"
    networks:
      redlab:
        ipv4_address: 192.18.0.6

networks:
  redlab:
    driver: bridge
    ipam:
      config:
        - subnet: 192.18.0.0/24
```

## Ejecutar la aplicación

1. Levantar los contenedores mediante el archivo docker-compose.yml

```bash
docker compose up -d
```

2. Entrar en la consola de mongosh mediante el contenedor mongo_primary

```bash
docker exec -ti mongo_primary mongosh
```

3. Crear el replica set

```js
rs.initiate(
  {
    _id: "rs0",
    members: [
      { _id: 0, host: "192.18.0.3:27017" },
      { _id: 1, host: "192.18.0.4:27018" },
      { _id: 2, host: "192.18.0.5:27019" }
    ]
  }
)
```