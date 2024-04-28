import React from "react";
import '../styles/Home.css'
import homeprofilephotoImg from "../assets/homeprofilephotoImg.svg";
import locationicon4profile from "../assets/locationIcon4profile.svg";
import linkdlnIcon4profile from "../assets/linkdlnicon4profile.svg";
import xicon4profile from "../assets//X-icon4profile.svg";
import realtorbagIcon4profile from "../assets/realtorbagIcon.svg";
import galaryImg from "../assets/galleryImg.svg";
import friendprofilephotoIcon from "../assets/friendprofilephotoIcon.svg";
import firstfriendpostImg from "../assets/firstfriendpostImg.jpg";
import likesIcon from "../assets/likesIcon.svg";
import forwardpostIcon from "../assets/forwardposticon.svg";
import commentIcon from "../assets/commentIcon.svg";
import secondfriendprofilephotoIcon from "../assets/secoondfrindprofilephotoIcon.svg";
import likesplainIcon from "../assets/likesplainIcon.svg";
import secondfriendpostImg from "../assets/secondfriendpostImg.jpg";
import thirdfriendpostImg from "../assets/thirdfriendpostImg.jpg";
import thirdfriendprofilephotoIcon from "../assets/thirdfriendprofilephotoIcon.svg";
import forthfriendpostImg from '../assets/forthfriendpostImg.jpg'
import forthfriendprofilephotoIcon from '../assets/fourthfrindprofilephotoIcon.svg'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavBar from "../layouts/NavBar";


