const cors = require('cors');

const corsOptions = {
    origin: ['http://localhost:3001','http://localhost:3002'], // Cambia esto al dominio permitido
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilita las cookies de autenticación (si es necesario)
    optionsSuccessStatus: 204, // Un código de respuesta exitosa para las opciones pre-vuelo
  };



module.exports = {
    cors: cors(corsOptions),
}