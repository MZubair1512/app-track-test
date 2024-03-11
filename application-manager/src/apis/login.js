import axios from 'axios';
import Toast from '../components/Toast.jsx'

const loginRequest = async function(mail, pass,navigate){
    const data = {
        email: mail,
        password: pass
    }
    console.log(data);
    try{
       await axios.post('http://localhost:4000/users/login',data).then((response) =>{
            if(response.status === 200){
                Toast("success","Login successfully");
                localStorage.setItem('email', mail);
                return navigate('/');
            }
        }).catch((error) => {
            Toast("error","Invalid email/password")
            console.log(error);
        });
    }catch(error) {
        console.log(error);
    }
    
}

export {loginRequest}