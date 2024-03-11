import React,{useContext,useEffect,useState} from 'react'
import Header from '../components/header.jsx'
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [data ,setdata] = useState();
  const [email,setemail] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    let mail = localStorage.getItem('email');
    if(!mail){
      navigate("/login");
    }
    setemail(mail);
},[]);

  return (
     <div className='w-screen h-screen'>
      <Header/>
      <div className="w-full h-full bg-white">  
      <div className=" flex flex-col w-full h-2/3 items-center justify-center text-black">
        <span className="text-7xl font-[PoppinsBold]">
          Welcome 
        </span>
        <div className="mt-6"></div>
        <span className="text-7xl font-[Poppins]">
          {email}! 
        </span>

        </div> 


      </div>
    </div>

     
  )
}

export default MainPage