import React, { useState,useContext } from 'react'
import Toast from '../components/Toast';
import { loginRequest } from '../apis/login';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { UserContext } from '../contexts/Usercontext';

const Login = () => {
    const [email,setemail] = useState();
    const [password,setpassword] = useState();
    const navigate = useNavigate();

    const handlechangeEmail = (e) => {
      console.log(e.target.value);
      setemail(e.target.value);
    }

    const handlechangePassword = (e) => {
      console.log(e.target.value);
      setpassword(e.target.value);
    }

    return (
        <>
        <div className='h-screen w-screen bg-backgroundLogin bg-cover'>
          
        <div className="flex font-[Poppins] min-h-full h-full w-full flex-col justify-center px-6 py-12 lg:px-8 text-white bg-[#00000050]">
          <div className="sm:mx-auto sm:w-full">
            <h1 className="font-['PoppinsBold'] font-extrabold  text-5xl w-full text-center">Application Manager</h1>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">Sign in to continue</h2>
          </div>
    
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6" action="#">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-balance">Email address</label>
              <div className="mt-2">
                <input onChange={(e)=>handlechangeEmail(e)} id="email" name="email" type="email" placeholder="Ex: reh40@gmail.com" autoComplete="email" required className="block placeholder:text-gray-500 w-full rounded-md border-0 bg-white/5 py-1.5 focus:outline-none outline-none text-white p-3 shadow-sm ring-1 ring-inset ring-slate-500 sm:text-sm sm:leading-6"/>
              </div>
            </div>
    
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6">Password</label>
              <Link to="/register"><span className='text-purple-600'>Register</span></Link>
            </div>
            <div className="mt-2">
              <input onChange={(e)=>handlechangePassword(e)} id="password" name="password" type="password" autoComplete="current-password" placeholder='Ex: 123@90' required className="block placeholder:text-gray-500 w-full rounded-md border-0 bg-white/5 py-1.5 focus:outline-none outline-none text-white p-3 shadow-sm ring-1 ring-inset ring-slate-500 sm:text-sm sm:leading-6"/>
            </div>
          </div>
    
          <div>
            <button onClick={()=>loginRequest(email,password,navigate)} className="flex w-full justify-center rounded-md bg-[#fff] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-white-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500">Sign in</button>
          </div>
          </div>
    
        </div>
      </div>
      </div>
      </>
        )
}

export default Login