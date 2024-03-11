import axios from "axios";
import Toast from "../components/Toast.jsx";
import { useContext } from "react";
const postApplication = async(status,company,position,date,details,email) =>{
    try{
        const response = await axios.post("http://localhost:4000/applications/post",{
            status: status,
            company: company,
            position: position,
            interviewDetail: details,
            interviewDateTime:date,
            email: email
        });
        console.log(status);
        if(response.status==200){
            Toast("success","Successfully Application Posted");
        }else{
            Toast("error","Something went wrong");
        }

    }catch(err){
        console.log(err);
    }
}

const getApplication = async(email,handle,data)=>{
    try{
        let res = await axios.get("http://localhost:4000/applications/get",{
            params: {
              email: email,
            }
          });
          if(data!==res.data.data){
            handle(res.data.data);
          }
    }catch(err){
        console.log(err);
    }
    
    
}

const deleteApplication = async(id,email,handle,navigate)=>{
    try{
        let res = await axios.delete("http://localhost:4000/applications/delete",{
            params: {
              id: id,
            }
          });
        handle(res.data.data);
        window.location.reload();
    }catch(err){
        console.log(err);
    }
    
    
}

const updateApplication = async(id,email,status,company,position,date,details,handle,navigate)=>{
    try{
        let res = await axios.post("http://localhost:4000/applications/update",{
            status: status,
            company: company,
            position: position,
            interviewDetail: details,
            interviewDateTime:date,
            email: email
        },{
            params: {
              id: id,
            }
          });
        handle(res.data.data);
        Toast("success","Successfully updated!")
        navigate("/View");
    }catch(err){
        console.log(err);
    }
    
    
}


const getOneApplication = async(id,setData)=>{
    try{
        let res = await axios.get("http://localhost:4000/applications/getOne",{
            params: {
              id: id,
            }
          });
          console.log(res);
          setData(res.data.data);
    }catch(err){
        console.log(err);
    }
    
    
}
export {postApplication,getApplication,deleteApplication,getOneApplication,updateApplication}