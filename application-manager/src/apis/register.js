import axios from 'axios';
import Toast from '../components/Toast.jsx'
import { redirect } from "react-router-dom";


const registerRequest = async function(mail, pass,name,navigate){
    const data = {
        email: mail,
        password: pass,
        name: name
    }
       axios.post('http://localhost:4000/users/register',data).then((response) =>{
            if(response.status === 200){
                 Toast("success","Registered successfully");
                return navigate('/login');
            }
            console.log(response)
        }).catch((error) => {
            if(error.response.status === 409){
                Toast("error","Already registered with this email");
               return redirect('/');
           }else{
            Toast("error","Something Went Wrong");
            console.log(error);
           }
           
        });    
}

export {registerRequest}