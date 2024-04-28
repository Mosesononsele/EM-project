import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import './App.css'
import ForgottenPsw from './auth/ForgottenPsw'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import NavBar from './layouts/NavBar'
import Home from './pages/Home'
import Registration from './pages/Registration'
import AuthDropdown from './components/AuthDropdown'
import FriendProfile from './pages/FriendProfile'
import Profile from './pages/Profile'
import Comment from './pages/Comment'

function App() {
  
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route element={<> <NavBar/> </>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='SignUp' element={<SignUp/>}/>
      <Route path='/ForgottenPsw' element={<ForgottenPsw/>}/>
      <Route path='/Registration' element={<Registration/>}/>
      <Route path='/AuthDropDown' element={ <AuthDropdown/> }/>
      <Route path='/FriendProfile' element={<FriendProfile/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Comment' element={<Comment/> } />


    </Routes>
    
    </BrowserRouter>
  
      
      
      


    
    </>
  )
}

export default App
