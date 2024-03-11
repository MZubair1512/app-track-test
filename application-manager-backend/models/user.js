let mongoose = require('mongoose');

let user = new mongoose.Schema({
    name: {type:String,  required:true , trim: true},
    email: {type:String,  required:true, trim: true},
    password: {type:String,  required:true, trim: true},
      
},{timestamps:true});


const userModel = mongoose.model('User', user);
module.exports = userModel;

