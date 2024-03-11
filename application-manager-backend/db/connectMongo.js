let mongoose = require('mongoose');

const connectMDB = async(DATABASE_URL)=>{
    try{
        await mongoose.connect(DATABASE_URL);
        console.log("Connected to MongoDB");
    }catch(e){
        console.log("Error connecting to MongoDB ",e);
    }     
}

module.exports = connectMDB;