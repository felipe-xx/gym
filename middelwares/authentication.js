/* 
 * Felipe Cáceres
 * Middelware {auth}
 */

const services = require('../services/token');

function isAuth(req, res, next){
    if(!req.headers.authorization){
        return res.status(403).send({message: 'Usuario sin autorización'});
    }

    
    const token = req.headers.authorization.split(' ')[1];
    services.decodeToken(token).then(response =>{
        req.user = response;
        next();
    }).catch(response =>{
        res.status(response.status);
    });

}

module.exports = isAuth;
