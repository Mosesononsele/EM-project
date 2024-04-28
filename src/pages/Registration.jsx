import React from 'react'
// import Col from 'react-bootstrap/Col';

// import Image from 'react-bootstrap/Image';


// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import profilephotoImg from '../assets/profilephotoImg.jpg'
import '../styles/Registration.css'
import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

const Registration = () => {
  return (
   <main className='bg-white container '>

    <div className='row'>

    <div className='col-lg-6'>
    <p>Hi, <span className='text-primary'>John Doe</span></p>
    <h4>Complete Your Profile</h4>

       
        
      
    <img role='button' src={profilephotoImg} alt="profilephoto-img" className='w-100 img-fluid' />

    <Form.Group  controlId="formFile" className="mb-3  
     ">
        <Form.Control type="file" className='form-filebtn' />
      </Form.Group>
    </div>

    {/* div for form */}
    <div className='col-lg-5  divforreg-form   justify-items-center align-content-center'>
      <h5 className=''>Basic Information</h5>
      <Form>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" className='bg-light' rows={3} placeholder='Bio' /> 
      </Form.Group>
    </Form>


<div className='d-flex gap-1'>
      <Form.Group className="mb-3 w-50" controlId="formGridAddress1" >
        <Form.Control placeholder="Age" className='bg-light' />
      </Form.Group >

      <Form.Group className="mb-3  w-50 winny" controlId="formGridAddress1">
        <Form.Control placeholder="Gender" className='bg-light'  />
      </Form.Group >
</div>

<Form.Group className="mb-3 winny" controlId="formGridAddress1">
        <Form.Control placeholder="Location" className='bg-light' />
      </Form.Group >

      <Form.Group className="mb-3 winny" controlId="formGridAddress1">
        <Form.Control placeholder="Occupation" className='bg-light' />
      </Form.Group >

      <h5 className='pt-2 pb-1'>Socials</h5>

      <Form.Group className="mb-3 winny" controlId="formGridAddress1">
        <Form.Control placeholder="X App" className='bg-light' />
      </Form.Group >

      <Form.Group className="mb-3 winny" controlId="formGridAddress1">
        <Form.Control placeholder="Linkdln" className='bg-light' />
      </Form.Group >

      {/* <button className="btn mt-4 btn-primary mt-3 btnconreg " >Continue</button> */}
      {/* <Form>
      <fieldset disabled> */}
        {/* <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Can't check this"
          />
        </Form.Group> */}
        <Button   type="submit" className='btn submitreg-btn border border'>Continue</Button>
      {/* </fieldset>
    </Form> */}
    </div>
    </div>

   </main>
  )
}

export default Registration