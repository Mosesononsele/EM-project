import React from 'react'
import editbtnLogo from '../assets/editbtnLogo.svg'
import logoutbtnLogo from '../assets/logoutbtnLogo.svg'
import notificationbtnLogo from '../assets/notificationbtnLogo.svg'

const AuthDropdown = () => {
  return (
  <main className='container'>

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
    <button className="btn ">Log Out</button>
  </div> <hr />
  </main>
  
  
  )
}

export default AuthDropdown