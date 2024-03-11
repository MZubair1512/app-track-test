import React,{useEffect} from 'react'
import {deleteApplication} from '../apis/application.js';
import { useNavigate } from 'react-router-dom';
const Table = ({data,setData}) => {
    const navigate = useNavigate();
  return (
    <div className="container flex justify-center pl-4 sm:mx-3 overflow-scroll">
        <div className="flex flex-col">
            <div className="w-full">
                <div className="border-b border-gray-200 shadow">
                    <table className="divide-y divide-gray-300 ">
                        <thead className="bg-black font-[Poppins]">
                            <tr>
                                <th className="px-6 py-2 text-xs text-gray-50">
                                    ID
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-50">
                                    Company
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-50">
                                    Position
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-50">
                                    Interview Time
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-50">
                                    Status
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-50">
                                    Interview Details
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-50">
                                Edit
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-50">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        {data?.map((data,index)=>(
                            <tbody className="bg-white divide-y divide-gray-300" key={index}>
                            <tr className="whitespace-nowrap">
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {data._id}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm text-gray-900">
                                       {data.company}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm text-gray-500">{data.position}</div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {data.interviewDateTime}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {data.status}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {data.interviewDetail}
                                </td>
                                <td className="px-6 py-4">
                                    <a onClick={()=>navigate(`/Update/${data._id}`)} className="px-4 py-1 text-sm cursor-pointer text-indigo-600 bg-indigo-200 rounded-full">Edit</a>
                                </td>
                                <td className="px-6 py-4">
                                    <a onClick={()=>deleteApplication(data._id,data.email,setData,navigate)} className="px-4 py-1 cursor-pointer text-sm text-red-400 bg-red-200 rounded-full">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                        ))}
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table