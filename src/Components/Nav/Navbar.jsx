import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";
import { useSelector } from 'react-redux';
const Navbar = () => {
  const {amount}=useSelector((state)=>state.ecommerce);

  return (
    <nav className='fixed z-50 w-full top-0 sm:h-[17vh] h-[10vh] grid items-center bg-blue-400 text-white overflow-hidden '>
      <div className="flex justify-between items-center px-7">
        <div>
            <h1 className='sm:text-4xl text-xl font-bold italic'>
            🧠redux
            </h1>
            </div>
        <div className='relative'><FaCartArrowDown className='sm:w-10 sm:h-10 w-5 h-5 text-gray-200'/>
        <div className="absolute flex justify-center items-center -top-2 -right-2 text-white rounded-full sm:w-5 sm:h-5 bg-red-600 ">
            <p className='text-x'>{amount}</p>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
