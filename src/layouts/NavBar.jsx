import React, { useState } from "react";
import sitenamenavLogo from "../assets/sitenamenavLogo.svg";
import homeLogo from "../assets/homeLogo.svg";
import communityLogo from "../assets/communityLogo.svg";
import meLogo from "../assets/meLogo.svg";
import '../styles/NavBar.css'
import AuthDropdown from "../components/AuthDropdown";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
// import homeprofilephotoImg from '../assets/homeprofilephotoImg.svg'
// import TransitionBioMobile from "../components/TransitionBioMobile";



const NavBar = () => {
  const [authShow, setAuthshow] = useState(false);
  return (
    <nav className="nav-main d-flex justify-content-between align-items-center justify-content-around bg-white ">
      <section className="d-flex  gap-2 section-1-nav  ">
        <div className="d-flex  d-md-block">
          <img src={sitenamenavLogo} alt="sitenamenav-logo" />
      </div>
          {/* <div className="d-flex d-none d-md-block">
      <img src={homeprofilephotoImg} alt="" onClick={() => setOpen(!open)}/>
          </div> */}
        <div className="pt-1">
          <input type="text" className="border-1 rounded"  placeholder="Search"/>
        </div>
      </section>

      <section className="d-flex  section-2-nav gap-5   ">
    
        <div className="  ">
          <img src={homeLogo} alt="home-logo" />
          <p>Home</p>
        </div>

        <div >
          <img src={communityLogo} alt="community-logo" />
          <p>community</p>
        </div>

          {/* onClick={!authShow ? setAuthShow (true) : setAuthShow(false)} */}
         
        <div className="">
        <Link to={'../Profile'}>
          <img src={meLogo} alt="me-logo" />
          </Link>
        {/* <div> {authShow && <AuthDropdown/>} </div> */}
        <div className="position-relative d-flex  " role="button" onClick={()=> !authShow ? setAuthshow(true) : setAuthshow(false)
        }>
         
        <p >Me </p>

        {!authShow ? (
          <div>
            <IoIosArrowUp />
          </div>
        ):(
          <div><IoIosArrowDown /></div>
        )}
        <div className="position-absolute end-0">{authShow && <AuthDropdown />}</div>
        
        </div>
        

                
          

        </div>
        
      </section>


      
    </nav>
  );
};

export default NavBar;
