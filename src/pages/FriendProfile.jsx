import React from 'react'
import friendprofilephotoIcon from '../assets/friendprofilephotoIcon.svg'
import followersIcon from '../assets/followersIcon.svg'
import likesIcon2 from '../assets/likeIcon2.svg'
import followingIcon from '../assets/followingIcon.svg'
import locationIcon from '../assets/locationIcon4profile.svg'
import realbagtorIcon from '../assets/realtorbagIcon.svg'
import xIcon from '../assets/X-icon4profile.svg'
import linkdlnIcon from '../assets/linkdlnicon4profile.svg'
import friendfirstpostImg from '../assets/friendfirstpostImg.jpg'
import friendsecondpostImg from '../assets/friendsecondpostImg.jpg'
import friendthirdpostImg from '../assets/friendthirdpostImg.jpg'
import friendfourthpostImg from '../assets/friendfourthpostImg.jpg'
import likeplainIcon from '../assets/likesplainIcon.svg'
import commentIcon from '../assets/commentIcon.svg'
import forwardpostIcon from '../assets/forwardposticon.svg'
import NavBar from '../layouts/NavBar'
import '../styles/FriendProfile.css'
import CommentModal from '../components/CommentModal'



const FriendProfile = () => {
  return (
    <main className=' container-desktop row d-flex justify-content-center bg-light gap-3 align-content-center mb-5'>
      
      <NavBar/>

      


    {/* section-1 */}
    <section className=' section-1-fp col-lg-4 col bg-white h-50 shadow mt-3 d-flex d-none d-lg-block'> 
      <div className='d-flex gap-3'>
<img src={friendprofilephotoIcon} alt="friend-profile-photo-icon" />
<div className=' mt-4'>
<h5>Yuji Itadori</h5>
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
          <img src={realbagtorIcon} alt="realtor-icom
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
            <img src={linkdlnIcon} alt="linkedln-icon" />
            <h6>Linkedln</h6>
          </div>

      </div>
    </section>

{/* section-2 */}
    <section className='col-lg-6 d-lg-flex row gap-3 bg-white mt-3 '>
{/* parent div for first post */}
<div className='shadow rounded-3'>
  <div className='d-flex align-items-center justify-content-between gap-3'>
    <img src={friendprofilephotoIcon} alt="friend-profile-photo-icon" />
    <div className='d-flex row col mt-4'>
    <h5>Yuji Itadori</h5>
    <p>8 mins ago</p>
    </div>
    <button className=' btn btn-white border border-dark shadow  rounded-5'>Following</button>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.</p>
  <img src={friendfirstpostImg} alt="first-post-img" className='w-100 img-fluid' />

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
    <img src={friendprofilephotoIcon} alt="friend-profile-photo-icon" />
    <div className='d-flex row col mt-4'>
    <h5>Yuji Itadori</h5>
    <p>8 mins ago</p>
    </div>
    <button className=' btn btn-white border border-dark shadow  rounded-5'>Following</button>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.</p>
  <img src={friendsecondpostImg} alt="first-post-img" className='w-100 img-fluid' />

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
    <img src={friendprofilephotoIcon} alt="friend-profile-photo-icon" />
    <div className='d-flex row col mt-4'>
    <h5>Yuji Itadori</h5>
    <p>8 mins ago</p>
    </div>
    <button className=' btn btn-white border border-dark shadow  rounded-5'>Following</button>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.</p>
  <img src={friendthirdpostImg} alt="first-post-img" className='w-100 img-fluid' />

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
    <img src={friendprofilephotoIcon} alt="friend-profile-photo-icon" />
    <div className='d-flex row col mt-4'>
    <h5>Yuji Itadori</h5>
    <p>8 mins ago</p>
    </div>
    <button className=' btn btn-white border border-dark shadow  rounded-5'>Following</button>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.</p>
  <img src={friendfourthpostImg} alt="first-post-img" className='w-100 img-fluid' />

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

export default FriendProfile