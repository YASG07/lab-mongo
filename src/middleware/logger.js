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