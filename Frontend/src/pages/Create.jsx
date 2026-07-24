import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios';

function Create() {

  const handleSubmit = async (e)=>{
       e.preventDefault();

       const formData = new FormData(e.target);
       axios.post('http://localhost:8080/create-post',formData)
       .then((res)=>{
        alert('Post created successfully!');
        console.log(res)
       })
  }
  return (
    <div className='bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 min-h-[90vh] md:min-h-[95vh]'>
      <h1 className='lg:text-3xl md:text-3xl text-2xl md:font-medium lg:font-medium font-sm tracking-tight text-center pt-12'>Create New Post</h1>
      <p className='text-gray-500 text-sm text-center mt-2'>Share your moments with the world.</p>
      <div className='flex justify-center px-6 py-2 md:py-14'>
      <div className='lg:w-1/3 md:w-3/4 w-full md:min-h-[37vh] lg:min-h-[60vh] bg-white lg:mt-6 mt-12 rounded-xl shadow-xl'>
      <form className='flex flex-col px-6 md:px-8 lg:px-10' onSubmit={handleSubmit}>
        <label className='font-bold mt-8 text-base md:text-lg lg:text-lg'>Upload Image</label>
         <input type="file" name="image" accept='image/*' className='w-full lg:w-full bg-gray-100 border border-gray-200 px-2 md:px-8 lg:px-12 rounded-xl mt-2 py-2 lg:py-3 file:bg-gray-200 hover:file:bg-gray-300 file:mr-5 file:px-2 md:file:px-4 lg:file:px-6 file:py-2 file:rounded-lg file:text-indigo-600 file:font-medium' required/>
         <label className='font-bold mt-6 text-lg'>Caption</label>
         <textarea name="caption" id="" placeholder='Enter Caption' className='bg-gray-100 border border-gray-200 px-4 mt-2 rounded-xl py-3' required></textarea>
         <button className='flex justify-center items-center mt-6 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 text-white px-10 md:py-4 md:text-lg py-3 gap-2 rounded-lg cursor-pointer font-semibold mb-4'>create post <FaArrowRightLong className='mt-1'/></button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default Create
