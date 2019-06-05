/* 
 * Felipe Cáceres
 * Model {cities}
 */

'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitiesSchema = new Schema({
    name: String
});
 
module.exports = mongoose.model('CitiesSchema', CitiesSchema);
