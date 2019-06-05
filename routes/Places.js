const { PlacesSchema } = require('../models/PlacesSchema');
const express = require('express');
const routerPlaces = express.Router();
 
routerPlaces.post('/', async (req, res) => {

    place = new PlacesSchema({
        name  :    req.body.name,
        idCiti:    req.body.idCiti
    });
    await place.save();
    console.log('Siiii PlacesSchema');
    res.send(place);
});

// Aañadimos los listeners

routerPlaces.get('/', (req, res) => {

});

routerPlaces.get('/:Id', (req, res) =>{
    
});

routerPlaces.put('/:userId', (req, res) => {
    
});

routerPlaces.delete('/:userId', (req, res) => {
    
});

 
module.exports = routerPlaces;