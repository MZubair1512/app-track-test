import React,{useEffect, useState,useMemo} from 'react'
import Header from '../components/header'
import {getApplication} from "../apis/application.js"
import Table from "../components/Table";
import { useNavigate } from 'react-router-dom';

const View = () => {
  const [data , setData]= useState();
  const navigate = useNavigate();
  useEffect(() =>{
    let mail = localStorage.getItem('email');
    if(!mail){
      navigate("/login");
    }
    getApplication(mail,setData,data);
  },[])

  return (
    <>
    <Header />
    <div className="mt-4"></div>
    <div className="font-Poppins text-center font-bold mb-4">Sorted By Interview Date and Time</div>
    <Table data={data} setData={setData}></Table>
    </>

  )
}

export default View