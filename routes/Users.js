/* 
 * Felipe Cáceres
 * Routes {Users}
 */

const UsersSchema     = require('../models/UsersSchema');
const express         = require('express');
const routerUsers     = express.Router();
const auth            = require('../controllers/auth');
const cors       = require('cors');

routerUsers.post('/', async (req, res) => {

    user = new UsersSchema({
        firstName:  req.body.firstName,
        lastName:   req.body.lastName,
        email:      req.body.email,
        password:   req.body.password,
        type:       req.body.type
    });
    await user.save();
    console.log('Siiii UsersSchema');
    res.send(user);
});


routerUsers.post('/singUp/', auth.singUp, (req, res) => {

});

routerUsers.post('/singIn/', auth.singIn);


routerUsers.get('/', (req, res) => {

});

routerUsers.get('/:userId', (req, res) =>{
    
});

routerUsers.put('/:userId', (req, res) => {
    
});

routerUsers.delete('/:userId', (req, res) => {});

 
module.exports = routerUsers;