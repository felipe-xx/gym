const { CitiesSchema } = require('../models/CitiesSchema');
const express = require('express');
const routerCities = express.Router();
 
routerCities.post('/', async (req, res) => {

    citie = new CitiesSchema({
        name: req.body.name
    });
    await citie.save();
    console.log('Siiii');
    res.send(citie);
});

// Aañadimos los listeners

routerCities.get('/api/cities/', (req, res) => {
    res.send(200, {cities: []})
});

routerCities.get('/api/cities/:citiId', (req, res) =>{
    
});


routerCities.put('/api/cities/:citiId', (req, res) => {
    
});

routerCities.delete('/api/cities/:citiId', (req, res) => {
    
});

 
module.exports = routerCities;