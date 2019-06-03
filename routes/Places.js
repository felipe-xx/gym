const { CitiesSchema } = require('../models/PlacesSchema');
const express = require('express');
const routerPlaces = express.Router();
 
routerPlaces.post('/', async (req, res) => {

    place = new PlacesSchema({
        name: req.body.name
    });
    await place.save();
    console.log('Siiii');
    res.send(place);
});

// Aañadimos los listeners

routerPlaces.get('/', (req, res) => {
    res.send(200, {cities: []})
});

routerPlaces.get('/:placeId', (req, res) =>{
    
});


routerPlaces.put('/:placeId', (req, res) => {
    
});

routerPlaces.delete('/:placeId', (req, res) => {
    
});

 
module.exports = routerPlaces;