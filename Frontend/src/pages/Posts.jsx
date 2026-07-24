import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Posts() {
  const [post,setPost] = useState([])
            // Call backend get Api
  useEffect(()=>{
    axios.get('http://localhost:8080/posts')
    .then((res)=>{
      setPost(res.data.posts)
    })
  },[])

  return (
    <div className='bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 min-h-[90vh]'>
      {
        post.map((p)=>{
          return <div key={p._id} className='lg:px-16 px-12 flex justify-center items-center'>
          <div className='bg-white max-w-4xl w-full rounded-xl shadow-lg p-6 my-8 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'>
            <div className='w-full lg:h-80 h-70 overflow-hidden rounded-xl'>
              <img src={p.image} className='w-full h-full object-cover' alt="" />
            </div>
            <h1 className='text-gray-700 text-base leading-7 px-1 py-3'>{p.caption}</h1>
          </div>
          </div>
        })
      }
    </div>
  )
}

export default Posts
