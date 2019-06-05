/* 
 * Felipe Cáceres
 */

'use strict'

const express    = require('express');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const cities     = require('./routes/Cities');
const users      = require('./routes/Users');
const places     = require('./routes/Places');



/*
 * Modelos
 */


const CitiesSchema  =    require('./models/CitiesSchema');
const UsersSchema   =    require('./models/UsersSchema');
const PlacesSchema  =    require('./models/PlacesSchema');

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////


const app = express();
const port = process.env.PORT || 3000;
const server = require('http').Server(app);

// Para parsear el cuerpo de los mensajes que se obtienen
// desde el API REST

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/nopain', (err, res) =>{
    if(err) {
        return console.log(`Error conectando a DB ${err}`);
    }
    console.log('Conectados a la base de datos');
    
    app.listen(port, ()=>{
        console.log(`APP Corriendo en el puerto: ${port}`);
    });
});

app.use('/api/cities', cities);
app.use('/api/users', users);
app.use('/api/places', places);

// Carga una vista HTML simple donde irá nuestra Single App Page
// Angular Manejará el Frontend
app.get('*', function(req, res) {						
    //res.sendfile('./index.html');				
});