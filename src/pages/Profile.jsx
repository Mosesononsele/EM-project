import React from 'react'
import profilephotoIcon from '../assets/profilephotoImg.jpg' 
import followingIcon from '../assets/followingIcon.svg'
import followersIcon from '../assets/followersIcon.svg'
import likesIcon2 from '../assets/likeIcon2.svg'
import locationIcon from '../assets/locationIcon4profile.svg'
import realtorbagIcon from '../assets/realtorbagIcon.svg'
import xIcon from '../assets/X-icon4profile.svg'
import linkedlnIcon from '../assets/linkdlnicon4profile.svg'
import profilefirstpostImg from '../assets/profilefirstpostImg.jpg'
import profilesecondpostImg from '../assets/profilesecondpostImg.jpg'
import profilethirdpostImg from '../assets/profilethirdpostImg.jpg'
import profilefourthpostImg from '../assets/profilefourthpostImg.jpg'
import commentIcon from '../assets/commentIcon.svg'
import forwardpostIcon from '../assets/forwardposticon.svg'
import likeplainIcon from '../assets/likesplainIcon.svg'
import homeprofilephotoIcon from '../assets/homeprofilephotoImg.svg'
import NavBar from '../layouts/NavBar'
import '../styles/Profile.css'
import CommentModal from '../components/CommentModal'
import BioModal from '../components/BioModal'
import ProfileBioModal from '../components/ProfileBioModal'



const Profile = () => {
  return (
    <main className=' container-desktop row justify-content-center bg-light gap-3 mb-5'>

      <NavBar/>

    {/* section-1 */}
    <section className='section-2-profile d-flex d-none d-lg-block col-lg-4 bg-white h-50 shadow mt-3'> 
      <div className='d-flex gap-3'>
<img src={homeprofilephotoIcon} alt="profile-photo-icon" />
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

{/* section-2 */}
    <section className='col-lg-6 d-lg-flex row gap-3 bg-white mt-3 '>
{/* parent div for first post */}
<div className='shadow rounded-3'>
  <div className='d-flex align-items-center justify-content-between gap-3'>
  <ProfileBioModal/>
    {/* <img src={homeprofilephotoIcon} alt="profile-photo-icon" /> */}
    <div className='d-flex row col mt-4'>
    <h5>John Doe</h5>
    <p>8 mins ago</p>
    </div>
    <button className=' btn btn-white border border-dark shadow  rounded-5'>Following</button>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.</p>
  <img src={profilefirstpostImg} alt="first-post-img" className='w-100 img-fluid' />

{/* div for likes, comment and forward icons */}
  <div className='d-flex justify-content-between mt-3 pb-3'>
    <div className='d-flex gap-3'>
    <img src={likeplainIcon} alt="likes-plain-icon" />
    <CommentModal/>
    {/* <img src={commentIcon} alt="comment-icon" /> */}
    </div>
    <img src={forwardpostIcon} alt="forward-post-icon" />
  </div>
</div>

{/* parent div for second post  */}
<div className='shadow rounded-3'>
  <div className='d-flex align-items-center justify-content-between gap-3'>
    <img src={homeprofilephotoIcon} alt="profile-photo-icon" />
    <div className='d-flex row col mt-4'>
    <h5>John Doe</h5>
    <p>8 mins ago</p>
    </div>
    <button className=' btn btn-white border border-dark shadow  rounded-5'>Following</button>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.</p>
  <img src={profilesecondpostImg} alt="first-post-img" className='w-100 img-fluid' />

{/* div for likes, comment and forward icons */}
  <div className='d-flex justify-content-between mt-3 pb-3'>
    <div className='d-flex gap-3'>
    <img src={likeplainIcon} alt="likes-plain-icon" />
    <CommentModal/>
    {/* <img src={commentIcon} alt="comment-icon" /> */}
    </div>
    <img src={forwardpostIcon} alt="forward-post-icon" />
  </div>
</div>

{/* parent div for third post */}
<div className='shadow'>
  <div className='d-flex align-items-center justify-content-between gap-3'>
    <img src={homeprofilephotoIcon} alt="profile-photo-icon" />
    <div className='d-flex row col mt-4'>
    <h5>John Doe</h5>
    <p>8 mins ago</p>
    </div>
    <button className=' btn btn-white border border-dark shadow  rounded-5'>Following</button>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.</p>
  <img src={profilethirdpostImg} alt="first-post-img" className='w-100 img-fluid' />

{/* div for likes, comment and forward icons */}
  <div className='d-flex justify-content-between mt-3 pb-3'>
    <div className='d-flex gap-3'>
    <img src={likeplainIcon} alt="likes-plain-icon" />
    <CommentModal/>
    {/* <img src={commentIcon} alt="comment-icon" /> */}
    </div>
    <img src={forwardpostIcon} alt="forward-post-icon" />
  </div>
</div>

{/* parent div for fourth post */}
<div className='shadow mb-4'>
  <div className='d-flex align-items-center justify-content-between gap-3'>
    <img src={homeprofilephotoIcon} alt="profile-photo-icon" />
    <div className='d-flex row col mt-4'>
    <h5>John Doe</h5>
    <p>8 mins ago</p>
    </div>
    <button className=' btn btn-white border border-dark shadow  rounded-5'>Following</button>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.</p>
  <img src={profilefourthpostImg} alt="first-post-img" className='w-100 img-fluid' />

{/* div for likes, comment and forward icons */}
  <div className='d-flex justify-content-between mt-3 pb-3'>
    <div className='d-flex gap-3'>
    <img src={likeplainIcon} alt="likes-plain-icon" />
    <CommentModal/>
    {/* <img src={commentIcon} alt="comment-icon" /> */}
    </div>
    <img src={forwardpostIcon} alt="forward-post-icon" />
  </div>
</div>
    </section>
   </main>
  )
}

export default Profile