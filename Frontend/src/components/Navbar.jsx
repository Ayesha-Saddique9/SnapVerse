import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isOpen,setisOpen] = useState(false)
  function toggleMenu(){
   setisOpen(!isOpen);
  }
  return (
    <div className='bg-white border-b border-gray-200 h-14 lg:h-16 w-full sticky z-50 top-0 backdrop-blur-md bg-white/90 backdrop:blur-md shadow'>
      <div className='flex justify-between items-center px-6 md:px-8 lg:px-16 pt-2'>
        <Link to='/'><h1 className='font-bold text-2xl lg:text-3xl tracking-tight text-gray-900'>Snap<span className='bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent text-xl lg:text-2xl'>Verse</span></h1></Link>
        <div className='lg:flex md:flex hidden justify-center items-center outline-none list-none gap-14 px-4 mt-2'>
            <Link to='/' className='text-medium text-gray-600 font-medium hover:text-indigo-600 transition-all duration-200 cursor-pointer hover:border-b-2 hover:pb-1'>Home</Link>
            <Link to='/create' className='text-medium text-gray-600 font-medium hover:text-indigo-600 transition-all duration-200 cursor-pointer hover:border-b-2 hover:pb-1'>Create</Link>
            <Link to='/posts' className='text-medium text-gray-600 font-medium hover:text-indigo-600 transition-all duration-200 cursor-pointer hover:border-b-2 hover:pb-1'>Posts</Link>
        </div>
        {
          isOpen ?<div><IoClose onClick={toggleMenu} className='text-gray-700 text-2xl mt-2 lg:hidden md:hidden'/></div>:< IoMenu onClick={toggleMenu} className='text-gray-700 mt-1 text-2xl lg:hidden md:hidden' />
}
      </div>
        {
          isOpen && <div className='flex justify-end px-6 md:hidden lg:hidden'>
          <div className='flex flex-col gap-2 mt-4 w-22 rounded-md h-26 bg-white items-center justify-center px-3'>
            <Link to='/' className='text-sm text-gray-600 font-medium hover:text-indigo-600 transition-all duration-200 cursor-pointer hover:border-b-2 hover:pb-1'>Home</Link>
            <Link to='/create' className='text-medium text-gray-600 font-medium hover:text-indigo-600 transition-all duration-200 cursor-pointer hover:border-b-2 hover:pb-1'>Create</Link>
            <Link to='/posts' className='text-medium text-gray-600 font-medium hover:text-indigo-600 transition-all duration-200 cursor-pointer hover:border-b-2 hover:pb-1'>Posts</Link>
          </div>
          </div>
        }
    </div>
  )
}

export default Navbar
