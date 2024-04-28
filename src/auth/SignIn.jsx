import React from "react";
import generalauthImg from "../assets/generalauthImg.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import sitenameLogo from "../assets/sitenameLogo.svg";

const SignIn = () => {
  return (
    <main className="container">
      <div className="d-lg-flex  justify-content-center row ">
        {/* div for img */}
        <div className="col-lg-6 d-flex  d-none d-lg-block justify-content-center align-items-center   bg-light py-5 px-5 w- ">
          <img src={generalauthImg} alt="generalauth-img "  className="w-100 img-fluid"/>
        </div>

        {/* div for form */}
        <div className=" text-center border   justify-content-center align-content-center align-items-center bg-white  col-lg-6 p-5">
          <img src={sitenameLogo} alt="sitename-logo" />
          <h3>Welcome back to EM</h3>
          <p>Sign in to your account</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="bg-light"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                className="bg-light"
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me signed in" />
              </Form.Group>
              <p>Forgot password?</p>
            </div>
            <Button
              variant="primary"
              type="submit"
              className="w-100 d-flex justify-content-center align items enter "
            >
              Sign In
            </Button>
            <p>
              By signing in you accept our Privacy Policy, Terms & Licensing
              Agreement. Protected by reCAPTCHA. Google Privacy
              Policy & Terms apply.
            </p>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
