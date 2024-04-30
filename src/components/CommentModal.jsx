import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import commentIcon from '../assets/commentIcon.svg'
import idrisprofilephotoIcon from '../assets/idrisprofilephotoIcon.svg'
import elenaprofilephotoIcon from '../assets/elenaprofilephotoIcon.svg'
import cynthiaprofilephotoIcon from '../assets/cynthiaprofilephotoIcon.svg'
import '../styles/CommentModal.css'



const CommentModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
   <main className=''>
 <div>
    <img src={commentIcon} alt="comment-icon" onClick={handleShow}/>
 </div>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex container align-items-center'>
<textarea name=" " id="" cols="100" rows="10" className='rounded-3 border border-dark border-1  bg-light shadow'></textarea>
 </div>
 <div className='d-flex justify-content-end mt-2 align-items-center'>
 <Button className='rounded-5 btn-comment' variant="secondary" onClick={handleClose}>
            Post
          </Button>
   </div>
   <h4>Previous Comments</h4>

<div className='gap-1 d-flex  row '>

   <div className='border rounded-2 justify-content-center pe-2 ps-2'>

    <div className='col d-flex justify-content-between align-items-center gap-3 '>
        
        <img src={idrisprofilephotoIcon} alt="profile-photo" />
        <div className='col mt-3'>
        <h5>Idris Santa</h5>
        <p>8 mins ago</p>
        </div>
          <button className='btn btn-white border rounded-5 '>Follower +</button>
    </div>
          <p>Lorem ipsum dolor sit amet consectetur. Sit in mauris consequat sed euismod vitae egestas diam. Diam fames in morbi egestas. Sit fermentum nisi.</p>
   </div>

   
   <div className='border rounded-2 justify-content-center pe-2 ps-2'>
    <div className='col d-flex justify-content-between align-items-center gap-3 '>
    
        <img src={elenaprofilephotoIcon} alt="profile-photo" />
        <div className='col mt-3'>
        <h5>Idris Santa</h5>
        <p>12 mins ago</p>
        </div>
          <button className='btn btn-white border rounded-5 '>Follower +</button>
    </div>
          <p>Lorem ipsum dolor sit amet consectetur. </p>
   </div>


   <div className='border rounded-2 justify-content-center pe-2 ps-2'>
    <div className='col d-flex justify-content-between align-items-center gap-3 '>

        <img src={cynthiaprofilephotoIcon} alt="profile-photo" />
        <div className='col mt-3'>
        <h5>Idris Santa</h5>
        <p>45 mins ago</p>
        </div>
          <button className='btn btn-white border rounded-5 '>Follower +</button>
    </div>
          <p>Lorem ipsum dolor sit amet consectetur. Sit in mauris consequat sed euismod vitae egestas diam. Diam fames in morbi egestas. Sit fermentum nisi maecenas blandit posuere at sit. </p>
   </div>
</div>
   

    
   

            </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>

   </main>
  )
}

export default CommentModal