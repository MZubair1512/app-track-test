import React from 'react'

const TextArea = ({label,handleChange,type="text",placeholder="",color="White",maxLength=500}) => {
  return (

    <div className='font-[Poppins]'>
        <div className="flex items-center justify-between">
            <label htmlFor={type} className="block text-sm font-medium leading-6">{label}</label>
        </div>
        <div className="mt-2">
            <textarea onChange={(e)=>handleChange(e)} maxLength={maxLength} rows={2} id={type} name={type} placeholder={placeholder} className={`block placeholder:text-gray-500 w-full rounded-md border-0 bg-white/5 py-1.5 focus:outline-none outline-none text-${color} p-3 shadow-sm ring-1 ring-inset ring-slate-500 sm:text-sm sm:leading-6`}/>
        </div>
    </div>
  )

}

export default TextArea