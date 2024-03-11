const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    interviewDetail: {
        type: String,
        required: true 
    },
    interviewDateTime: {
        type: String,
        required: true 
    },
    email:{
        type: String,
        required: true
    }
},{timestamps:true});

const ApplicationModel = mongoose.model('Application', ApplicationSchema);

module.exports = ApplicationModel;
