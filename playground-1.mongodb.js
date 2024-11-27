//#region Q0: Crear el escenario de datos con la correspondiente integridad referencial en un único archivo. 
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
db.createCollection('tipo_de_envio');

//new documents in the collection
db.getCollection('tipo_de_envio').insertMany([
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

//#endregion