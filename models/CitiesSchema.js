/* 
 * Felipe Cáceres
 * Model {cities}
 */

'use strict'

const mongoose = require('mongoose');
 
const CitiesSchema = mongoose.model('CitiesSchema', new mongoose.Schema({
    name: String
}));
 

exports.CitiesSchema = CitiesSchema;
