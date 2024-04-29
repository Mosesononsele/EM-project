import React from 'react'
import post1Img from '../assets/post1Img.jpg'
import post2Img from '../assets/post2Img.jpg'
import post3Img from '../assets/post3Img.jpg'

const Post = () => {
  return (
   <main className='container justify-content-center align-items-center '>

    <div className='w-100'>

    <textarea name="" id="" cols="100" rows="8" className='rounded-3 border border-dark border-1 w- bg-light shadow' placeholder='Write Post'></textarea>

    <div className=' d-flex w-'>
        <img src={post1Img} alt="post-img" className='img-fluid' />
        <img src={post2Img} alt="post-img" className='img-fluid' />
        <img src={post3Img} alt="post-img" className='img-fluid' />
    </div>

<div className='text-end'>
    <button className='btn btn-primary mt-3  rounded-5 w-25 '>Post</button>
</div>
    </div>
   </main>
  )
}

export default Post