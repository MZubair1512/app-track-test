import axios from 'axios';

const logout = (navigate)=>{
    localStorage.removeItem('email');
    navigate('/login');
}

export{logout}