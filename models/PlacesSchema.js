/* 
 * Felipe Cáceres
 * Model {users}
 */

'use strict'
 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlacesSchema = new Schema({
    name: String,
    idCiti: Number
});

module.exports = mongoose.model('PlacesSchema', PlacesSchema);