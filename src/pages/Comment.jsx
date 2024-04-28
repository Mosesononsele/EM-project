import React from 'react'
import idrisprofilephotoIcon from '../assets/idrisprofilephotoIcon.svg'
import elenaprofilephotoIcon from '../assets/elenaprofilephotoIcon.svg'
import cynthiaprofilephotoIcon from '../assets/cynthiaprofilephotoIcon.svg'

const Comment = () => {
  return (
   <main className='bg-white container'>
    <h2>Add Comment</h2>
   <textarea name="" id="" cols="100" rows="8" className='rounded-3 border border-dark border-1  bg-light shadow'></textarea>

   <div className='d-flex justify-content-end mt-2'>
    <button className='btn btn-primary rounded-5 w-25 '>Post</button>
   </div>
   <h4>Previous Comments</h4>

   <div>
    <div>
        <img src={idrisprofilephotoIcon} alt="profile-photo" />
        

    </div>
   </div>


   
   </main>
  )
}

export default Comment