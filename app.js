/* 
 * Felipe Cáceres
 */

'use strict';

const express    = require('express');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const handleBars = require('express-handlebars');
const router     = express.Router();
const cors       = require('cors');
const session    = require('express-session');


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
app.use(router);
app.use(cors());

app.engine('.hbs', handleBars({
    defaultlayout: 'default',
    extname      : 'hbs'
}));
app.set('view engine', '.hbs');


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


// Configurar cabeceras y cors


// Carga una vista HTML simple donde irá nuestra Single App Page
// Angular Manejará el Frontend
app.get('/login', (req, res) => {						
    res.render('login');				
});