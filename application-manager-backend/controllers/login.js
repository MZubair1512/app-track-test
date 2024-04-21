var userModel = require('../models/user.js');

const loginUser = async(req,res)=>{
    const data = {
        email: req.body.email,
        password: req.body.password
    }
    if(data.password == "" || data.email == "" || data.password==null || data.email== null || data.password==undefined || data.email==undefined){
        return res.status(401).json({ message: "Email/Password Field cannot be blank"});
    }
    const user = await userModel.findOne({email:data.email});
    if(user){
        if(user.password==req.body.password){
            return res.status(200).json({ message: "Login successful", user: user});
        }else{
            return res.status(401).json({ message: "Invalid Email/Password"});
        }
    }else{
        return res.status(401).json({ message: "Invalid Email/Password"});
}}

module.exports = loginUser;