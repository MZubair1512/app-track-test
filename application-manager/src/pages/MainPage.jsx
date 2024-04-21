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
      <div className=" flex w-full h-2/3 items-center justify-center text-black">
        <span className="text-4xl font-[PoppinsBold]">
           Welcome 
        </span>
        <span className="mx-4 border-[#000000] bg-[#000000d2] p-2 text-[#fff] border-8 text-2xl font-[Poppins]">
          {email}!
        </span>
        </div> 
      </div>
    </div>

     
  )
}

export default MainPage