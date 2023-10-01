const http = require('http');
const path = require('path');
const express = require('express');
const morgan = require('morgan')
const { Console } = require('console');

//
const app = express()
//


const { cors } = require('./cors.js');
app.use(cors)

// Settings
app.set('port',3001);
app.set('views', path.join(__dirname, '../view') );
app.set('view engine','ejs');

// Middleware
app.use( morgan('dev') );
app.use( express.json() );
app.use( express.urlencoded({ extended: false }) );

// Static Files
app.use( express.static(path.join(__dirname,"../public")) )

// BREAK POINTS
// RAIZ
app.get('/', (req, res) => {
res.render('./indexS1.ejs');
});

// ACCESS
app.get('/access', (req, res) => {
res.send('Hola desde Servidor1');
});

// 404 handler
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

app.listen(app.get('port'), () => {
console.log( `Server listen at port ${app.get('port')}`);
});