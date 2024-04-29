import React from 'react'
import generalauthImg from '../assets/generalauthImg.png'
import sitenameLogo from '../assets/sitenameLogo.svg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ForgottenPsw = () => {
  return (
   <main className='container'>
{/* parent div */}
    <div className='row'>

{/* div for img */}
    <div className='col-lg-6 border p-5 d-flex d-none d-lg-block align-content-center  bg-light'>
      <img src={generalauthImg} alt="generalauth-img" className='w-100 img-fluid '/>
    </div>
{/* div for form */}
    <div className='bg-white col-lg-6 border d-flex  align-content-center text-center row '>
      <div className=''>
        <img src={sitenameLogo} alt="sitename-logo" className='img-fluid' />
        <h3>Forgot Password</h3>
        <p>Enter email address to recover password</p>
      </div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className='bg-light' />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="recover password" className='w-100 '>
       Recover Password
      </Button>
    </Form>

    </div>
    </div>
   </main>
  )
}

export default ForgottenPsw