const Home = () => {
  return (
    <main className=" container main-home  bg-light row d-flex justify-content-center gap-4">

      <NavBar/>
      {/* section-1 */}
      <section className="shadow  section-1-home col-lg-3 bg-white  h-50 ">
        <div className="  d-flex align-items-center gap-3">
          <img
            src={homeprofilephotoImg}
            alt="home-profilephoto-img"
            className="img-fluid"
          />
          <div className="mt-4 ">
            <h4>John Doe</h4>
            <p>0 Friends</p>
          </div>
        </div>

        <hr />
        <h5>Bio</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur. Mi nec turpis vulputate sed.
          Tellus quisque pharetra facilisi nisl nisi consectetur. Sed in nisi
          convallis vitae tortor rhoncus.
        </p>
        <hr />
        <h5>Info</h5>

        <div className="d-flex gap-3 align-items-center ">
          <img src={locationicon4profile} alt="location-icon" />
          <h5>Lagos, Nigeria</h5>
        </div>

        <div className="d-flex gap-3 align-items-center mb-4 mt-4">
          <img src={realtorbagIcon4profile} alt="reatorbag-icon" />
          <h5>Realtor</h5>
        </div>
        <hr />
        <div className="d-flex gap-3 align-items-center">
          <img src={xicon4profile} alt="x-icon" />
          <h5>Twitter</h5>
        </div>

        <div className="d-flex gap-3 align-items-center">
          <img src={linkdlnIcon4profile} alt="linkdln-icon" />
          <h5>Linkdln</h5>
        </div>
      </section>

      {/* section-2 */}
      <section className=" section-2-home col-lg-6  d-flex justify-content-center   row gap-2 ">
        {/* first parent div for my post */}
        <div className="bg-white shadow rounded-2 pt-2 ">
          <div className="d-flex mb-4  gap-2 justify-content-center align-items-center  ">
            <img src={homeprofilephotoImg} alt="profile-icon" />
            <Form.Control
              size="sm"
              type="text"
              placeholder="What do you want to ask or share?"
              className="rounded-5"
            />
          </div>

          <div className="d-flex justify-content-between mb-4 ">
            <div className="d-flex align-items-center gap-2">
              <img src={galaryImg} alt="galary-img" />
              <h6>Image</h6>
            </div>
            <Button
              type="submit"
              className="btn btn-primary rounded-5 w-25 border"
            >
              Post
            </Button>
          </div>
        </div>

        {/* second parent  div (for first friend post) */}
        <div className="mt-3 rounded-2  bg-white shadow  ">
          <div className="d-flex gap-2 align-items-center justify-content-between">
            <img src={friendprofilephotoIcon} alt="friend-profilephoto-icon" />
            <div className="col pt-3 ">
              <h5>Yuji Itadori</h5>
              <p>8 mins ago</p>
            </div>
            <button className="btn border rounded-5 w-25">Following</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum
            vivamus orci. Lorem consectetur neque sit sociis turpis quisque.
            Auctor ullamcorper quam sit mattis posuere pulvinar molestie
            dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac
            suscipit cum.
          </p>
          <img
            src={firstfriendpostImg}
            alt="first-friend-post-img"
            className="img-fluid w-100"
          />
{/* div for likes, comments and forward icons */}
          <div className="d-flex justify-content-between mt-t">
            <div className="d-flex gap-3">
              <img src={likesIcon} alt="likes-icon" />
              <img src={commentIcon} alt="comment-icon" />
            </div>
            <img src={forwardpostIcon} alt="iforward-post-icon" />
          </div>
        </div>

        {/* third parent div (for second frind post) */}
        <div className=" bg-white shadow rounded-2">
          <div className="d-flex gap-2 align-items-center justify-content-between ">
            <img
              src={secondfriendprofilephotoIcon}
              alt="second-friend-profile-photo"
            />
            <div className="col pt-4">
              <h5>Naogami Shinya</h5>
              <p>8 mins ago</p>
            </div>

            <button className="btn border rounded-5 w-25">Follow +</button>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum
            vivamus orci. Lorem consectetur neque sit sociis turpis quisque.
            Auctor ullamcorper quam sit mattis posuere pulvinar molestie
            dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac
            suscipit cum.
          </p>

          <img
            src={secondfriendpostImg}
            alt="second-friend-post-img"
            className="w-100 img-fluid"
          />
{/* div for likes, comments and forward icons */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3">
              <img src={likesplainIcon} alt="likes-icon" />
              <img src={commentIcon} alt="comment-icon" />
            </div>
            <img src={forwardpostIcon} alt="forward-post-icon" />
          </div>
        </div>

        {/* fourth parent div for (third friend post) */}
        <div className="pt-5 bg-white shadow rounded-2">
          <div className="d-flex gap-2 align-items-center justify-content-between">
            <img
              src={thirdfriendprofilephotoIcon}
              alt="third-friend-profile-photo-icon"
            />
            <div className="col pt-4">
              <h5>Gama Oyabin</h5>
              <p>8 mins ago</p>
            </div>
            <button className="btn border rounded-5 w-25">Following</button>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum
            vivamus orci. Lorem consectetur neque sit sociis turpis quisque.
            Auctor ullamcorper quam sit mattis posuere pulvinar molestie
            dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac
            suscipit cum.
          </p>

          <img
            src={thirdfriendpostImg}
            alt="third-friend-post-img"
            className="w-100 img-fluid"
          />
{/* div for likes, comments and forward icons */}
          <div className="d-flex justify-content-between pt-2">
            <div className="d-flex gap-3">
            <img src={likesplainIcon} alt="like-plain-icon" />
            <img src={commentIcon} alt="comment-icon" />
            </div>
              <img src={forwardpostIcon} alt="forward-post-icon" />
            
          </div>
        </div>

        {/* fifth parent div (for forth fried post) */}
        <div className="pt-5 pb-5 bg-white shadow rounded-2">

          <div className="d-flex gap-2 align-items-center justify-content-between">
          <img src={forthfriendprofilephotoIcon} alt="forth-friend-profile-photo-icon" />
          <div className="col pt-4">
          <h5>Senju Hashirama</h5>
          <p>8 mins ago</p>
          </div>
          
          <button className="btn border rounded-5 w-25">Following</button>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.</p>

          <img src={forthfriendpostImg} alt="forth-friend-post-img" className="w-100 img-fluid" />

          <div className="d-flex justify-content-between  pt-3">
            <div className="d-flex gap-3">
            <img src={likesplainIcon} alt="likes-plain-icon" />
            <img src={commentIcon} alt="comment-icon" />
            </div>
            <img src={forwardpostIcon} alt="forward-post-icon" />

          </div>
          
          




        </div>
      </section>
    </main>
  );
};

export default Home;
