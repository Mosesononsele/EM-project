import React from 'react'
import editbtnLogo from '../assets/editbtnLogo.svg'
import logoutbtnLogo from '../assets/logoutbtnLogo.svg'
import notificationbtnLogo from '../assets/notificationbtnLogo.svg'
import { Link } from 'react-router-dom'

const AuthDropdown = () => {
  return (
  <main className='container rounded-2 bg-white m-4 mt-5 '>

  {/* div for  */}
  <div className=''>
    <img src={editbtnLogo} alt="edit-log" />
    <button className=" btn ">Edit Profile</button>
  </div> <hr />

  <div>
    <img src={notificationbtnLogo} alt="notification-logo" />
    <button className=" btn">Notifications</button>
  </div><hr />

  <div>
    <img src={logoutbtnLogo} alt="logout-logo" />
    <Link to={'../SignIn'}>
    <button className="btn ">Log Out</button>
    </Link>
  </div> <hr />
  </main>
  
  
  )
}

export default AuthDropdown