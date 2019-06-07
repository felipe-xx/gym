/* 
 * Felipe Cáceres
 * Controller {auth}
 */

'use strict'

const mongoose      = require('mongoose');
const UsersSchema   = require('../models/UsersSchema');
const ServiceAuth   = require('../services/token');
const bcrypt        = require('bcrypt-nodejs');
const globlals      = require('../globals');



function singUp(req, res){
    const User = new UsersSchema({
        firstName   :  req.body.firstName,
        lastName    :  req.body.lastName,
        email       :  req.body.email,
        password    :  req.body.password,
        type        :  req.body.type
   
    });
    User.save((err) => {
        if(err) res.status(500).send({message: 'Error creadno el usuario'});     
        return res.status(200).send({token: ServiceAuth.createToken(User)})
    });
}
function singIn(req, res){

    UsersSchema.findOne({ email: req.body.user}, (err, user) => {      
        if(err) return res.status(500).send({message: `Hubo un error: ${err}`});
        if(!user) return res.status(404).send({message: 'No existe el usuario'});

        bcrypt.compare(req.body.pass, user.password, function (err, result) {
            if (result) {   
                req.user = user;
                res.status(200).send({
                    message : 'Bienvenido',
                    token   : ServiceAuth.createToken(user) 
                });     
                globlals.userData = {};
                globlals.userData.firstName = user.firstName;
                globlals.userData.lastName  = user.lastName;
                globlals.userData.type      = user.type; 
                console.log(globlals.userData);
            } else {
                res.send('Usuario o clave incorrecta');
            }
        });     

    });
}

module.exports = {
    singUp,
    singIn
};