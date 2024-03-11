import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/header'
import TextArea from '../components/TextArea'
import InputField from '../components/inputField'
import { updateApplication } from '../apis/application'
import { getOneApplication } from '../apis/application'
import { useNavigate } from 'react-router-dom'


const Update = () => {
  const [status, setstatus] = useState();
  const [company, setcompany] = useState();
  const [position, setposition] = useState();
  const [interviewDetail, setDetails] = useState();
  const [interviewdt, setinterviewdt] = useState();
  const [email, setemail] = useState();
  const {id} = useParams();
  const [data, setdata] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    let mail = localStorage.getItem('email');
    if(!mail){
      navigate("/login");
    }
    setemail(mail);
    async()=> await getOneApplication(id,setdata);
  },[])


  const handlechangeStatus = (e) => {
    console.log(e.target.value);
    setstatus(e.target.value);
  }
  const handleChangeCompany = (e) => {
    console.log(e.target.value);
    setcompany(e.target.value);
  }

  const handleChangePosition = (e) => {
    console.log(e.target.value);
    console.log(status);
    setposition(e.target.value);
  }

  const handleChangeDetails = (e) => {
    console.log(e.target.value);
    setDetails(e.target.value);
  }

  const handlechangeInterviewdt = (e) => {
    console.log(e.target.value);
    setinterviewdt(e.target.value);
  }


  return (
    <>
    <Header />
    <div className="w-2/4 mx-[5%] my-[2%]">
        <p className='font-[PoppinsBold] mb-4'>Update Application</p>
      <InputField handleChange={handleChangeCompany} label={"Company"} color='black' placeholder={data? `${data[0]?.company}`:null}></InputField>
      <div className='my-3'></div>
      <label className='font-[Poppins] block text-sm font-medium leading-6'>      Application Status
      <select  onChange={handlechangeStatus} className='block placeholder:text-gray-500 w-full rounded-md border-0 bg-white/5 py-1.5 focus:outline-none outline-none p-3 shadow-sm ring-1 ring-inset ring-slate-500 sm:text-sm sm:leading-6'>
        <option value="Applied">Applied</option>
        <option value="Under Review">Under Review</option>
        <option value="Interview Scheduled">Interview Scheduled</option>    
        <option value="Offer Extended">Offer Extended</option>
      </select>
    </label>
      <div className='my-3'></div>
      <InputField handleChange={handleChangePosition} label={"Position"} color='black' placeholder={data? `${data[0]?.position}`:null}></InputField>
      <div className='my-3'></div>
      <InputField handleChange={handlechangeInterviewdt} label={"Interview's Date And Time"} type={"datetime-local"} color='black'></InputField>
      <div className='my-3'></div>
      <TextArea handleChange={handleChangeDetails} label={"Interview Details"} color='black' placeholder={data? `${data[0]?.interviewDetail}`:null}></TextArea>
      <div className='my-3 '></div>
      <button onClick={()=>updateApplication(id,email,status,company,position,interviewdt,interviewDetail,setdata,navigate)} className="inline-flex border-2 font-[PoppinsBold] border-slate-900 text-white bg-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-md">
          Update Application
      </button>
      {console.log(data)}
    </div>
    </>
  )

}

export default Update