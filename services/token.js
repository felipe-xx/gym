/* 
 * Felipe Cáceres
 * Service {token}
 */

'use strict'

const jwt        = require('jwt-simple');
const moment     = require('moment');
const config     = require('../config');
const bodyParser = require ('body-parser');

function createToken(user){
    const payload = {
        sub: user.id,
        iat: moment().unix(),
        exp: moment().add(15, 'days').unix()
    };
    
    return jwt.encode(payload, config.CONFIG_TOKEN);
}


function decodeToken(token){
    const decode = new Promise((resolve, reject) => {
        try{
            const payload = jwt.decode(token, config.CONFIG_TOKEN);
            
            if(payload.exp < moment().unix()){
                reject({
                    status: 401,
                    message: 'Token vencido'
                });
            }
            
            resolve(payload.sub);
            
        }catch (e){
            reject({
                status: 500,
                message: 'Token invalido'
            });
        }
    });
    
    return decode;
}


module.exports = {
  createToken,
  decodeToken
};