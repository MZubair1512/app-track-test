import React from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from '../apis/logout'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="text-white font-[Poppins] body-font bg-backgroundLogin">
      <div className="sm:w-[100vw] sm:h-[15vh] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-[#00000050]">
        <NavLink to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src="https://media.discordapp.net/attachments/1086616304687009802/1216355717959913593/image.png?ex=66001689&is=65eda189&hm=a78418cb4fccfa4c925bd2e09dde7668600931159998ee2b03c22de44909d4fe&=&format=webp&quality=lossless&width=45&height=45" alt="" />
          <span className="ml-3 text-xl font-[PoppinsBold]">Application Tracker</span>
        </NavLink>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to="/Add" className="mr-5 hover:text-[#7970fb] m-3">Add Application/Interview</NavLink>
          <NavLink to="/View" className="mr-5 hover:text-[#7970fb] m-3">View Applications</NavLink>
        </nav>
        <button onClick={()=>logout(navigate)} className="inline-flex items-center bg-gray-100 text-black border-0 py-1 px-3 focus:outline-none hover:text-[#7970fb] hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Log out
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header