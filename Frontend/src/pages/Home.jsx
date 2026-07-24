import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 min-h-[90vh]'>
      
      {/* Home Banner */}
      <div className='grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 px-6 md:px-8 lg:px-14'>
        <div className='md:flex md:flex-col md:justify-center md:items-center xl:items-start'>
        <div className='lg:mt-10 md:mt-14 mt-12'>
           <h1 className='lg:text-6xl text-4xl md:text-5xl font-bold leading-tight -mb-3'>Share Your Story</h1><br />
      <span className='lg:text-6xl text-4xl md:text-5xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent font-bold'>Beautifully</span>
        </div>
        <p className='mt-8 text-gray-500 text-lg lg:text-xl leading-7 max-w-md'>SnapVerse is the modern space to share your moments, ideas and creativity with the world.</p>
             <div className='mt-6 flex lg:flex-row md:flex-row flex-col gap-4 lg:gap-6'>
                <Link to='/create' className='bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 px-10 py-3 text-white text-lg font-semibold text-center lg:text-medium rounded-lg shadow-lg hover:shadow-xl hover:cursor-pointer'>Create Post</Link>
                <Link to='/posts' className='px-6 py-3 text-gray-700 bg-white border border-gray-200 text-lg font-semibold lg:text-medium rounded-lg shadow-lg hover:shadow-xl hover:cursor-pointer hover:border-indigo-300 hover:text-indigo-600 transition-all flex gap-2 justify-center items-center'>Explore Posts <FaArrowRightLong className='mt-1'/></Link>
             </div>
         </div>
         <div className='lg:mt-18  mt-10 md:mt-10 lg:pr-6'>
          <img src="https://images.pexels.com/photos/30359294/pexels-photo-30359294.jpeg" alt="" className='min-w-[45vw] min-h-[42vh] rounded-2xl lg:hover:scale-[1.02] transition-all duration-300'/>
         </div>
      </div>

      {/* 2nd Section */}
      <div className='bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 mt-30 min-h-[36vh] md:min-h-[25vh] lg:min-h-[40vh] min-w-[50vw] px-20'>
        <h1 className='text-white text-center md:text-2xl text-xl lg:text-3xl font-bold pt-8'>Ready to Share Your First Story?</h1>
        <p className='text-white text-sm lg:text-base text-center pt-3 lg:pt-2'>Start posting your first moment today.</p>
        <div className='flex justify-center gap-2 items-center mt-6'>
        <Link to='/create' className='text-indigo-600 flex bg-white text-inline p-6 lg:px-10 py-3 gap-3 text-sm font-semibold md:text-base lg:text-base items-center rounded-lg cursor-pointer shadow-lg'>Create your first post<FaArrowRightLong className='mt-1 text-indigo-600'/></Link>
      </div>
      </div>
    </div>
  )
}
// https://tse2.mm.bing.net/th/id/OIP.WxtmREoB2m_4k2qnHcZwLQHaE8?r=0&pid=Api&h=220&P=0

export default Home
