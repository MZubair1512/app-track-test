var userModel = require('../models/user.js');

const loginUser = async(req,res)=>{
    const data = {
        email: req.body.email,
        password: req.body.password
    }
    const user = await userModel.findOne({email:data.email});
    if(user){
        if(user.password==req.body.password){
            return res.status(200).json({ message: "Login successful", user: user});
        }
    }else{
        console.log(user);
        return res.status(401).json({ message: "Invalid username/password"});
}}

module.exports = loginUser;