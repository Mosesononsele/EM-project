import React from 'react'
import idrisprofilephotoIcon from '../assets/idrisprofilephotoIcon.svg'
import elenaprofilephotoIcon from '../assets/elenaprofilephotoIcon.svg'
import cynthiaprofilephotoIcon from '../assets/cynthiaprofilephotoIcon.svg'

const Comment = () => {
  return (
   <main className='bg-white container w-50 h-50'>
    <h2>Add Comment</h2>
    <div>

   <textarea name="" id="" cols="50" rows="10" className='rounded-3 border border-dark border-1  bg-light shadow'></textarea>
    </div>

   <div className='d-flex justify-content-end mt-2 align-items-center'>
    <button className='btn btn-primary rounded-5 align-items-center  '>Post</button>
   </div>
   <h4>Previous Comments</h4>

   <div>
    <div className='d-flex justify-content-between align-items-center'>
        <img src={idrisprofilephotoIcon} alt="profile-photo" />
        <div>
        <h5>Idris Santa</h5>
        <p>8 mins ago</p>
        </div>
          <button className='btn btn-white border rounded-5 '>Follower +</button>
    </div>
   </div>


   
   </main>
  )
}

export default Comment