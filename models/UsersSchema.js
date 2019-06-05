/* 
 * Felipe Cáceres
 * Model {users}
 */

'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt   = require('bcrypt-nodejs');
 
const UsersSchema = new Schema({
    firstName   : String,
    lastName    : String,    
    email       : {type: String, unique: true, lowercase: true},
    password    : {type: String, select: false},
    singupDate  : {type: Date, default: Date.now() },
    lastLogin   : Date,
    type        : Number
});


UsersSchema.pre('save', function(next, done) {
    let user = this;    
    bcrypt.genSalt(10, (err, salt) => {
        if(err) return next(err);
        
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if(err) return next(`Ha ocurrido un error ${err}`);
            
            user.password = hash;
            next();
        });
    });
});


module.exports = mongoose.model('UsersSchema', UsersSchema);
