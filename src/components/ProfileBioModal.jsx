import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import homeprofilephotoIcon from '../assets/profilephotoImg.jpg' 
import followingIcon from '../assets/followingIcon.svg'
import followersIcon from '../assets/followersIcon.svg'
import likesIcon2 from '../assets/likeIcon2.svg'
import locationIcon from '../assets/locationIcon4profile.svg'
import realtorbagIcon from '../assets/realtorbagIcon.svg'
import xIcon from '../assets/X-icon4profile.svg'
import linkedlnIcon from '../assets/linkdlnicon4profile.svg'
// import meLog from '../assets/meLogo.svg'
import homeprofilephotoImg from '../assets/homeprofilephotoImg.svg'



const ProfileBioModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <main>
<div>
    <img src={homeprofilephotoImg} alt=""  onClick={handleShow} />
</div>

      <Modal size='' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <section className=''> 
      <div className='d-flex gap-3'>
<img src={homeprofilephotoImg} alt="profile-photo-icon" />
<div className=' mt-4'>
<h5>John Doe</h5>
<p>0 Friends</p>
</div>
      </div>
      <hr />
      <h5>Bio</h5>
      <p>Lorem ipsum dolor sit amet consectetur. Mi nec turpis vulputate sed. Tellus quisque pharetra facilisi nisl nisi consectetur. Sed in nisi convallis vitae tortor rhoncus.</p>
      <hr />
      <h5>Activities</h5>
      {/* div for followers Icon */}
      <div className='d-flex mt-3 justify-content-between'>
        <div className='d-flex gap-3 align-items-center'>
        <img src={followersIcon} alt="followers-icon" />
        <h6>Followers</h6>
        </div>
          <h6> 1000</h6>
      </div>
      
      {/* div for following icon */}
      <div className='d-flex justify-content-between mt-3 '>
        <div className='d-flex gap-3 align-items-center '>
          <img src={followingIcon} alt="following-icon" />
          <h6>Following</h6>
        </div>
        <h6>1000</h6>
      </div>

      {/* div for like Icon2 */}
      <div className='d-flex mt-3 justify-content-between'>
        <div className='d-flex gap-3 align-items-center'>
          <img src={likesIcon2} alt="like-icon2" />
          <h6>Likes</h6>
        </div>
        <h6>1000</h6>
      </div>
      <hr />

      {/* div for location and Realtor icon */}
      <div>
        <h5>Info</h5>
        <div className='d-flex align-items-center gap-3 mt-3'>
          <img src={locationIcon} alt="location-icon" />
          <h6>Lagos, Nigeria</h6>
        </div>

        <div className='d-flex mt-3 align-items-center gap-3'>
          <img src={realtorbagIcon} alt="realtor-icom
          n" />
          <h6>Realtor</h6>
        </div>
      </div>
      <hr />

      {/* div for x-icon and linkdln icon */}
      <div>
        <h5>Socials</h5>
        <div className='d-flex align-items-center mt-3 gap-3'>
          <img src={xIcon} alt="x-twitter-icon" />
          <h6>Twitter</h6>
        </div>

          <div className='d-flex align-items-center gap-4 mt-3 mb-3'>
            <img src={linkedlnIcon} alt="linkedln-icon" />
            <h6>Linkedln</h6>
          </div>

      </div>
    </section>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>

    </main>
  )
}

export default ProfileBioModal