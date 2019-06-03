/* 
 * Felipe Cáceres
 * Model {users}
 */

'use strict'

const mongoose = require('mongoose');
 
const UsersSchema = mongoose.model('UsersSchema', new mongoose.Schema({
    firstName: String,
    lastName: String,    
    email: String,
    password: String,
    type: Number
}));
 

exports.UsersSchema = UsersSchema;