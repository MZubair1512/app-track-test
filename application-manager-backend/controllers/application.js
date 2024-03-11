var ApplicationModel = require("../models/application");
const ObjectId = require('mongodb').ObjectId;

const postApplication = async(req,res)=>{
    const data ={
        status: req.body.status? req.body.status:"Applied",
        company: req.body.company,
        position: req.body.position,
        interviewDetail: req.body.interviewDetail,
        interviewDateTime: req.body.interviewDateTime,
        email:req.body.email,
      }
      try{
        const result = await ApplicationModel(data);
        result.save();
        console.log(data);  
        return res.status(200).send({message:"Application Added successfully"});
      }catch(e){
        console.log("Error Occured:" ,e);
      }
}

const getOneApplication = async(req,res)=>{
  console.log(req.query.id)
  try{
     const result = await ApplicationModel.find({_id:req.query.id});
     console.log(result);
     return res.status(200).json({data:result});
    }catch(e){
      console.log("Error Occured:",e);
    }
}


const getApplication = async(req,res)=>{
    try{
       const result = await ApplicationModel.find({email:req.query.email}).sort({'interviewDateTime':1});
       console.log(result);
       return res.status(200).json({data:result});
      }catch(e){
        console.log("Error Occured:",e);
      }
}

const deleteApplication = async(req,res)=>{
  try{
     let response = await ApplicationModel.deleteOne({_id: req.query.id });
     if(response){
      ApplicationModel.find({email:req.query.email}).then(
        (result) => {
          console.log(result);
          return res.status(200).json({data:result});
        }
      );
     }else{
      return res.status(400).json({message: 'Error in deletion'});
     } 
 
    }catch(e){
      console.log("Error Occured:",e);
    }
}

const updateApplication = async(req,res)=>{
  const data ={
    status: req.body.status? req.body.status:"Applied",
    company: req.body.company,
    position: req.body.position,
    interviewDetail: req.body.interviewDetail,
    interviewDateTime: req.body.interviewDateTime,
    email:req.body.email,
  }
  try{
     let response = await ApplicationModel.findOneAndUpdate({_id: req.query.id },data);
     console.log(response)
     return res.status(200).send({message:"Application Updated successfully"});
    }catch(e){
      console.log("Error Occured:",e);
    }
}




  module.exports={
    post:postApplication,
    get:getApplication,
    delete:deleteApplication,
    getOne:getOneApplication,
    update:updateApplication
}