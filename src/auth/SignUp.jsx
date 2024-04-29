import React from "react";
import generalauthImg from "../assets/generalauthImg.png";
import sitenameLogo from "../assets/sitenameLogo.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <main className="container  ">
      {/* main div */}
      <div className="row">
        {/* div for img */}
        <div className=" d col-lg-6 p-5  bg-light border d-flex d-none d-lg-block ">
          <img src={generalauthImg} alt="" className="img-fluid w-100" />
        </div>
        {/* div for form */}
        <div className=" signup-div  col-lg-6 bg-white  align-content-center justify-content-center text-center border position-relative ">

          <div className="">
          <img src={sitenameLogo} alt="sitename-logo" className="img-fluid " />
          <h2>Welcome to EM</h2>
          <p>Sign up for free</p>
          </div>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" className="bg-light"/>
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="formBasicText" >
              <Form.Control type="text" placeholder="Username" className="bg-light " />
            </Form.Group>
            <p className="position-absolute start-0 ms-4"> <GoPerson /> </p>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" className="bg-light"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Confirm Password" className="bg-light"/>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign Up
            </Button>

            <p className="text-start ">Already have an account? <Link to={'../SignIn'}><span role="button" className="text-primary">Sign In</span> </Link> </p>

            <p>
              By signing up you accept our Privacy Policy, Terms & Licensing
              Agreement. Protected by reCAPTCHA. Google Privacy
              Policy & Terms apply.
            </p>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
