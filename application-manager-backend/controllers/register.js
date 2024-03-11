var userModel = require('../models/user.js');

const registerUser = async(req,res)=>{
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    const user = await userModel.findOne({email: data.email});
    if(user){
        return res.status(409).json({
            message: "User already exists"
        })
    }else{
        try{
            let doc = userModel(data);
            const result = await doc.save();
            console.log(result);
            return res.status(200).json({
                message: "User created successfully"
            })
          }catch(e){
            console.log("Error saving");
            return res.status(401).json({
                message: "User created successfully"
            })
          }
    }
}


module.exports = registerUser;