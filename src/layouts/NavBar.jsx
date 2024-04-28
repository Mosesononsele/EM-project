import React from "react";
import sitenamenavLogo from "../assets/sitenamenavLogo.svg";
import homeLogo from "../assets/homeLogo.svg";
import communityLogo from "../assets/communityLogo.svg";
import meLogo from "../assets/meLogo.svg";
import '../styles/NavBar.css'

const NavBar = () => {
  // const [authShow, setAuthShow] = useState(false)
  return (
    <nav className=" nav-main d-flex justify-content-between align-items-center justify-content-around bg-white ">
      <section className="d-flex  gap-2">
        <div className="ps-">
          <img src={sitenamenavLogo} alt="sitenamenav-logo" />
        </div>

        <div className="pt-1">
          <input type="text" className="border-1 rounded"  placeholder="Search"/>
        </div>
      </section>

      <section className="d-flex  gap-5 ">
        <div className=" ">
          <img src={homeLogo} alt="home-logo" />
          <p>Home</p>
        </div>

        <div>
          <img src={communityLogo} alt="community-logo" />
          <p>community</p>
        </div>

        <div>
          <img src={meLogo} alt="me-logo" />
          <p>Me</p>
        </div>
      </section>

      
    </nav>
  );
};

export default NavBar;
