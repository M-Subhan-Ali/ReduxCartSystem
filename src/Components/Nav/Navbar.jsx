import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";
import { useSelector } from 'react-redux';
const Navbar = () => {
  const {amount}=useSelector((state)=>state.ecommerce);

  return (
    <nav className='fixed z-50 w-full top-0 h-[17vh] grid items-center bg-blue-400 text-white overflow-hidden '>
      <div className="flex justify-between items-center px-7">
        <div>
            <h1 className='text-4xl font-bold italic'>
            🧠redux
            </h1>
            </div>
        <div className='relative'><FaCartArrowDown className='w-10 h-10 text-gray-200'/>
        <div className="absolute flex justify-center items-center -top-2 -right-2 text-white rounded-full w-5 h-5 bg-red-600 ">
            <p>{amount}</p>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
