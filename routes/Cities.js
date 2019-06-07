/* 
 * Felipe Cáceres
 * Routes {Cities}
 */

const CitiesSchema      = require('../models/CitiesSchema');
const express           = require('express');
const routerCities      = express.Router();
const auth              = require('../middelwares/authentication');
const cors              = require('cors');
const globlals          = require('../globals');

routerCities.post('/',cors(), async (req, res) => {
    
    console.log('---> ', globlals.userData.type);
    if(globlals.userData.type == 1){
        citie = new CitiesSchema({
            name: req.body.name
        });
        await citie.save();
        res.send(citie);
    }else{
        res.send('No tiene permisos para esta operación');
    }
    
});

// Aañadimos los listeners

routerCities.get('/', auth, cors(), (req, res) => {
    CitiesSchema.find({}, (err, cities) => {
        if(err) return res.status(500).send({message: `Error en la petición. ${err}`});
        if(!cities) return res.status(404).send({message: 'No se encontraron la ciudades'});
        res.status(200).send({cities: cities});
    });    
});


routerCities.get('/:citiId', auth, (req, res) =>{
    let citiId = req.params.citiId;
    CitiesSchema.findById(citiId, (citi, err) => {
        if(err) return res.status(500).send({message: `Error en la petición. ${err}`});
        if(!citi) return res.status(404).send({message: 'No se encontró la ciudad'});
        
        res.status(200).send({citi: citi});
    });
});

routerCities.put('/:citiId', auth, (req, res) => {});

routerCities.delete('/:citiId',auth, (req, res) => {
    
});

module.exports = routerCities;