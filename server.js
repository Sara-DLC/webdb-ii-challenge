const express = require('express');

const carsRouter =require('./cars/cars-Router');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.send(`Hello from server 4000`)
});




module.exports = server;